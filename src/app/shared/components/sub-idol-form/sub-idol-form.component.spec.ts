import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubIdolFormComponent } from './sub-idol-form.component';

describe('SubIdolFormComponent', () => {
  let component: SubIdolFormComponent;
  let fixture: ComponentFixture<SubIdolFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubIdolFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubIdolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
