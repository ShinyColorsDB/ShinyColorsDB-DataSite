import { TestBed } from '@angular/core/testing';

import { ShinycolorsUrlService } from './shinycolors-url.service';

describe('ShinycolorsUrlService', () => {
  let service: ShinycolorsUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShinycolorsUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
