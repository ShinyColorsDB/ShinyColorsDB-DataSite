import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LiveInfo } from '../../interfaces/liveInfo';

@Component({
  selector: 'app-live-info',
  imports: [
    RouterModule,
  ],
  templateUrl: './live-info.component.html',
  styleUrl: './live-info.component.css',
  host: {
    class: "col"
  }
})
export class LiveInfoComponent {
  @Input()
  liveInfo!: LiveInfo;

  constructor() {
  }
}
