import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Unit } from '../../interfaces/unit';

import { ShinycolorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';

@Component({
  selector: 'app-charlist',
  templateUrl: './charlist.component.html',
  styleUrls: ['./charlist.component.css'],
})
export class CharlistComponent implements OnInit {
  Units: Array<Unit> = [];
  collapseArray: Array<boolean> = new Array();
  currentIdolID: number = 2;
  currentUnitID: number = 1;

  constructor(
    private scApiService: ShinycolorsApiService,
    private route: ActivatedRoute
  ) {
    this.scApiService.getUnitList().subscribe((data) => {
      this.Units = data;
      this.collapseArray = new Array(this.Units.length);
      this.collapseArray.fill(true);
      this.collapseArray[this.currentUnitID - 1] = false;
    });
  }

  toggleActivate(idolId: number, unitId: number) {
    this.currentIdolID = idolId;
    this.currentUnitID = unitId;
  }

  ngOnInit(): void {}
}
