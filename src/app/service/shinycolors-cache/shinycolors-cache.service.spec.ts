import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ShinyColorsCacheService } from './shinycolors-cache.service';

describe('ShinyColorsCacheService', () => {
  let service: ShinyColorsCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
});
    service = TestBed.inject(ShinyColorsCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
