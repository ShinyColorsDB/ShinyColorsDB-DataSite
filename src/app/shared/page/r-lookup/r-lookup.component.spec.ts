import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RLookupComponent } from './r-lookup.component';

describe('RLookupComponent', () => {
  let component: RLookupComponent;
  let fixture: ComponentFixture<RLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
