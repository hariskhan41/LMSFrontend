import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCoursePageComponent } from './all-course-page.component';

describe('AllCoursePageComponent', () => {
  let component: AllCoursePageComponent;
  let fixture: ComponentFixture<AllCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCoursePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
