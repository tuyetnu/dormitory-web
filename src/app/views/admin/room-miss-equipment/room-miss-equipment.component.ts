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
  constructor(private router: Router, private roomService: RoomService, private equipmentService: EquipmentService) { }

  ngOnInit() {
   this.roomService.getRoomMissEquipment()
   .subscribe((res) => {
   this.missEquipments = res;
   },
   (err) => {

   });
   this.getEquipmentAvailable();
  }
  getEquipmentAvailable() {
    this.equipmentService.getEquipmentAvailable()
    .subscribe((res) => {
      this.equipmentAvailables = res;
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
