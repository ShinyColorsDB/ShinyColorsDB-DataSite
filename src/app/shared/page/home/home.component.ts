import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';

import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    class: 'col-lg-10 col-md-8 col-sm-12 h-100 d-flex',
  },
})
export class HomeComponent implements OnInit {
  togglePS = true;

  latestP: Card[] = [];
  latestS: Card[] = [];

  constructor(
    private utilsService: UtilitiesService,
    private scApiService: ShinyColorsApiService,
    private title: Title,
    private meta: Meta
  ) {
    this.scApiService.getLatestPInfo().subscribe((data) => {
      this.latestP = data;
    });
    this.scApiService.getLatestSInfo().subscribe((data) => {
      this.latestS = data;
    });
  }

  ngOnInit(): void {
    this.title.setTitle(' ~ 閃耀色彩資料庫 ~ ');
    this.meta.addTags(this.utilsService.generateDefaultMeta());
    this.utilsService.mobileTitle.emit(' ~ ShinyColorsDB ~ ');
  }
}
