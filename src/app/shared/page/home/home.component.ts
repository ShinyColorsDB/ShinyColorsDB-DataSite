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
    this.title.setTitle('ShinyColorsDB-DataSite');
    this.meta.updateTag({
      name: 'description',
      content: 'ShinyColorsDB-DataSite',
    });
  }
}
