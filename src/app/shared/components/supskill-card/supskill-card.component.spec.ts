import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupskillCardComponent } from './supskill-card.component';

describe('SupskillCardComponent', () => {
  let component: SupskillCardComponent;
  let fixture: ComponentFixture<SupskillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [ SupskillCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupskillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
