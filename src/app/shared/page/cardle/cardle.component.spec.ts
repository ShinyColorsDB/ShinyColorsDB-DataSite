import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardleComponent } from './cardle.component';

describe('CardleComponent', () => {
  let component: CardleComponent;
  let fixture: ComponentFixture<CardleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
