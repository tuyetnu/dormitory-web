import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRequestDateComponent } from './set-request-date.component';

describe('SetRequestDateComponent', () => {
  let component: SetRequestDateComponent;
  let fixture: ComponentFixture<SetRequestDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRequestDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRequestDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
