import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

import { ShinycolorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';

import { PCard } from '../../interfaces/pcard';

@Component({
  selector: 'app-p-info',
  templateUrl: './p-info.component.html',
  styleUrls: ['./p-info.component.css'],
  host: {
    class: 'col-lg-10 col-md-8 col-sm-12 overflow-auto h-100',
  },
})
export class PInfoComponent implements OnInit {
  pCardUuid!: string;
  pCardInfo!: PCard;
  staticUrl: string;

  highlight!: number;

  constructor(
    public utilsService: UtilitiesService,
    private scApiService: ShinycolorsApiService,
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {
    this.staticUrl = environment.staticUrl;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.pCardUuid = params['uuid'];

      this.scApiService.getPCardInfo(this.pCardUuid).subscribe((data) => {
        this.pCardInfo = data;
        this.title.setTitle(this.pCardInfo.cardName);
        this.utilsService.generateCardMeta(this.pCardInfo);
        this.utilsService.emitActiveIds([this.pCardInfo.idol.idolId, this.pCardInfo.idol.unitId]);
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
    this.highlight = $event
  }
}
