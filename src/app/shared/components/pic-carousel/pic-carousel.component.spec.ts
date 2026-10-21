import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicCarouselComponent } from './pic-carousel.component';

describe('PicCarouselComponent', () => {
  let component: PicCarouselComponent;
  let fixture: ComponentFixture<PicCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [ PicCarouselComponent ]
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
