import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LInfoComponent } from './l-info.component';

describe('LInfoComponent', () => {
  let component: LInfoComponent;
  let fixture: ComponentFixture<LInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
