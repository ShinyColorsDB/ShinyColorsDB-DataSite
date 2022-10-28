import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IInfoComponent } from './i-info.component';

describe('IInfoComponent', () => {
  let component: IInfoComponent;
  let fixture: ComponentFixture<IInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
