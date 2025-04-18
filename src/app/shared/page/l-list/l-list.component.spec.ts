import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LListComponent } from './l-list.component';

describe('LListComponent', () => {
  let component: LListComponent;
  let fixture: ComponentFixture<LListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
