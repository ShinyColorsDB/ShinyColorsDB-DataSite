import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RLookupComponent } from './r-lookup.component';

describe('RLookupComponent', () => {
  let component: RLookupComponent;
  let fixture: ComponentFixture<RLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [ RLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
