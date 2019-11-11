import { BuildingService } from './../../../services/building.service';
import { EquipmentService } from './../../../services/equipment.service';
import { RoomService } from './../../../services/room.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-room-miss-equipment',
  templateUrl: './room-miss-equipment.component.html',
  styleUrls: ['./room-miss-equipment.component.scss']
})
export class RoomMissEquipmentComponent implements OnInit {
  missEquipments = [];
  equipmentAvailables = [];
  loading = false;
  buildings = [];
  buildingId;
  constructor(private router: Router, private roomService: RoomService, private equipmentService: EquipmentService,
    private buildingService: BuildingService) { }

  ngOnInit() {
    this.getEquipmentAvailable();
    this.loading = true;
    this.buildingService.getBuilding()
      .subscribe((res) => {
        this.loading = false;
        this.buildings = res;
        this.buildingId = this.buildings[0].buildingId;
        console.log(this.buildings[0].buildingId);
        this.getRoomMissEq();
      }, (err) => {
      });
  }
  getEquipmentAvailable() {
    this.equipmentService.getEquipmentAvailable()
      .subscribe((res) => {
        this.equipmentAvailables = res;
      },
        (err) => {

        });
  }
  getRoomMissEq() {
    this.roomService.getRoomMissEquipment(this.buildingId)
      .subscribe((res) => {
        this.missEquipments = res.resultList;
        console.log(res);
      },
        (err) => {

        });
  }
  addEquipment() {
    this.router.navigate(['/equipment-management']);
    sessionStorage.setItem('addEquipment', '1');
  }
}
