import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemHolderComponent } from './card-item-holder.component';

describe('CardItemHolderComponent', () => {
  let component: CardItemHolderComponent;
  let fixture: ComponentFixture<CardItemHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
