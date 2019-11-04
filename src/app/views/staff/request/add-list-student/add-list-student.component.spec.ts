import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListStudentComponent } from './add-list-student.component';

describe('AddListStudentComponent', () => {
  let component: AddListStudentComponent;
  let fixture: ComponentFixture<AddListStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
