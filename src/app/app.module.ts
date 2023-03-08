import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
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
import { TimetableComponent } from './shared/page/timetable/timetable.component';

import { CharlistComponent } from './shared/components/charlist/charlist.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CardItemComponent } from './shared/components/card-item/card-item.component';
import { PanelInfoComponent } from './shared/components/panel-info/panel-info.component';
import { PanelListComponent } from './shared/components/panel-list/panel-list.component';
import { TimesubtableComponent } from './shared/components/timesubtable/timesubtable.component';
import { AptitudeComponent } from './shared/components/aptitude/aptitude.component';
import { SupskillCardComponent } from './shared/components/supskill-card/supskill-card.component';
import { PicCarouselComponent } from './shared/components/pic-carousel/pic-carousel.component';
import { MemoryTableComponent } from './shared/components/memory-table/memory-table.component';
import { CommonCriteriaComponent } from './shared/components/common-criteria/common-criteria.component';

import { NotfoundComponent } from './shared/page/notfound/notfound.component';

import { ShinyColorsApiService } from './service/shinycolors-api/shinycolors-api.service';
import { ShinyColorsCacheService } from './service/shinycolors-cache/shinycolors-cache.service';
import { UtilitiesService } from './service/utilities/utilities.service';
import { TranslationService } from './service/translation/translation.service';
import { AppRoutingCache } from './app-routing-cache';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'idolinfo', component: IInfoComponent },
  { path: 'pcardinfo', component: PInfoComponent },
  { path: 'scardinfo', component: SInfoComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'notfound', component: NotfoundComponent },
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
    TimetableComponent,
    CardItemComponent,
    PanelInfoComponent,
    PanelListComponent,
    TimesubtableComponent,
    AptitudeComponent,
    SupskillCardComponent,
    PicCarouselComponent,
    MemoryTableComponent,
    CommonCriteriaComponent,
    HomeComponent,
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
    ShinyColorsApiService,
    ShinyColorsCacheService,
    UtilitiesService,
    TranslationService,
    { provide: RouteReuseStrategy, useClass: AppRoutingCache }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
