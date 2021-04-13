import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleeventsComponent } from './singleevents.component';

describe('SingleeventsComponent', () => {
  let component: SingleeventsComponent;
  let fixture: ComponentFixture<SingleeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
