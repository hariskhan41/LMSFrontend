import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureCommandsComponent } from './lecture-commands.component';

describe('LectureCommandsComponent', () => {
  let component: LectureCommandsComponent;
  let fixture: ComponentFixture<LectureCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
