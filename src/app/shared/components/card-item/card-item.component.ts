import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';

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

  constructor() {
  }

  ngOnInit(): void {
  }
}
