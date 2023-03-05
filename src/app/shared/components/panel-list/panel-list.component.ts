import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css'],
})
export class PanelListComponent implements OnInit {
  @Input()
  panelInfo!: any[];

  @Input()
  highlited!: number;

  constructor() { }

  ngOnInit(): void { }

  addLineBreak(content: string): string {
    return content.replace(/\//g, '/\n');
  }

  addPlusRule(content: string): string {
    return content.replace(/(.*)(\[.*\])/g, '$2\n$1');
  }
}
