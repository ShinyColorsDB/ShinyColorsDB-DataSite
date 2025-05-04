import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

import { ShinyColorsApiService } from 'src/app/service/shinycolors-api/shinycolors-api.service';
import { Timetable } from '../../interfaces/timeTable';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';
import { CommonModule } from '@angular/common';
import { TimesubtableComponent } from '../../components/timesubtable/timesubtable.component';

@Component({
  selector: 'app-timetable',
  imports: [
    CommonModule,
    TimesubtableComponent,
  ],
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
  host: {
    class: 'overflow-auto container-fluid d-flex justify-content-center',
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
    private utilitiesService: UtilitiesService,
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
        if (!data) { return; }
        this.allTimetable = data;
      });
    this.scApiService.getLimitedTable()
      .pipe(catchError(err => {
        this.router.navigate(['/notfound']);
        return of(null);
      }))
      .subscribe((data) => {
        if (!data) { return; }
        this.limitedTimetable = data;
      });
    this.scApiService.getGeneralTable()
      .pipe(catchError(err => {
        this.router.navigate(['/notfound']);
        return of(null);
      }))
      .subscribe((data) => {
        if (!data) { return; }
        this.generalTimetable = data;
      });
    this.title.setTitle(' ~ 出卡時間表 ~ ');
    this.meta.updateTag({
      name: 'og:description',
      content: '偶像別歷史卡牌時間表, Timetable for history cards.',
    });
    this.meta.updateTag({
      name: 'description',
      content: '偶像別歷史卡牌時間表, Timetable for history cards.',
    });
    this.utilitiesService.mobileTitle.emit(' ~ 時間表 ~ ');
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
