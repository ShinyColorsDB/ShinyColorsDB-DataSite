import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdInfoComponent } from './cd-info.component';

describe('CdInfoComponent', () => {
  let component: CdInfoComponent;
  let fixture: ComponentFixture<CdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
