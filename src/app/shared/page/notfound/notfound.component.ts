import { isPlatformServer } from '@angular/common';
import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { Optional, Inject } from '@angular/core';
import { RESPONSE } from '../../../../express.tokens';
import { Response } from 'express';

@Component({
  selector: 'app-notfound',
  standalone: true,
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
  host: {
    class: 'col-lg-10 col-md-8 col-sm-12 d-flex h-100',
  },
})
export class NotfoundComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(RESPONSE) private response: Response
  ) {
    if (isPlatformServer(this.platformId)) {
      this.response.status(404);
    }
   }

  ngOnInit(): void { }
}
