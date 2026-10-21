import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeComponent } from './aptitude.component';

describe('AptitudeComponent', () => {
  let component: AptitudeComponent;
  let fixture: ComponentFixture<AptitudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [ AptitudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: needs @Input fixture data (or pixi renderer mock); skipped since the Karma->Vitest migration.
  it.skip('should create', () => {
    expect(component).toBeTruthy();
  });
});
