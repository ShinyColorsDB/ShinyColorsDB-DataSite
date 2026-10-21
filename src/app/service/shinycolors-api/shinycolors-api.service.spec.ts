import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ShinyColorsApiService } from './shinycolors-api.service';

describe('ShinyColorsApiService', () => {
  let service: ShinyColorsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
});
    service = TestBed.inject(ShinyColorsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
