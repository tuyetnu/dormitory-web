import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagermentComponent } from './student-managerment.component';

describe('StudentManagermentComponent', () => {
  let component: StudentManagermentComponent;
  let fixture: ComponentFixture<StudentManagermentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentManagermentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentManagermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
