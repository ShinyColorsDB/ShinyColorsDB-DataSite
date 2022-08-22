import { Component, OnInit } from '@angular/core';
import { ShinycolorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';

import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    class: 'col-lg-10 col-md-8 col-sm-12 h-100',
  },
})
export class HomeComponent implements OnInit {
  togglePS = true;

  latestP: Card[] = [];
  latestS: Card[] = [];

  constructor(private scApiService: ShinycolorsApiService) {
    this.scApiService.getLatestPInfo().subscribe((data) => {
      this.latestP = data;
    });
    this.scApiService.getLatestSInfo().subscribe((data) => {
      this.latestS = data;
    });
  }

  ngOnInit(): void {}
}
