import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryTableComponent } from './memory-table.component';

describe('MemoryTableComponent', () => {
  let component: MemoryTableComponent;
  let fixture: ComponentFixture<MemoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [ MemoryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
