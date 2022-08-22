import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Unit } from '../../interfaces/unit';

import { ShinycolorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { StorageService } from 'src/app/service/storage/storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-charlist',
  templateUrl: './charlist.component.html',
  styleUrls: ['./charlist.component.css'],
})
export class CharlistComponent implements OnInit, AfterViewInit {
  Units: Array<Unit> = [];
  collapseArray: Array<boolean> = new Array();
  currentIdolID!: number;
  currentUnitID!: number;

  constructor(
    private scApiService: ShinycolorsApiService,
    private route: ActivatedRoute,
    private storageService: StorageService
  ) {
    this.scApiService.getUnitList().subscribe((data) => {
      this.Units = data;
      this.collapseArray = new Array(this.Units.length);
      this.collapseArray.fill(true);
    });
  }

  toggleActivate(idolId: number, unitId: number) {
    this.storageService.setIds(idolId, unitId);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.storageService.getIdolId().subscribe((data) => {
      this.currentIdolID = data;
    });

    this.storageService.getUnitId().subscribe((data) => {
      this.currentUnitID = data;
    });
  }
}
