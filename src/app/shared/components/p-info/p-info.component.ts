import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment } from 'src/environments/environment';

import { ShinycolorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';

import { PCard } from '../../interfaces/pcard';

@Component({
  selector: 'app-p-info',
  templateUrl: './p-info.component.html',
  styleUrls: ['./p-info.component.css'],
  host: {
    class: 'col-lg-10 col-md-8 col-sm-12 h-100',
  },
})
export class PInfoComponent implements OnInit {
  pCardUuid!: string;
  pCardInfo!: PCard;
  staticUrl: string;

  constructor(
    private scApiService: ShinycolorsApiService,
    private route: ActivatedRoute
  ) {
    this.staticUrl = environment.staticUrl;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.pCardUuid = params['uuid'];

      this.scApiService.getPCardInfo(this.pCardUuid).subscribe((data) => {
        this.pCardInfo = data;
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
}
