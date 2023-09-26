import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Unit } from '../../interfaces/unit';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';
import { environment } from 'src/environments/environment';
import { ShinycolorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';

@Component({
  selector: 'app-charlist',
  templateUrl: './charlist.component.html',
  styleUrls: ['./charlist.component.css'],
})
export class CharlistComponent implements OnInit {
  Units: Array<Unit> = [];
  collapseStatus: Map<number, boolean> = new Map<number, boolean>();
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
    public scUrlService: ShinycolorsUrlService
  ) {
    this.scApiService.getUnitList().subscribe((data) => {
      this.Units = data;
      this.Units.forEach(e => {
        this.collapseStatus.set(e.unitId, true);
      });
    });
  }

  ngOnInit(): void {
    this.utilsService.activeIds.subscribe((data) => {
      [this.currentIdolID, this.currentUnitID] = data;
      this.collapseStatus.set(this.currentUnitID, false);
    });
  }

  onIdolClicked(): void {
    if (isPlatformBrowser(this.platformId) && !this.isBigScreen) {
      this.idolClicked.emit(true);
    }
  }

  getCollapseStatus(unitId: number): boolean {
    return this.collapseStatus.get(unitId) || false;
  }
}
