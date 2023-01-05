import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';

import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/page/home/home.component';
import { IInfoComponent } from './shared/page/i-info/i-info.component';
import { PInfoComponent } from './shared/page/p-info/p-info.component';
import { SInfoComponent } from './shared/page/s-info/s-info.component';

import { CharlistComponent } from './shared/components/charlist/charlist.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CardItemComponent } from './shared/components/card-item/card-item.component';
import { PanelInfoComponent } from './shared/components/panel-info/panel-info.component';
import { PanelListComponent } from './shared/components/panel-list/panel-list.component';
import { TimetableComponent } from './shared/components/timetable/timetable.component';

import { NotfoundComponent } from './shared/page/notfound/notfound.component';

import { ShinycolorsApiService } from './service/shinycolors-api/shinycolors-api.service';
import { UtilitiesService } from './service/utilities/utilities.service';
import { TranslationService } from './service/translation/translation.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'idolinfo', component: IInfoComponent },
  { path: 'pcardinfo', component: PInfoComponent },
  { path: 'scardinfo', component: SInfoComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CharlistComponent,
    IInfoComponent,
    PInfoComponent,
    SInfoComponent,
    CardItemComponent,
    PanelInfoComponent,
    PanelListComponent,
    HomeComponent,
    TimetableComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
    IonicModule.forRoot(),
  ],
  providers: [
    ShinycolorsApiService,
    UtilitiesService,
    TranslationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
