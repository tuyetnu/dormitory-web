import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancleContracRequestComponent } from './cancle-contrac-request.component';

describe('CancleContracRequestComponent', () => {
  let component: CancleContracRequestComponent;
  let fixture: ComponentFixture<CancleContracRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancleContracRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancleContracRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
