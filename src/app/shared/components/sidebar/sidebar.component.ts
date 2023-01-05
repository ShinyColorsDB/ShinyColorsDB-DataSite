import { Component, Inject, Input, OnInit } from '@angular/core';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input()
  public showSideBar = false;

  @Input()
  public isBigScreen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  onSideBarClick() {
    this.showSideBar = !this.showSideBar;
    // flush expanded array in charlist
  }

  onCharlistClick(event: boolean) {
    this.showSideBar = !event;
  }
}
