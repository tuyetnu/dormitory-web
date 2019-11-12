import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  constructor(private modalService: NgbModal) { }
  selectedItems = [];
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
