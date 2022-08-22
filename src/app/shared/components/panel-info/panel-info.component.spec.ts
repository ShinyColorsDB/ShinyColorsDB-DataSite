import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInfoComponent } from './panel-info.component';

describe('PanelInfoComponent', () => {
  let component: PanelInfoComponent;
  let fixture: ComponentFixture<PanelInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
