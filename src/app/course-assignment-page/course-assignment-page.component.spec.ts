import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAssignmentPageComponent } from './course-assignment-page.component';

describe('CourseAssignmentPageComponent', () => {
  let component: CourseAssignmentPageComponent;
  let fixture: ComponentFixture<CourseAssignmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAssignmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAssignmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
