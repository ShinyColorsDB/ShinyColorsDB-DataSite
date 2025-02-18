import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';

import { PCard } from '../../interfaces/pcard';
import { catchError, of } from 'rxjs';

import { PicCarouselComponent } from '../../components/pic-carousel/pic-carousel.component';
import { CommonCriteriaComponent } from '../../components/common-criteria/common-criteria.component';
import { PanelInfoComponent } from '../../components/panel-info/panel-info.component';
import { PanelListComponent } from '../../components/panel-list/panel-list.component';
import { MemoryTableComponent } from '../../components/memory-table/memory-table.component';
import { AptitudeComponent } from '../../components/aptitude/aptitude.component';
import { CardStatusComponent } from '../../components/card-status/card-status.component';

@Component({
    selector: 'app-p-info',
    imports: [
        PicCarouselComponent,
        CommonCriteriaComponent,
        PanelInfoComponent,
        PanelListComponent,
        MemoryTableComponent,
        AptitudeComponent,
        CardStatusComponent,
    ],
    templateUrl: './p-info.component.html',
    styleUrls: ['./p-info.component.css'],
    host: {
        class: 'col-lg-10 col-md-8 col-sm-12 overflow-auto h-100 container-fluid',
    }
})
export class PInfoComponent implements OnInit {

  pCardUuid!: string;
  pCardInfo!: PCard;

  highlight!: number;

  constructor(
    private utilsService: UtilitiesService,
    private scApiService: ShinyColorsApiService,
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.pCardUuid = params['uuid'];

      this.scApiService.getPCardInfo(this.pCardUuid)
        .pipe(catchError(err => {
          this.router.navigate(['/notfound']);
          return of(null);
        }))
        .subscribe((data) => {
          if (!data) { return; }
          this.pCardInfo = data;
          this.title.setTitle(this.pCardInfo.cardName);
          this.utilsService.generateCardMeta(this.pCardInfo).forEach(e => {
            this.meta.updateTag(e);
          });
          this.utilsService.emitActiveIds([this.pCardInfo.idol.idolId, this.pCardInfo.idol.unitId]);
          this.utilsService.emitMobileTitle(this.pCardInfo.cardName, true);
        });
    });
  }

  getIdolEvents() {
    return this.pCardInfo.cardIdolEvents.filter(
      (e) => e.eventCategory != 'アフターストーリー'
    );
  }

  getTrueEnd() {
    return this.pCardInfo.cardIdolEvents.filter(
      (e) => e.eventCategory == 'アフターストーリー'
    );
  }

  getMemoryAppeal() {
    return this.pCardInfo.cardMemoryAppeals.filter(
      (e) => e.memoryDesc.match('Lv')
    );
  }

  translateGetMethod(): string {
    return this.utilsService.translateGetMethod(this.pCardInfo.getMethod);
  }

  updateState($event: number): void {
    this.highlight = $event;
  }

  isSsrCard(): boolean {
    return this.utilsService.isSsrCard(this.pCardInfo.cardType);
  }

  isSrCard(): boolean {
    return this.utilsService.isSrCard(this.pCardInfo.cardType);
  }

  isIdolRoad(): boolean {
    return this.pCardInfo.getMethod == "IdolRoad";
  }

  getEventUrl(eventId: number): string {
    return `${environment.eventViewerUrl}?eventId=${eventId}`;
  }
}
