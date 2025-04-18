import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';

import { Card } from '../../interfaces/card';

import { environment } from 'src/environments/environment';
import { ShinyColorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';

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

  constructor(
    public scUrlService: ShinyColorsUrlService
  ) { }

  ngOnInit(): void { }

  getPictureUrl(): string {
    if (this.pathType == '/pcardinfo') {
      return `https://${environment.cloudFlareUrl}/images/content/idols/card/${this.cardInfo.enzaId}.jpg`;
    }
    else if (this.pathType == '/scardinfo') {
      return `https://${environment.cloudFlareUrl}/images/content/support_idols/card/${this.cardInfo.enzaId}.jpg`;
    }
    else {
      return '';
    }
  }
}
