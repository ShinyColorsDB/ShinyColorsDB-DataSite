import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemHolderComponent } from './card-item-holder.component';

describe('CardItemHolderComponent', () => {
  let component: CardItemHolderComponent;
  let fixture: ComponentFixture<CardItemHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
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
