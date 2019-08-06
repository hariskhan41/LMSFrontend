import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassPageComponent } from './edit-class-page.component';

describe('EditClassPageComponent', () => {
  let component: EditClassPageComponent;
  let fixture: ComponentFixture<EditClassPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClassPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
