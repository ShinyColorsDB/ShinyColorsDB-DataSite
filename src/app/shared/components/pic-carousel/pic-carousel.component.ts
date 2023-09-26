import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

import { ShinycolorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pic-carousel',
  templateUrl: './pic-carousel.component.html',
  styleUrls: ['./pic-carousel.component.css']
})
export class PicCarouselComponent implements OnInit, OnChanges {
  @ViewChild('picCarousel') picCarousel!: NgbCarousel;
  @ViewChild('mov1') mov1!: ElementRef<HTMLVideoElement>;
  @ViewChild('mov2') mov2!: ElementRef<HTMLVideoElement>;
  @ViewChild('pic1') pic1!: ElementRef<HTMLImageElement>;
  @ViewChild('pic2') pic2!: ElementRef<HTMLImageElement>;

  timeOutToClear: NodeJS.Timeout | null = null;

  @Input()
  enzaId!: number;

  @Input()
  displayMov1!: boolean;

  @Input()
  displayMov2!: boolean;

  @Input()
  cardName!: string;

  constructor(
    public scUrlService: ShinycolorsUrlService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.picCarousel) { return; }
    this.picCarousel.select("img1");
    this.playThrough();
  }

  ngAfterViewInit(): void {
    if (this.timeOutToClear) {
      clearTimeout(this.timeOutToClear);
      this.timeOutToClear = null;
    }
    this.playThrough();
  }

  playThrough(): void {
    console.log(this.picCarousel.activeId);
    if (this.picCarousel.activeId === "mov1") {
      this.mov1.nativeElement.play();
    }
    else if (this.picCarousel.activeId === "mov2") {
      this.mov2.nativeElement.play();
    }
    else {
      if (this.timeOutToClear) {
        clearTimeout(this.timeOutToClear);
        this.timeOutToClear = null;
      }
      this.timeOutToClear = setTimeout(() => {
        this.picCarousel.next();
        this.playThrough();
      }, 5000);
    }
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (!slideEvent.source) { return; }
    switch (this.picCarousel.activeId) {
      case "mov1":
        this.mov1.nativeElement.pause();
        this.mov1.nativeElement.currentTime = 0;
        break;
      case "mov2":
        this.mov2.nativeElement.pause();
        this.mov2.nativeElement.currentTime = 0;
        break;
      default:
        break;
    }
  }

  onSlid(slideEvent: NgbSlideEvent) {
    if (!slideEvent.source) { return; }
    if (this.timeOutToClear) {
      clearTimeout(this.timeOutToClear);
      this.timeOutToClear = null;
    }
    this.playThrough();
  }

  ngOnInit(): void {
  }

  onMovieEnded(): void {
    this.picCarousel.next();
    this.playThrough();
  }
}
