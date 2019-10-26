import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMissEquipmentComponent } from './room-miss-equipment.component';

describe('RoomMissEquipmentComponent', () => {
  let component: RoomMissEquipmentComponent;
  let fixture: ComponentFixture<RoomMissEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomMissEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomMissEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
