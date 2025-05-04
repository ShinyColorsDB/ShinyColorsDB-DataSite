import { TestBed } from '@angular/core/testing';

import { ShinyColorsStateService } from './shinycolors-state.service';

describe('ShinyColorsStateService', () => {
  let service: ShinyColorsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShinyColorsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
