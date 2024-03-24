import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { ShinycolorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';

@Component({
  selector: 'app-panel-list',
  standalone: true,
  imports: [
    CommonModule,
    NgbPopover,
  ],
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css'],
  host: {
    class: 'col-12 mb-4'
  }
})
export class PanelListComponent implements OnInit, OnChanges {
  @ViewChild('scrollMe') scrollMe!: any;

  @Input()
  panelInfo!: any[];

  @Input()
  highlited: number = -1;

  constructor(
    public scUrlService: ShinycolorsUrlService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["panelInfo"] && changes["panelInfo"].currentValue != changes["panelInfo"].previousValue) {
      this.highlited = -1;
    }
  }

  ngOnInit(): void { }

  addLineBreak(content: string): string {
    return content.replace(/\//g, '/\n');
  }

  addPlusRule(content: string): string {
    return content.replace(/(.*)(\[.*\])/g, '$2\n$1');
  }
}
