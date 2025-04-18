import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInfoComponent } from './c-info.component';

describe('CInfoComponent', () => {
  let component: CInfoComponent;
  let fixture: ComponentFixture<CInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
