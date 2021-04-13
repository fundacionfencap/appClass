import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecoursesComponent } from './singlecourses.component';

describe('SinglecoursesComponent', () => {
  let component: SinglecoursesComponent;
  let fixture: ComponentFixture<SinglecoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglecoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
