import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipments = [];
  constructor(private modalService: NgbModal) { }
  ngOnInit() {
   const equipment = {
    name: 'Gường tâng 1',
    code: 'G1',
    price: 400000,
    roomName: 'A201',
    status: 'Bình thường'
   };
    if (sessionStorage.getItem('addEquipment') != null) {
      $('#btnAdd').click();
      sessionStorage.removeItem('addEquipment');
    }
    for (let i = 1; i <= 10; i++) {
      this.equipments.push(equipment);
    }
  }


}
