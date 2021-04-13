import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesaysComponent } from './peoplesays.component';

describe('PeoplesaysComponent', () => {
  let component: PeoplesaysComponent;
  let fixture: ComponentFixture<PeoplesaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplesaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
