import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeComponent } from './aptitude.component';

describe('AptitudeComponent', () => {
  let component: AptitudeComponent;
  let fixture: ComponentFixture<AptitudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptitudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
