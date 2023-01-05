import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

import { DateTime } from 'luxon';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { Timetable } from '../../interfaces/timetable';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
  host: {
    class: 'col-lg-10 col-md-8 col-sm-12 overflow-auto h-100',
  }
})
export class TimetableComponent implements OnInit {

  allTimetable!: Timetable;
  limitedTimetable!: Timetable;
  generalTimetable!: Timetable;
  overview = true;
  limited = false;
  general = false;

  regExp = RegExp(/(【.*】)(.*)/);

  constructor(
    private scApiService: ShinyColorsApiService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.scApiService.getAllTable()
      .pipe(catchError(err => {
        this.router.navigate(['/notfound']);
        return of(null);
      }))
      .subscribe((data) => {
        if (!data) return;
        this.allTimetable = data;
      });
    this.scApiService.getLimitedTable()
      .pipe(catchError(err => {
        this.router.navigate(['/notfound']);
        return of(null);
      }))
      .subscribe((data) => {
        if (!data) return;
        this.limitedTimetable = data;
      });
    this.scApiService.getGeneralTable()
      .pipe(catchError(err => {
        this.router.navigate(['/notfound']);
        return of(null);
      }))
      .subscribe((data) => {
        if (!data) return;
        this.generalTimetable = data;
      });
    this.title.setTitle('ShinyColorsDB-Timetable');
    this.meta.updateTag({
      name: 'description',
      content: 'Timetable for history cards.',
    });
  }

  timeDuration(d: string) {
    const date1 = DateTime.now().setZone('Asia/Taipei');
    const date2 = DateTime.fromSQL(d, { zone: 'Asia/Taipei' });
    return date1.diff(date2, ['days', 'hours']).toObject().days;
  }

  changeDisplay(type: number): void {
    switch (type) {
      case 0:
        this.overview = true;
        this.limited = false;
        this.general = false;
        break;
      case 1:
        this.overview = false;
        this.limited = true;
        this.general = false;
        break;
      case 2:
        this.overview = false;
        this.limited = false;
        this.general = true;
        break;
    }
  }
}
