import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css'],
})
export class PanelListComponent implements OnInit, OnChanges {
  @Input()
  panelInfo!: any[];

  @Input()
  highlited!: number;

  constructor() { }

  ngOnChanges(): void {

  }

  ngOnInit(): void {

  }
}
