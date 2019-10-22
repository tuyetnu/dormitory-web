import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTransferRequestComponent } from './room-transfer-request.component';

describe('RoomTransferRequestComponent', () => {
  let component: RoomTransferRequestComponent;
  let fixture: ComponentFixture<RoomTransferRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTransferRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
