import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approved-request',
  templateUrl: './approved-request.component.html',
  styleUrls: ['./approved-request.component.scss']
})
export class ApprovedRequestComponent implements OnInit {
  students = [];
  constructor() { }

  ngOnInit() {
    const student = {
      studentCode: 'SE62525',
      fullName: 'Nguyễn Hoàng Nam',
      room: {
        type: 'Phòng thường',
        name: 'A201'
      },
      month: 12
    };
    this.students = new Array(50).fill(student);
  }

}
