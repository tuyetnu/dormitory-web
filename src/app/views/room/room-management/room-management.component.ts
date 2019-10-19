import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.scss']
})
export class RoomManagementComponent implements OnInit {
  collection = [];
  showList = [false, false];
  theCheckbox1 = false;
  theCheckbox2 = false;
  theCheckbox3 = false;
  theCheckbox4 = false;
  theCheckbox5 = false;
  marked = true;
  constructor(private modalService: NgbModal) { }
  dropdownList = [
    { "id": 1, "name": "Bình thường" },
    { "id": 5, "name": "Đặt biệt" },
  ];
  dropdownList2 = [
    { "id": 1, "name": "6 sinh viên" },
    { "id": 5, "name": "8 sinh viên" },
  ];
  selectedItems = [];
  dropdownSetting1 = {
    text: "Chọn loại phòng",
    classes: "form-control form-group",
    labelKey: "name",
    maxHeight: 240,
    showCheckbox: true,
  };
  dropdownSetting2 = {
    text: "Chọn số sinh viên",
    classes: "form-control form-group",
    labelKey: "name",
    maxHeight: 240,
    showCheckbox: true,
  };
  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  open(content) {
    this.showList.fill(false);
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    });
  }

  show(index) {
    var tmp = this.showList[index];
    this.showList.fill(false);
    this.showList[index] = !tmp;
  }
  toggleVisibility(e){
    this.marked= e.target.checked;
  }    
}
