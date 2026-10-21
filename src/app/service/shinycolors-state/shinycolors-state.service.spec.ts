import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ShinyColorsStateService } from './shinycolors-state.service';

describe('ShinyColorsStateService', () => {
  let service: ShinyColorsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
});
    service = TestBed.inject(ShinyColorsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
