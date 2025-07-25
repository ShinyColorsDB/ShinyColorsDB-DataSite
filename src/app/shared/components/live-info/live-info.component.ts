import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LiveInfo } from '../../interfaces/liveInfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-info',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './live-info.component.html',
  styleUrl: './live-info.component.css',
  host: {
    class: "col-12"
  }
})
export class LiveInfoComponent {
  @Input()
  liveInfo!: LiveInfo;

  @Input()
  position: "left" | "right" = "left";

  constructor() {}

  trimTitle(title: string): string {
    return title.replace(/THE IDOLM@STER SHINY COLORS/, "");
  }
}
