import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { ShinycolorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';

import { Card } from '../../interfaces/card';
import { Idol } from '../../interfaces/idol';
import { Album, Communication } from '../../interfaces/album';

import { environment } from 'src/environments/environment';

import { catchError, of } from 'rxjs';

enum tabStatus {
  Produce,
  Support,
  Event
};

@Component({
  selector: 'app-i-info',
  templateUrl: './i-info.component.html',
  styleUrls: ['./i-info.component.css'],
  host: {
    class: 'col-lg-10 col-md-8 col-sm-12 overflow-auto h-100',
  },
})
export class IInfoComponent implements OnInit {
  idolInfo!: Idol;
  idolId!: number;

  togglePS: tabStatus = tabStatus.Produce;

  pSSR: Card[] = [];
  pSR: Card[] = [];
  pR: Card[] = [];
  sSSR: Card[] = [];
  sSR: Card[] = [];
  sR: Card[] = [];
  sN: Card[] = [];

  album!: Album;

  constructor(
    private utilsService: UtilitiesService,
    private scApiService: ShinyColorsApiService,
    public scUrlService: ShinycolorsUrlService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) { }

  private classifyType(card: Card): void {
    switch (card.cardType) {
      case 'P_SSR':
        this.pSSR.push(card);
        break;
      case 'P_SR':
        this.pSR.push(card);
        break;
      case 'P_R':
        this.pR.push(card);
        break;
      case 'S_SSR':
        this.sSSR.push(card);
        break;
      case 'S_SR':
        this.sSR.push(card);
        break;
      case 'S_R':
        this.sR.push(card);
        break;
      case 'S_N':
        this.sN.push(card);
        break;
      default:
        console.error(card);
    }
  }

  private resetCards(): void {
    this.pSSR = [];
    this.pSR = [];
    this.pR = [];
    this.sSSR = [];
    this.sSR = [];
    this.sR = [];
    this.sN = [];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idolId = Number(params['idolid']);

      this.scApiService.getIdolInfo(this.idolId)
        .pipe(catchError(err => {
          this.router.navigate(['/notfound'])
          return of(null);
        }))
        .subscribe((data) => {
          if (!data) { return; }
          this.resetCards();

          this.idolInfo = data;
          this.togglePS = tabStatus.Produce;

          this.title.setTitle(this.idolInfo.idolName);
          this.utilsService.generateIdolMeta(this.idolInfo).forEach(e => {
            this.meta.updateTag(e);
          });

          this.utilsService.emitActiveIds([this.idolId, this.idolInfo.unitId]);
          this.utilsService.emitMobileTitle(this.idolInfo.idolName);

          this.idolInfo.cardLists.forEach((card) => {
            this.classifyType(card);
          });
        });

      this.scApiService.getIdolAlbumInfo(this.idolId)
        .pipe(catchError(err => {
          this.router.navigate(['/notfound'])
          return of(null);
        }))
        .subscribe((data) => {
          if (!data) { return; }
          this.album = data;
        });

    });
  }

  getEventTitles() {
    return this.album.albumCommunicationTitles;
  }

  getEventsByType(type: string): Communication[] {
    return this.album.communications.filter(e => e.albumType === type);
  }

  tabProduce(): void {
    this.togglePS = tabStatus.Produce;
  }

  isTabProduce(): boolean {
    return this.togglePS === tabStatus.Produce;
  }

  tabSupport(): void {
    this.togglePS = tabStatus.Support;
  }

  isTabSupport(): boolean {
    return this.togglePS === tabStatus.Support;
  }

  tabEvent(): void {
    this.togglePS = tabStatus.Event;
  }

  isTabEvent(): boolean {
    return this.togglePS === tabStatus.Event;
  }

  getCategoryPath(category: string): string {
    switch (category) {
      case "character_event":
      case "season_event":
      case "unit_event":
      case "concert_event":
        return "produce_events";

      case "communication_morning":
        return "produce_communications";

      case "communication_cheer":
        return "produce_communication_cheers";

      case "communication_audition":
        return "produce_communication_auditions";

      case "birthday_event":
      case "present_event":
      case "special_communication":
      case "seasonal_event":
      case "seasonal_present_event":
        return "special_communications";

      default:
        return "";
    }
  }

  getEventViewerUrl(eventId: string, eventType: string): string {
    //https://event.shinycolors.moe/?eventId=202100100391&eventType=produce_communication_promise_results
    //wing: produce_events
    return `${environment.eventViewerUrl}?eventId=${eventId}&eventType=${this.getCategoryPath(eventType)}`;
  }
}
