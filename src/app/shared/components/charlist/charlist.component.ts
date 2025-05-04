import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Unit } from '../../interfaces/unit';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';
import { ShinyColorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';
import { ShinyColorsStateService } from 'src/app/service/shinycolors-state/shinycolors-state.service';

import { NgbAccordionModule, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { TabStatus } from '../../enums/tabStatus';

@Component({
  selector: 'app-charlist',
  imports: [
    RouterModule,
    CommonModule,
    NgbCollapse,
    NgbAccordionModule
  ],
  templateUrl: './charlist.component.html',
  styleUrls: ['./charlist.component.css']
})
export class CharlistComponent implements OnInit {
  Units: Array<Unit> = [];
  collapseStatus: Array<boolean> = [];
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
    private scStateService: ShinyColorsStateService,
    public scUrlService: ShinyColorsUrlService
  ) {
    this.scApiService.getUnitList().subscribe((data) => {
      this.Units = data;
      this.Units.forEach((e, index) => {
        this.collapseStatus[index] = true;
      });
      [this.currentIdolID, this.currentUnitID] = this.utilsService.storedIds;
      this.collapseStatus[this.currentUnitID - 1] = false;
    });
  }

  ngOnInit(): void {
    this.utilsService.activeIds.subscribe((ids) => {
      [this.currentIdolID, this.currentUnitID] = ids;
      this.collapseStatus[this.currentUnitID - 1] = false;
    });
  }

  onIdolClicked(id: number): void {
    this.scStateService.setTabStatus(id, TabStatus.Produce);
    this.idolClicked.emit(true);
  }
}
