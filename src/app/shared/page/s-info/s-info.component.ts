import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { ShinyColorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';

import { SCard } from '../../interfaces/sCard';
import { CardSupportSkill } from '../../interfaces/cardSupportSkill';
import { catchError, of } from 'rxjs';

import { CommonCriteriaComponent } from '../../components/common-criteria/common-criteria.component';
import { PanelInfoComponent } from '../../components/panel-info/panel-info.component';
import { PanelListComponent } from '../../components/panel-list/panel-list.component';
import { SupskillCardComponent } from '../../components/supskill-card/supskill-card.component';
import { CardStatusComponent } from '../../components/card-status/card-status.component';
import { PicCarouselComponent } from '../../components/pic-carousel/pic-carousel.component';

@Component({
  selector: 'app-s-info',
  imports: [
    CommonCriteriaComponent,
    PicCarouselComponent,
    PanelInfoComponent,
    PanelListComponent,
    SupskillCardComponent,
    CardStatusComponent,
  ],
  templateUrl: './s-info.component.html',
  styleUrls: ['./s-info.component.css'],
  host: {
    class: 'overflow-auto container-fluid d-flex justify-content-center',
  }
})
export class SInfoComponent implements OnInit {
  sCardUuid!: string;
  sCardInfo!: SCard;
  highlight!: number;

  boundedSkillList: Map<string, CardSupportSkill>[] = [];

  supportSkillBound = {};

  thisBound!: number[];

  constructor(
    private utilsService: UtilitiesService,
    private scApiService: ShinyColorsApiService,
    public scUrlService: ShinyColorsUrlService,
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title,
  ) {
    this.supportSkillBound = utilsService.supportSkillBound();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.sCardUuid = params['uuid'];

      this.scApiService.getSCardInfo(this.sCardUuid)
        .pipe(catchError(err => {
          this.router.navigate(['/notfound']);
          return of(null);
        }))
        .subscribe((data) => {
          if (!data) { return; }
          this.sCardInfo = data;
          this.title.setTitle(this.sCardInfo.cardName);
          this.utilsService.generateCardMeta(this.sCardInfo).forEach(e => {
            this.meta.updateTag(e);
          });
          this.utilsService.emitActiveIds([this.sCardInfo.idol.idolId, this.sCardInfo.idol.unitId]);
          // this.utilsService.emitMobileTitle(this.sCardInfo.cardName, true);
          this.utilsService.emitMobileTitle("卡片情報");

        });
    });
  }

  translateGetMethod(): string {
    return this.utilsService.translateGetMethod(this.sCardInfo.getMethod);
  }

  translateIdeaNote(): string {
    return this.utilsService.translateIdeaNote(this.sCardInfo.ideaMark);
  }

  convertHirameki(): string {
    return this.utilsService.convertHirameki(this.sCardInfo.idol.hirameki);
  }

  translateProficiency(p: string): string {
    return this.utilsService.translateProficiency(p);
  }

  updateState($event: number): void {
    this.highlight = $event;
  }

  isSrCard(): boolean {
    return this.utilsService.isSrCard(this.sCardInfo.cardType);
  }

  getEventUrl(eventId: number): string {
    return `https://${environment.eventViewerUrl}/?eventId=${eventId}`;
  }
}
