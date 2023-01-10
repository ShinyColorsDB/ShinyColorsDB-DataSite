import { Component, Input, OnInit } from '@angular/core';

import { DateTime } from 'luxon';
import { Card } from '../../interfaces/card';
import { Timetable } from '../../interfaces/timetable';

@Component({
  selector: 'app-timesubtable',
  templateUrl: './timesubtable.component.html',
  styleUrls: ['./timesubtable.component.css'],
  host: {
    class: 'row justify-content-center container',
  },
})
export class TimesubtableComponent implements OnInit {

  @Input()
  timetable!: Timetable;

  constructor() { }

  ngOnInit(): void {
  }

  timeDuration(d: string) {
    const date1 = DateTime.now().setZone('Asia/Taipei');
    const date2 = DateTime.fromSQL(d, { zone: 'Asia/Taipei' });
    return Number(date1.diff(date2, ['days', 'hours']).toObject()?.days);
  }
}
