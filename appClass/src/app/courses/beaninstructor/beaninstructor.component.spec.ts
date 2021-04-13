import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaninstructorComponent } from './beaninstructor.component';

describe('BeaninstructorComponent', () => {
  let component: BeaninstructorComponent;
  let fixture: ComponentFixture<BeaninstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeaninstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaninstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
