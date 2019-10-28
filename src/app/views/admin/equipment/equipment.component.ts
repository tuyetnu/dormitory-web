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
    equipmentType: 'Gường tầng',
    code: 'G1',
    price: 400000,
    roomName: 'A201',
    status: 'Bình thường',
    createdDate: '28/10/2019 19:02:00'
   };
    if (sessionStorage.getItem('addEquipment') != null) {
      $('#btnAdd').click();
      sessionStorage.removeItem('addEquipment');
    }
    for (let i = 1; i <= 10; i++) {
      this.equipments.push(equipment);
    }
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    });
  }

}
