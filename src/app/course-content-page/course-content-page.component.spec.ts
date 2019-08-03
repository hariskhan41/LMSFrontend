import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentPageComponent } from './course-content-page.component';

describe('CourseContentPageComponent', () => {
  let component: CourseContentPageComponent;
  let fixture: ComponentFixture<CourseContentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseContentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
