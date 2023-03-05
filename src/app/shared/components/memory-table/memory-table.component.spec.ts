import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryTableComponent } from './memory-table.component';

describe('MemoryTableComponent', () => {
  let component: MemoryTableComponent;
  let fixture: ComponentFixture<MemoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoryTableComponent ]
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
