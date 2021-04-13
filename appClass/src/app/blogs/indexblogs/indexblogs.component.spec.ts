import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexblogsComponent } from './indexblogs.component';

describe('IndexblogsComponent', () => {
  let component: IndexblogsComponent;
  let fixture: ComponentFixture<IndexblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
