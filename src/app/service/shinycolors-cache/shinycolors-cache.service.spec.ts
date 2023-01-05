import { TestBed } from '@angular/core/testing';

import { ShinyColorsCacheService } from './shinycolors-cache.service';

describe('ShinyColorsCacheService', () => {
  let service: ShinyColorsCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShinyColorsCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
