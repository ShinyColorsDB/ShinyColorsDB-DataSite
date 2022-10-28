import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SInfoComponent } from './s-info.component';

describe('SInfoComponent', () => {
  let component: SInfoComponent;
  let fixture: ComponentFixture<SInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
