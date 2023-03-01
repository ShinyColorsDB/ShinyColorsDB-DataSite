import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupSkillCarouselComponent } from './sup-skill-carousel.component';

describe('SupSkillCarouselComponent', () => {
  let component: SupSkillCarouselComponent;
  let fixture: ComponentFixture<SupSkillCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupSkillCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupSkillCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
