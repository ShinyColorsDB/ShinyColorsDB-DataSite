import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveInfoComponent } from './live-info.component';

describe('LiveInfoComponent', () => {
  let component: LiveInfoComponent;
  let fixture: ComponentFixture<LiveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
