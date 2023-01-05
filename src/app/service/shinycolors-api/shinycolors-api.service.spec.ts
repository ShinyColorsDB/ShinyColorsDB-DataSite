import { TestBed } from '@angular/core/testing';

import { ShinyColorsApiService } from './shinycolors-api.service';

describe('ShinyColorsApiService', () => {
  let service: ShinyColorsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShinyColorsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
