import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesubtableComponent } from './timesubtable.component';

describe('TimesubtableComponent', () => {
  let component: TimesubtableComponent;
  let fixture: ComponentFixture<TimesubtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesubtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesubtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
