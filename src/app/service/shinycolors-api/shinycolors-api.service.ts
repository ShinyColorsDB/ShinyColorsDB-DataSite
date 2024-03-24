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
import { Cardle } from 'src/app/shared/interfaces/cardle';
import { SupSkillList } from 'src/app/shared/interfaces/supskilllist';
import { QuerySupportSkill } from 'src/app/shared/interfaces/querysupportskill';
import { QueryResult } from 'src/app/shared/interfaces/queryresult';
import { Album } from 'src/app/shared/interfaces/album';

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
      .get<Unit[]>(`${environment.apiUrl}info/unitInfo`)
      .pipe(catchError(this.handleError<Unit[]>('getIdolList', [])));
  }

  getIdolInfo(idolID: number): Observable<Idol> {
    return this.http
      .get<Idol>(`${environment.apiUrl}info/idolInfo?idolId=${idolID}`, {
        responseType: 'json',
      })
      .pipe(catchError(this.handleError<Idol>('getIdolInfo')));
  }

  getIdolAlbumInfo(idolID: number): Observable<Album> {
    return this.http
      .get<Album>(`${environment.cloudFlareUrl}albums/album/${String(idolID).padStart(2, '0')}.json`)
      .pipe(catchError(this.handleError<Album>('getIdolAlbumInfo')));
  }

  getPCardInfo(cardId: string): Observable<PCard> {
    return this.http
      .get<PCard>(`${environment.apiUrl}info/pCardInfo?cardId=${cardId}`, {
        responseType: 'json',
      })
      .pipe(catchError(this.handleError<PCard>('getPCardInfo')));
  }

  getSCardInfo(cardId: string): Observable<SCard> {
    return this.http
      .get<SCard>(`${environment.apiUrl}info/sCardInfo?cardId=${cardId}`, {
        responseType: 'json',
      })
      .pipe(catchError(this.handleError<SCard>('getSCardInfo')));
  }

  getLatestPInfo(): Observable<Card[]> {
    return this.http
      .get<Card[]>(`${environment.apiUrl}info/latestPInfo`)
      .pipe(catchError(this.handleError<Card[]>('getLatestPInfo', [])));
  }

  getLatestSInfo(): Observable<Card[]> {
    return this.http
      .get<Card[]>(`${environment.apiUrl}info/latestSInfo`)
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

  getSupportSkillList(): Observable<SupSkillList[]> {
    return this.http
      .get<SupSkillList[]>(`${environment.apiUrl}info/supportSkillList`)
      .pipe(catchError(this.handleError<SupSkillList[]>(`getSupportSkillList`)));
  }

  querySupportSkills(queryParams: QuerySupportSkill): Observable<QueryResult[]> {
    return this.http
      .post<QueryResult[]>(`${environment.apiUrl}info/querySupportSkill`, queryParams)
      .pipe(catchError(this.handleError<QueryResult[]>(`querySupportSkill`)));
  }

  getCardleInfo(): Observable<Cardle> {
    return this.http
      .get<Cardle>(`${environment.apiUrl}cardle/getCardle`)
      .pipe(catchError(this.handleError<Cardle>(`getCardleInfo`)));
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
