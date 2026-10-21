import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSkillFormComponent } from './sub-skill-form.component';

describe('SubSkillFormComponent', () => {
  let component: SubSkillFormComponent;
  let fixture: ComponentFixture<SubSkillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
      imports: [ SubSkillFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSkillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
