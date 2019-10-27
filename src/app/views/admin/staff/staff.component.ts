import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
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
  startdate: Date = new Date();

  enddate: Date = new Date(this.startdate);
  settings1 = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: false,
  };
  staffs = [];
  ngOnInit() {
    const staff = {
      name: 'Nguyễn Văn A',
      birthDate: '20/19/1995',
      homeTown: 'HCM',
      phoneNumber: '0964482740',
      identityNumber: '127484938',
      gender: 'Nam'
    };
    for (let i = 1; i <= 100; i++) {
      this.staffs.push(staff);
    }
  }
  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    });
  }
  openCreate(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    });
  }

}
