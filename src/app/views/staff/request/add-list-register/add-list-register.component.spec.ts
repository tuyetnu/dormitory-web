import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListRegisterComponent } from './add-list-register.component';

describe('AddListRegisterComponent', () => {
  let component: AddListRegisterComponent;
  let fixture: ComponentFixture<AddListRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddListRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
