import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrageComponent } from './arrage.component';

describe('ArrageComponent', () => {
  let component: ArrageComponent;
  let fixture: ComponentFixture<ArrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
