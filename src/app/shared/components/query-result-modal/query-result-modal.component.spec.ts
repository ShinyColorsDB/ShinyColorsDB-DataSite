import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryResultModalComponent } from './query-result-modal.component';

describe('QueryResultModalComponent', () => {
  let component: QueryResultModalComponent;
  let fixture: ComponentFixture<QueryResultModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [ QueryResultModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryResultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
