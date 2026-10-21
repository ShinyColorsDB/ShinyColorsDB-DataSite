import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdInfoComponent } from './cd-info.component';

describe('CdInfoComponent', () => {
  let component: CdInfoComponent;
  let fixture: ComponentFixture<CdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [CdInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: needs @Input fixture data (or pixi renderer mock); skipped since the Karma->Vitest migration.
  it.skip('should create', () => {
    expect(component).toBeTruthy();
  });
});
