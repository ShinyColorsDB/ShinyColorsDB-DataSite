import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ShinyColorsUrlService } from './shinycolors-url.service';

describe('ShinyColorsUrlService', () => {
  let service: ShinyColorsUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
});
    service = TestBed.inject(ShinyColorsUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
