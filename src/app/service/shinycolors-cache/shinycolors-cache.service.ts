import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Unit } from 'src/app/shared/interfaces/unit';
import { Idol } from 'src/app/shared/interfaces/idol';
import { Card } from 'src/app/shared/interfaces/card';
import { PCard } from 'src/app/shared/interfaces/pcard';
import { SCard } from 'src/app/shared/interfaces/scard';
import { Timetable } from 'src/app/shared/interfaces/timetable';

@Injectable({
  providedIn: 'root',
})
export class ShinyColorsCacheService {

  unitInfo: Observable<Unit[]>;
  idolInfo: Map<number, Observable<Idol>[]> = new Map();

  allTable: Observable<Timetable>;
  limitedTable: Observable<Timetable>;
  generalTable: Observable<Timetable>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }



}
