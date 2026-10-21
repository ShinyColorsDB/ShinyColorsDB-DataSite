import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCriteriaComponent } from './common-criteria.component';

describe('CommonCriteriaComponent', () => {
  let component: CommonCriteriaComponent;
  let fixture: ComponentFixture<CommonCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [ CommonCriteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
