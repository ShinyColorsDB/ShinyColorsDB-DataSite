import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Component } from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    SidebarComponent,
    RouterModule,

// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
//HttpClientModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShinyColorsDB-DataSite';

  activeIds!: [number, number];

  setActiveId(activeIds: [number, number]) {
    this.activeIds = activeIds;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (!isPlatformBrowser(this.platformId)) {
      console.log('platform is not browser');
      return;
    }
    const log: string[] = [
      `\n\n %c  %c   ShinyColors Data Site   %c  %c  https://github.com/ShinyColorsDB/ShinyColorsDB-DataSite  %c \n\n`,
      'background: #28de10; padding:5px 0;',
      'color: #28de10; background: #030307; padding:5px 0;',
      'background: #28de10; padding:5px 0;',
      'background: #5eff84; padding:5px 0;',
      'background: #28de10; padding:5px 0;',
    ];
    console.log(...log);
  }
}
