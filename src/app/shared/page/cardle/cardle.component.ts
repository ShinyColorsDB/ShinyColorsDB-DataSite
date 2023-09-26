import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as PIXI from 'pixi.js';
import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';
import { Cardle } from '../../interfaces/cardle';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { ShinycolorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';

@Component({
  selector: 'app-cardle',
  templateUrl: './cardle.component.html',
  styleUrls: ['./cardle.component.css'],
  host: {
    class: 'col-lg-10 col-md-8 col-sm-12 overflow-auto h-100',
  }
})
export class CardleComponent implements OnInit, AfterViewInit {

  @ViewChild('cardleTitle') cardleTitle!: ElementRef<HTMLHeadingElement>;
  @ViewChild('canvasDiv') canvasDiv!: ElementRef<HTMLDivElement>;
  @ViewChildren('resultDiv') resultDiv!: QueryList<ElementRef<HTMLDivElement>>;

  @ViewChild('idolList') idolList!: ElementRef<HTMLSelectElement>;
  @ViewChild('cardList') cardList!: ElementRef<HTMLSelectElement>;

  @ViewChild('skipBtn') skipBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('guessBtn') guessBtn!: ElementRef<HTMLButtonElement>;

  @ViewChild('resultModal') resultModal!: ElementRef<NgbModal>;

  spriteArray: PIXI.Sprite[] = [];
  resultArray: HTMLDivElement[] = [];

  cardleInfo!: Cardle;
  cardleImage!: PIXI.Sprite;

  imgUri: string | null = "";

  selectedIdol: number = 1;
  currentChunk: number = 0;

  guessResults: number[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private utilitiesService: UtilitiesService,
    private scApiService: ShinyColorsApiService,
    private scUrlService: ShinycolorsUrlService,
    private modalService: NgbModal,
    private meta: Meta,
    private title: Title,
  ) {
    this.title.setTitle('ShinyColors Cardle')
    this.meta.addTags([
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'ShinyColors Cardle' },
      { name: 'og:description', content: '每日卡牌猜猜樂, Daily Cardle Game from ShinyColors' },
      { name: 'og:url', content: 'https://shinycolors.moe/cardle/' },
      //{ name: 'og:image', content: 'https://shinycolors.moe/assets/images/cardle.png' },
      { name: 'theme-color', content: "#25c22a" },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'ShinyColors Cardle' },
      { name: 'twitter:description', content: '每日卡牌猜猜樂, Daily Cardle Game from ShinyColors' },
      //{ name: 'twitter:image', content: 'https://shinycolors.moe/assets/images/cardle.png' },
      { name: 'twitter:url', content: 'https://shinycolors.moe/cardle/' },
      { name: 'description', content: '每日卡牌猜猜樂, Daily Cardle Game from ShinyColors'}
    ]);
  }

  ngOnInit(): void {
    this.utilitiesService.mobileTitle.emit('ShinyColors Cardle');
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      console.log('platform is not browser');
      return;
    }
    this._getCardle();
    this._initIdolList();
    this._initCardList();
    this._initBtnListener();
  }

  _getCardle(): void {
    this.scApiService.getCardleInfo().subscribe((data) => {
      this.cardleInfo = data;
      this._initCanvas();
    });
  }

  getImageUrl(): string {
    if (this.cardleInfo.enzaId.startsWith('1')) {
      if (this.cardleInfo.cardleType == 0) { // P card normal
        return this.scUrlService.getCardUrl(Number(this.cardleInfo.enzaId));
      }
      else { // P card fes
        return this.scUrlService.getFesCardUrl(Number(this.cardleInfo.enzaId));
      }
    }
    else { // S card
      return this.scUrlService.getSupportCardUrl(Number(this.cardleInfo.enzaId));
    }
  }

  async _initCanvas(): Promise<void> {
    this.canvasDiv.nativeElement.innerHTML = "";
    this.spriteArray = [];
    PIXI.settings.RENDER_OPTIONS!.backgroundColor = 0xd9d9d9;

    this.imgUri = this.getImageUrl();

    this.cardleImage = new PIXI.Sprite(
      await PIXI.Assets.load(this.imgUri)
    );
    for (let i = 0; i < 6; i++) {
      const thisCanvas = new PIXI.Application<HTMLCanvasElement>({
        width: 100,
        height: 100,
      });
      const newTex = new PIXI.Texture(this.cardleImage.texture.baseTexture, new PIXI.Rectangle(
        this.cardleInfo.cardleChunks[i].chunkX,
        this.cardleInfo.cardleChunks[i].chunkY,
        100,
        100
      ));
      const thisChunk = new PIXI.Sprite(newTex);

      thisChunk.alpha = i == 0 || i < this.guessResults.length ? 1 : 0;
      this.spriteArray.push(thisChunk);
      thisCanvas.stage.addChild(thisChunk);

      thisCanvas.renderer.view.classList.add('col-md-4', 'col-sm-6', 'rounded', 'p-1');
      this.canvasDiv.nativeElement.appendChild(thisCanvas.renderer.view);
    }

    this._restoreProgress();
  }

  _initIdolList(): void {
    this.scApiService.getUnitList().subscribe((data) => {
      data.forEach((unit) => {
        const group = document.createElement('optgroup');
        group.setAttribute('label', unit.unitName);
        unit.idols.forEach(idol => {
          const idolOption = document.createElement('option');
          idolOption.setAttribute('value', idol.idolName);
          idolOption.innerText = idol.idolName;
          idolOption.selected = idol.idolId == 1 ? true : false;
          idolOption.setAttribute('value', idol.idolId.toString());
          group.appendChild(idolOption);
        });
        this.idolList.nativeElement.appendChild(group);
      });
    });

    this.idolList.nativeElement.addEventListener('change', (event) => {
      this.selectedIdol = Number(this.idolList.nativeElement.value);
      this.cardList.nativeElement.innerHTML = '';
      this._initCardList();
    });
  }

  _initCardList(): void {
    const produce = document.createElement('optgroup'),
      support = document.createElement('optgroup');
    produce.setAttribute('label', 'Produce');
    support.setAttribute('label', 'Support');
    this.scApiService.getIdolInfo(this.selectedIdol).subscribe((data) => {
      data.cardLists.forEach((card) => {
        const cardOption = document.createElement('option');
        cardOption.setAttribute('value', card.enzaId.toString());
        cardOption.innerText = card.cardName;
        if (card.enzaId.toString().startsWith('1')) {
          produce.appendChild(cardOption);
        }
        else {
          support.appendChild(cardOption);
        }
      });
      this.cardList.nativeElement.appendChild(produce);
      this.cardList.nativeElement.appendChild(support);
    });
  }

  _initBtnListener(): void {
    this.guessBtn.nativeElement.addEventListener('click', (event) => {
      this.processGuessPress();
    });
    this.skipBtn.nativeElement.addEventListener('click', (event) => {
      this.processSkipPress(0);
    });
  }

  _randomNumber(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }

  _restoreProgress(): void {
    const temp: string | null = localStorage.getItem(this.cardleInfo.cardleDate);
    if (temp) {
      const tempData: { guesses: number, result: number[] } | null = JSON.parse(temp as string);
      if (tempData!.result) {
        this.guessResults = tempData!.result;
        this.guessResults.forEach(r => {
          this.processSkipPress(r, false);
        });
      }
    }
  }

  processGuessPress(): void {
    if (this.cardList.nativeElement.value === this.cardleInfo.enzaId.toString()) {
      this.processSkipPress(2);
    }
    else {
      this.processSkipPress(1);
    }
  }

  processSkipPress(skipType: number, saveLocalstorage = true): void {
    const resultBlock = this.resultDiv.get(this.currentChunk)!.nativeElement;
    resultBlock.classList.remove('guessBlock');

    switch (skipType) {
      case 0: // skip
        resultBlock.classList.add('skipBlock');
        break;
      case 1: // wrong
        resultBlock.classList.add('wrongBlock');
        break;
      case 2: // win
        resultBlock.classList.add('correctBlock');
        break;
    }

    if (saveLocalstorage) {
      this.guessResults.push(skipType);
      localStorage.setItem(this.cardleInfo.cardleDate, JSON.stringify({ guesses: this.currentChunk, result: this.guessResults, win: skipType == 2 }));
    }

    if (this.currentChunk == 5 || skipType == 2) {
      this.open();
      this._disableInteraction();
      return;
      // show modal
    }
    this.currentChunk++;
    this.spriteArray[this.currentChunk].alpha = 1;
  }

  open(): void {
    this.modalService.open(this.resultModal);
  }

  _generateBlock(): string {
    let blocks: string = "";
    this.guessResults.forEach(i => {
      switch (i) {
        case 0:
          blocks += "🔲";
          break;
        case 1:
          blocks += "🟥";
          break;
        case 2:
          blocks += "🟩";
          break;
      }
    });
    return blocks;
  }

  _disableInteraction(): void {
    this.cardList.nativeElement.disabled = true;
    this.idolList.nativeElement.disabled = true;
    this.guessBtn.nativeElement.disabled = true;
    this.skipBtn.nativeElement.disabled = true;
  }

  shareTwitter(): void {
    const shareText = `text=Shiny%20Colors%20Cardle%20%23${this.cardleInfo.cardleIndex}%20${this.guessResults.length}/6%0a${this._generateBlock()}%0a&url=https%3A%2F%2Fshinycolors.moe%2Fcardle%0a&hashtags=シャニマス,シャイニーカラーズ`;
    window.open(`https://twitter.com/intent/tweet?${shareText}`, "_blank")
  }

  shareClipboard(): void {
    const shareText = `Shiny Colors Cardle #${this.cardleInfo.cardleIndex} ${this.guessResults.length}/6\n${this._generateBlock()}\nhttps://shinycolors.moe/cardle`;
    navigator.clipboard.writeText(shareText);
  }
}

// 🟥 🟩 🔲
