import { Injectable } from '@angular/core';
import { TabStatus } from 'src/app/shared/enums/tabStatus';

@Injectable({
  providedIn: 'root'
})
export class ShinyColorsStateService {

  navigationState: Map<number, TabStatus> = new Map();

  constructor() { }

  public setTabStatus(idolId: number, status: TabStatus) {
    this.navigationState.set(idolId, status);
  }

  public getTabStatus(idolId: number): TabStatus {
    return this.navigationState.get(idolId) ?? TabStatus.Produce;
  }
}
