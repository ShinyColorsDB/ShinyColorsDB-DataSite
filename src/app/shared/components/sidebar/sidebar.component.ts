import { Component, Inject, OnInit } from '@angular/core';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public showSideBar = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  toSpineViewer() {
    if (!isPlatformBrowser(this.platformId)) {
      console.log('platform is not browser');
      return;
    }
    window.open('https://spine.shinycolors.moe/viewMode', '_blank');
  }

  onSideBarClick() {
    this.showSideBar = !this.showSideBar;
  }
}
