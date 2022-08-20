import { TestBed } from '@angular/core/testing';

import { ShinycolorsApiService } from './shinycolors-api.service';

describe('ShinycolorsApiService', () => {
  let service: ShinycolorsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShinycolorsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
