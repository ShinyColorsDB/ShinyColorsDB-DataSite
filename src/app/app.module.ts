import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CharlistComponent } from './shared/components/charlist/charlist.component';
import { IInfoComponent } from './shared/components/i-info/i-info.component';
import { PInfoComponent } from './shared/components/p-info/p-info.component';
import { SInfoComponent } from './shared/components/s-info/s-info.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CardItemComponent } from './shared/components/card-item/card-item.component';
import { PanelInfoComponent } from './shared/components/panel-info/panel-info.component';
import { HomeComponent } from './shared/components/home/home.component';

import { ShinycolorsApiService } from './service/shinycolors-api/shinycolors-api.service';
import { StorageService } from './service/storage/storage.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'idolinfo', component: IInfoComponent },
  { path: 'pcardinfo', component: PInfoComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    SidebarComponent,
    PInfoComponent,
    SInfoComponent,
    IInfoComponent,
    CharlistComponent,
    PanelInfoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
  ],
  providers: [ShinycolorsApiService, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
