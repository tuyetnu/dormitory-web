import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-managerment',
  templateUrl: './student-managerment.component.html',
  styleUrls: ['./student-managerment.component.scss']
})
export class StudentManagermentComponent implements OnInit {
  students = [];
  studentDetail;
  showList = [true, false, false, false];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.students = [
      {
      name: 'Nguyễn Văn A',
      evaluationScore: 100,
      studentCardNumber: 'SE62525',
      isPaid: 'Đã thanh toán',
      contract: {
        startDate: '1/6/2020',
        endDate: '1/10/2020',
        status: 'Còn Hạn'
      },
      roomName: '201'
    },
    {
      name: 'Nguyễn Văn B',
      evaluationScore: 90,
      studentCardNumber: 'SE62577',
      isPaid: 'Chưa thanh toán',
      contract: {
        startDate: '1/6/2020',
        endDate: '1/10/2020',
        status: 'Còn Hạn'
      },
      roomName: '201'
    },
    {
      name: 'Nguyễn Văn C',
      evaluationScore: 80,
      studentCardNumber: 'SE62588',
      isPaid: 'Đã thanh toán',
      contract: {
        startDate: '1/6/2020',
        endDate: '1/10/2020',
        status: 'Còn Hạn'
      },
      roomName: '201'
    },
    {
      name: 'Nguyễn Hoàng Nam',
      evaluationScore: 100,
      studentCardNumber: 'SE62544',
      isPaid: 'Đã thanh toán',
      contract: {
        startDate: '1/6/2020',
        endDate: '1/10/2020',
        status: 'Còn Hạn'
      },
      roomName: '201'
    },
  ];
  }
  open(content, index) {
    if (index !== undefined) {
      this.studentDetail = this.students[index];
    }
    this.showList = [true, false, false, false];
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }).catch(error => { });
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
}
