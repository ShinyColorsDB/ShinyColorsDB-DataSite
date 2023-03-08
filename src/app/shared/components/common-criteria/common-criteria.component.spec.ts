import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCriteriaComponent } from './common-criteria.component';

describe('CommonCriteriaComponent', () => {
  let component: CommonCriteriaComponent;
  let fixture: ComponentFixture<CommonCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonCriteriaComponent ]
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
