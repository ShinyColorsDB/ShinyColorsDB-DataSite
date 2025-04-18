import { Component, Input } from '@angular/core';
import { CD } from '../../interfaces/cd';

import { ShinyColorsUrlService } from 'src/app/service/shinycolors-url/shinycolors-url.service';

@Component({
  selector: 'app-cd-info',
  imports: [],
  templateUrl: './cd-info.component.html',
  styleUrl: './cd-info.component.css',
  host: {
    class: "col"
  }
})
export class CdInfoComponent {
  @Input()
  cdInfo!: CD;

  constructor(
    public scUrlService: ShinyColorsUrlService,
  ) { }
}
