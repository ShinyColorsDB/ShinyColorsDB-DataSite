import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveInfoComponent } from './live-info.component';

describe('LiveInfoComponent', () => {
  let component: LiveInfoComponent;
  let fixture: ComponentFixture<LiveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [LiveInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: needs @Input fixture data (or pixi renderer mock); skipped since the Karma->Vitest migration.
  it.skip('should create', () => {
    expect(component).toBeTruthy();
  });
});
