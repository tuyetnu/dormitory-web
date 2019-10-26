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
  constructor(private router: Router) { }

  ngOnInit() {
    const missEquipment = {
      roomName: 'A201',
      equipmentType: 'Gường tầng',
      quality: 2
    };
    const equipment = {
      equipmentTypeName: 'Gường tầng',
      quality: 2
    };
    for (let i = 0; i <= 10; i++) {
      this.missEquipments.push(missEquipment);
      this.equipments.push(equipment);
    }
  }
  addEquipment() {
    this.router.navigate(['/equipment-management']);
    sessionStorage.setItem('addEquipment', '1');
  }
}
