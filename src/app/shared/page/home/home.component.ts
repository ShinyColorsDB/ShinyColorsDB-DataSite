import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';

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
    this.meta.addTags([
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:url',
        content: 'https://shinycolors.moe/'
      },
      {
        name: 'og:title',
        content: ' ~ 閃耀色彩資料庫 ~ '
      },
      {
        name: 'og:description',
        content: 'ShinyColorsDB-DataSite'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:url',
        content: 'https://shinycolors.moe/'
      },
      {
        name: 'twitter:title',
        content: ' ~ 閃耀色彩資料庫 ~ '
      },
      {
        name: 'twitter:description',
        content: 'ShinyColorsDB-DataSite'
      }
    ]);
  }
}
