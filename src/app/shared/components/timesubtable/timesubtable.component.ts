import { Component, Input, OnInit } from '@angular/core';

import { DateTime } from 'luxon';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-timesubtable',
  templateUrl: './timesubtable.component.html',
  styleUrls: ['./timesubtable.component.css']
})
export class TimesubtableComponent implements OnInit {

  @Input()
  table!: Card[];

  @Input()
  title: string = '';

  @Input()
  typeRoute: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  timeDuration(d: string) {
    const date1 = DateTime.now().setZone('Asia/Taipei');
    const date2 = DateTime.fromSQL(d, { zone: 'Asia/Taipei' });
    return Number(date1.diff(date2, ['days', 'hours']).toObject()?.days);
  }
}
