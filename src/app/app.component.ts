import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShinyColorsDB-DataSite';

  activeIds!: [number, number];

  setActiveId(activeIds: [number, number]) {
    this.activeIds = activeIds;
  }
}
