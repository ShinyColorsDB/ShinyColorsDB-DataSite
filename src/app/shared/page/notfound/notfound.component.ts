import { isPlatformServer } from '@angular/common';
import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Optional, Inject } from '@angular/core';
import { RESPONSE } from '../../../../express.tokens';
import { Response } from 'express';
import { UtilitiesService } from 'src/app/service/utilities/utilities.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  imports: [
    RouterModule,
  ],
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
  host: {
    class: 'overflow-auto container-fluid d-flex justify-content-center h-100',
  }
})
export class NotfoundComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(RESPONSE) private response: Response,
    private title: Title,
    private utilsService: UtilitiesService,
  ) {
    if (isPlatformServer(this.platformId)) {
      this.response?.status(404);
    }
    this.title.setTitle("Error");
    this.utilsService.emitMobileTitle("Error", false);
  }

  ngOnInit(): void { }
}
