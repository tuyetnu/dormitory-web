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
  equipments = [];
  constructor(private router: Router, private roomService: RoomService) { }

  ngOnInit() {
   this.roomService.getRoomMissEquipment()
   .subscribe((res) => {
   this.missEquipments = res;
   },
   (err) => {

   });
  }
  addEquipment() {
    this.router.navigate(['/equipment-management']);
    sessionStorage.setItem('addEquipment', '1');
  }
}
