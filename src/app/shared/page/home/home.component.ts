import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';

import { Card } from '../../interfaces/card';
import { LiveInfo } from '../../interfaces/liveinfo';
import { CD } from '../../interfaces/cd';

import { CardItemComponent } from '../../components/card-item/card-item.component';
import { LiveInfoComponent } from '../../components/live-info/live-info.component';
import { CdInfoComponent } from '../../components/cd-info/cd-info.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CardItemComponent,
    LiveInfoComponent,
    CdInfoComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    class: 'overflow-auto container-fluid d-flex justify-content-center ',
  }
})
export class HomeComponent implements OnInit {
  togglePS = true;

  recent: Card[] = [];
  liveInfo: LiveInfo[] = [];
  cdInfo: CD[] = [];

  constructor(
    private utilsService: UtilitiesService,
    private scApiService: ShinyColorsApiService,
    private title: Title,
    private meta: Meta
  ) {
    this.scApiService.getLiveInfos().subscribe((data) => {
      this.liveInfo = data
    });
    this.scApiService.getRecentUpdate().subscribe((data) => {
      this.recent = data;
    });
    this.scApiService.getAlbumInfos().subscribe((data) => {
      this.cdInfo = data;
    });
  }

  ngOnInit(): void {
    this.title.setTitle(' ~ 閃耀色彩資料庫 ~ ');
    this.meta.addTags(this.utilsService.generateDefaultMeta());
    this.utilsService.mobileTitle.emit(' ~ ShinyColorsDB ~ ');
  }
}
