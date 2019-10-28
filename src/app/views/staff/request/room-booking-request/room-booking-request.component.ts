import { StudentService } from './../../../../services/student.service';

import { RoomBookingService } from './../../../../services/room-booking.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IImage } from '../../../../module/IImage';
@Component({
  selector: 'app-room-booking-request',
  templateUrl: './room-booking-request.component.html',
  styleUrls: ['./room-booking-request.component.scss']
})
export class RoomBookingRequestComponent implements OnInit {
  roomBookingRequests;
  roomBookingRequestDetail;
  showList = [false, true];
  imageUrls: (string | IImage)[] = [
    {
      url: '/assets/img/CMND.jpg',
      caption: 'Hình chứng minh nhân dân'
    },
    {
      url: '/assets/img/theSV.png',
      caption: 'Hình thẻ sinh viên'
    },
    {
      url: '/assets/img/hoNgheo.jpg',
      caption: 'Hình đối tượng ưu tiên'
    },
  ];
  // room-booking
  status = 'Pending';
  roomType = null;
  month = null;
  studentCardNumber = null;
  createdDate = 'createdDate';
  isLoaded = false;
  page = 1;
  pageSize = 100;
  studentBook;
  constructor(private modalService: NgbModal, private roomBookingService: RoomBookingService, private studentService: StudentService) { }
  ngOnInit() {
    this.getRoomRequest();
  }

  getRoomRequest() {
    console.log(this.studentCardNumber);
    let filters = 'Status@=' + this.status;
    if (this.roomType !== null) {
      filters += ',targetRoomTypeName@=' + this.roomType;
    } if (this.month !== null) {
      filters += ',month==' + this.month;
    } if (this.studentCardNumber !== null) {
      filters += ',studentCardNumber@=' + this.studentCardNumber;
    }
    console.log(filters);
    console.log(this.createdDate);
    this.roomBookingService.getRoomBooking(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.roomBookingRequests = res;
        this.isLoaded = true;
      },
        (error) => {

        });
  }

  filterByStatus(status) {
    this.status = status;
    this.getRoomRequest();
  }
  filteByRoomType(roomtype) {
    this.roomType = roomtype;
    this.getRoomRequest();
  }
  filteByMonth(month) {
    this.month = month;
    this.getRoomRequest();
  }
  sortByCreateDate(des) {
    if (!des) {
      this.createdDate = this.createdDate.replace('-', '');
    } else if (des && this.createdDate[0] !== '-') {
      this.createdDate = '-' + this.createdDate;
    }
    this.getRoomRequest();
  }
  detail(studentId) {
    const filters = 'studentId==' + studentId;
    this.studentService.getStudent(this.createdDate, filters, this.page, this.pageSize);
  }

  open(content, index, studentId) {
    this.showList = [false, true];
    if (index !== undefined) {
      this.roomBookingRequestDetail = this.roomBookingRequests[index];
    }
    const filters = 'studentId==' + studentId;
    this.studentService.getStudent(this.createdDate, filters, 1, 1)
      .subscribe(res => {
        this.studentBook = res[0];
        this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => { });
      });
  }
  show(index) {
    const tmp = this.showList[index];
    this.showList.fill(false);
    this.showList[index] = !tmp;
    $('.detail').removeClass('fa-caret-down').removeClass('fa-caret-right');
    $('.detail').addClass('fa-caret-right');
    if (this.showList[index] === true) {
      $('.detail').eq(index).removeClass('fa-caret-right');
      $('.detail').eq(index).addClass('fa-caret-down');
    }
  }

}
