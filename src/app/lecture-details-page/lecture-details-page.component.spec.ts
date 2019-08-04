import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureDetailsPageComponent } from './lecture-details-page.component';

describe('LectureDetailsPageComponent', () => {
  let component: LectureDetailsPageComponent;
  let fixture: ComponentFixture<LectureDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
