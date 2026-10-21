import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesubtableComponent } from './timesubtable.component';

describe('TimesubtableComponent', () => {
  let component: TimesubtableComponent;
  let fixture: ComponentFixture<TimesubtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [ TimesubtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesubtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: needs @Input fixture data (or pixi renderer mock); skipped since the Karma->Vitest migration.
  it.skip('should create', () => {
    expect(component).toBeTruthy();
  });
});
