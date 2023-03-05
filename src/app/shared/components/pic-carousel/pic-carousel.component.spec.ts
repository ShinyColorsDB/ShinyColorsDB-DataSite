import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicCarouselComponent } from './pic-carousel.component';

describe('PicCarouselComponent', () => {
  let component: PicCarouselComponent;
  let fixture: ComponentFixture<PicCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
