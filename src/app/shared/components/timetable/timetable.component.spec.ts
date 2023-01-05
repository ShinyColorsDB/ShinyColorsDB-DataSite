import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableComponent } from './timetable.component';

describe('TimetableComponent', () => {
  let component: TimetableComponent;
  let fixture: ComponentFixture<TimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
