import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input()
  cardInfo!: Card;

  @Input()
  pathType!: string;

  @Input()
  isHome: boolean = false;

  regExp: RegExp = /(【.*】)(.*)/;

  assetUrl: string = environment.assetUrl;

  constructor() { }

  ngOnInit(): void { }

  getPictureUrl(): string {
    if (this.pathType == '/pcardinfo') {
      return `${this.assetUrl}images/content/idols/card/${this.cardInfo.enzaId}.jpg`;
    }
    else if (this.pathType == '/scardinfo') {
      return `${this.assetUrl}images/content/support_idols/card/${this.cardInfo.enzaId}.jpg`;
    }
    else {
      return '';
    }
  }
}
