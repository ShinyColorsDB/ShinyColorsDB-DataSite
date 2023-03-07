import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';

import { Unit } from '../../interfaces/unit';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-charlist',
  templateUrl: './charlist.component.html',
  styleUrls: ['./charlist.component.css'],
})
export class CharlistComponent implements OnInit {
  Units: Array<Unit> = [];
  collapseArray: Array<boolean> = new Array();
  currentIdolID!: number;
  currentUnitID!: number;

  @Input()
  public isBigScreen: boolean = false;

  @Output()
  public idolClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private utilsService: UtilitiesService,
    private scApiService: ShinyColorsApiService,
  ) {
    this.scApiService.getUnitList().subscribe((data) => {
      this.Units = data;
      this.collapseArray = new Array(this.Units.length);
      this.collapseArray.fill(true);
    });
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) { return; }
    this.utilsService.activeIds.subscribe((data) => {
      [this.currentIdolID, this.currentUnitID] = data;
      this.collapseArray[this.currentUnitID - 1] = false;
    });
  }

  onIdolClicked(): void {
    if (isPlatformBrowser(this.platformId) && !this.isBigScreen) {
      this.idolClicked.emit(true);
    }
  }
}
