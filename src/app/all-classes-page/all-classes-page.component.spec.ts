import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClassesPageComponent } from './all-classes-page.component';

describe('AllClassesPageComponent', () => {
  let component: AllClassesPageComponent;
  let fixture: ComponentFixture<AllClassesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllClassesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClassesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
