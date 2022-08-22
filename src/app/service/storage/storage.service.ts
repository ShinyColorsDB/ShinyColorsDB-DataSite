import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  thisIdolId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  thisUnitId: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  setIds(idolId: number, unitId: number) {
    console.log(idolId, unitId);
    this.thisIdolId.next(idolId);
    this.thisUnitId.next(unitId);
  }

  getIdolId(): Observable<number> {
    return this.thisIdolId.asObservable();
  }

  getUnitId(): Observable<number> {
    return this.thisUnitId.asObservable();
  }
}
//to delete
