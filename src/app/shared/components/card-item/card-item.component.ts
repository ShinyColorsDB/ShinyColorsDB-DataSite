import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';

import { Card } from '../../interfaces/card';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-card-item',
    imports: [
        RouterModule,
        CommonModule,
        DatePipe
    ],
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input()
  cardInfo!: Card;

  @Input()
  pathType!: string;

  @Input()
  isHome: boolean = false;

  regExp: RegExp = /(【.*】)(.*)/;

  constructor() { }

  ngOnInit(): void { }

  getPictureUrl(): string {
    if (this.pathType == '/pcardinfo') {
      return `${environment.cloudFlareUrl}images/content/idols/card/${this.cardInfo.enzaId}.jpg`;
    }
    else if (this.pathType == '/scardinfo') {
      return `${environment.cloudFlareUrl}images/content/support_idols/card/${this.cardInfo.enzaId}.jpg`;
    }
    else {
      return '';
    }
  }
}
