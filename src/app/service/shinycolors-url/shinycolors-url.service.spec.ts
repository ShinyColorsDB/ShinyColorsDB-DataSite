import { TestBed } from '@angular/core/testing';

import { ShinyColorsUrlService } from './shinycolors-url.service';

describe('ShinyColorsUrlService', () => {
  let service: ShinyColorsUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShinyColorsUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
