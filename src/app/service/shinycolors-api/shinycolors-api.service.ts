import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Unit } from 'src/app/shared/interfaces/unit';
import { Idol } from 'src/app/shared/interfaces/idol';
import { Card } from 'src/app/shared/interfaces/card';
import { PCard } from 'src/app/shared/interfaces/pcard';
import { SCard } from 'src/app/shared/interfaces/scard';
import { Timetable } from 'src/app/shared/interfaces/timetable';

@Injectable({
  providedIn: 'root',
})
export class ShinyColorsApiService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getUnitList(): Observable<Unit[]> {
    return this.http
      .get<Unit[]>(`${environment.apiUrl}info/unitinfo`)
      .pipe(catchError(this.handleError<Unit[]>('getIdolList', [])));
  }

  getIdolInfo(idolID: number): Observable<Idol> {
    return this.http
      .get<Idol>(`${environment.apiUrl}info/idolinfo?idolId=${idolID}`, {
        responseType: 'json',
      })
      .pipe(catchError(this.handleError<Idol>('getIdolInfo')));
  }

  getPCardInfo(cardId: string): Observable<PCard> {
    return this.http
      .get<PCard>(`${environment.apiUrl}info/pcardinfo?cardId=${cardId}`, {
        responseType: 'json',
      })
      .pipe(catchError(this.handleError<PCard>('getPCardInfo')));
  }

  getSCardInfo(cardId: string): Observable<SCard> {
    return this.http
      .get<SCard>(`${environment.apiUrl}info/scardinfo?cardId=${cardId}`, {
        responseType: 'json',
      })
      .pipe(catchError(this.handleError<SCard>('getSCardInfo')));
  }

  getLatestPInfo(): Observable<Card[]> {
    return this.http
      .get<Card[]>(`${environment.apiUrl}info/latestpinfo`)
      .pipe(catchError(this.handleError<Card[]>('getLatestPInfo', [])));
  }

  getLatestSInfo(): Observable<Card[]> {
    return this.http
      .get<Card[]>(`${environment.apiUrl}info/latestsinfo`)
      .pipe(catchError(this.handleError<Card[]>('getLatestSInfo', [])));
  }

  getAllTable(): Observable<Timetable> {
    return this.http
      .get<Timetable>(`${environment.apiUrl}info/getAllTable`)
      .pipe(catchError(this.handleError<Timetable>('getAllTable')));
  }

  getLimitedTable(): Observable<Timetable> {
    return this.http
      .get<Timetable>(`${environment.apiUrl}info/getLimitedTable`)
      .pipe(catchError(this.handleError<Timetable>('getLimitedTable')));
  }

  getGeneralTable(): Observable<Timetable> {
    return this.http
      .get<Timetable>(`${environment.apiUrl}info/getGeneralTable`)
      .pipe(catchError(this.handleError<Timetable>('getGeneralTable')));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error.status);
      console.log(`${operation} failed: ${error.message}`);
      this.router.navigate(['/notfound']);
      return of(result as T);
    };
  }
}
