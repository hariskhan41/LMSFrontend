import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherPageComponent } from './add-teacher-page.component';

describe('AddTeacherPageComponent', () => {
  let component: AddTeacherPageComponent;
  let fixture: ComponentFixture<AddTeacherPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeacherPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
