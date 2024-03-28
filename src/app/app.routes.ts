import { Routes } from '@angular/router';

import { HomeComponent } from './shared/page/home/home.component';
import { IInfoComponent } from './shared/page/i-info/i-info.component';
import { PInfoComponent } from './shared/page/p-info/p-info.component';
import { SInfoComponent } from './shared/page/s-info/s-info.component';
import { TimetableComponent } from './shared/page/timetable/timetable.component';
import { NotfoundComponent } from './shared/page/notfound/notfound.component';
import { RLookupComponent } from './shared/page/r-lookup/r-lookup.component';
import { CardleComponent } from './shared/page/cardle/cardle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'idolinfo', component: IInfoComponent },
  { path: 'pcardinfo', component: PInfoComponent },
  { path: 'scardinfo', component: SInfoComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'r-lookup', component: RLookupComponent },
  { path: 'cardle', component: CardleComponent },
  { path: '**', redirectTo: 'notfound' }
];
