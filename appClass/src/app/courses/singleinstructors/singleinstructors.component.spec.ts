import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleinstructorsComponent } from './singleinstructors.component';

describe('SingleinstructorsComponent', () => {
  let component: SingleinstructorsComponent;
  let fixture: ComponentFixture<SingleinstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleinstructorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleinstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
