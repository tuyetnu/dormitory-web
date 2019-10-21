import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.scss']
})
export class RoomManagementComponent implements OnInit {
  collection = [];
  showList = [true, false, false];
  theCheckbox1 = false;
  theCheckbox2 = false;
  theCheckbox3 = false;
  theCheckbox4 = false;
  theCheckbox5 = false;
  marked = true;
  constructor(private modalService: NgbModal) { }
  dropdownList = [
    { 'id': 1, 'name': 'Bình thường' },
    { 'id': 5, 'name': 'Đặt biệt' },
  ];
  dropdownList2 = [
    { 'id': 1, 'name': '6 sinh viên' },
    { 'id': 5, 'name': '8 sinh viên' },
  ];
  selectedItems = [];
  dropdownSetting1 = {
    text: 'Chọn loại phòng',
    classes: 'form-control form-group',
    labelKey: 'name',
    maxHeight: 240,
    showCheckbox: true,
  };
  dropdownSetting2 = {
    text: 'Chọn số sinh viên',
    classes: 'form-control form-group',
    labelKey: 'name',
    maxHeight: 240,
    showCheckbox: true,
  };
  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  open(content) {
    this.showList = [true, false, false];
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    });
  }

  show(index) {
    const tmp = this.showList[index];
    this.showList.fill(false);
    this.showList[index] = !tmp;
    $('.detail').removeClass('fa-caret-down');
    $('.detail').removeClass('fa-caret-right');
    $('.detail').addClass('fa-caret-right');
    if (this.showList[index] === true) {
      $('.detail').eq(index).removeClass('fa-caret-right');
      $('.detail').eq(index).addClass('fa-caret-down');
    }
  }
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
}
