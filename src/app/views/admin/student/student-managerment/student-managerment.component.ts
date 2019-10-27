import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-managerment',
  templateUrl: './student-managerment.component.html',
  styleUrls: ['./student-managerment.component.scss']
})
export class StudentManagermentComponent implements OnInit {
 students = [];
  showList = [true, false, false, false];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    const studentMonthlyBill = {
      isPaid: 'Đã thanh toán'
    };
    const room = {
      roomName: '201'
    };
    const contract = {
       startDate: '1/6/2020',
       endDate: '1/10/2020',
       status: 'Còn Hạn'
    };
    const student = {
      name: 'Nguyễn Hoàng Nam',
      evaluationScore: 100,
      studentCardNumber: 'SE62525',
      studentMonthlyBill,
      contract,
      room
    };
    for (let i = 1; i <= 10; i++) {
      this.students.push(student);
    }
  }
  open(content) {
    this.showList = [true, false, false, false];
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
    console.log($('.detail'));
    if (this.showList[index] === true) {
      $('.detail').eq(index).removeClass('fa-caret-right');
      $('.detail').eq(index).addClass('fa-caret-down');
    }
  }
}
