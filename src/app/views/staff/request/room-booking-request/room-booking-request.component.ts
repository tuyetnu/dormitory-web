import { StudentService } from './../../../../services/student.service';

import { RoomBookingService } from './../../../../services/room-booking.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
  selector: 'app-room-booking-request',
  templateUrl: './room-booking-request.component.html',
  styleUrls: ['./room-booking-request.component.scss']
})
export class RoomBookingRequestComponent implements OnInit {
  roomBookingRequests;
  roomBookingRequestDetail;
  showList = [false, true];
  imageUrls = [
    {
      url: '',
      caption: 'Hình chứng minh nhân dân'
    },
    {
      url: '',
      caption: 'Hình thẻ sinh viên'
    },
    {
      url: '',
      caption: 'Hình đối tượng ưu tiên'
    },
  ];
  // room-booking
  status = 'Pending';
  roomType = 'null';
  month = null;
  studentCardNumber = null;
  createdDate = 'createdDate';
  isLoaded = false;
  page = 1;
  pageSize = 5;
  totalPage;
  studentBook;
  rejectReason = '';
  loading = false;
  constructor(private modalService: NgbModal, private roomBookingService: RoomBookingService) { }
  ngOnInit() {
    this.getRoomRequest();
  }
  changePage(n) {
    if (this.page + n > this.totalPage || this.page + n < 1) {
      return;
    }
    this.page += n;
    this.getRoomRequest();
  }
  getRoomRequest() {
    let filters = 'Status@=' + this.status;
    if (this.roomType !== 'null') {
      filters += ',targetRoomTypeName@=' + this.roomType;
    } if (this.month !== null) {
      filters += ',month==' + this.month;
    } if (this.studentCardNumber !== null) {
      filters += ',studentCardNumber@=' + this.studentCardNumber;
    }
    this.loading = true;
    this.roomBookingService.getRoomBooking(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.loading = false;
        this.page = res.currentPage;
        this.totalPage = res.totalPage;
        this.roomBookingRequests = res.resultList;
        this.calDateInDateOut();
        this.isLoaded = true;
      },
        (error) => {

        });
  }
  calDateInDateOut() {
    this.roomBookingRequests.forEach(roomBookingRequest => {
      const dateIn = moment(roomBookingRequest.lastUpdatedDate).add(1, 'M').startOf('month');
      const dateOut = moment(roomBookingRequest.lastUpdatedDate).add(roomBookingRequest.month, 'M').endOf('month');
      roomBookingRequest.dateIn = dateIn.format('DD/MM/YYYY') + '-' + dateIn.add(4, 'day').format('DD/MM/YYYY');
      roomBookingRequest.dateOut = dateOut.format('DD/MM/YYYY');
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
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getRoomRequest();
  }
  open(content, id) {
    this.loading = true;
    this.showList = [false, true];
    this.roomBookingService.getRoomBookingDetail(id)
      .subscribe(res => {
        this.roomBookingRequestDetail = res;
        const dateIn = moment(this.roomBookingRequestDetail.lastUpdatedDate).add(1, 'M').startOf('month');
        const dateOut = moment(this.roomBookingRequestDetail.lastUpdatedDate).add(this.roomBookingRequestDetail.month, 'M').endOf('month');
        this.roomBookingRequestDetail.dateIn = dateIn.format('DD/MM/YYYY') + '-' + dateIn.add(4, 'day').format('DD/MM/YYYY');
        this.roomBookingRequestDetail.dateOut = dateOut.format('DD/MM/YYYY');
        this.imageUrls[0].url = this.roomBookingRequestDetail.identityCardImageUrl;
        this.imageUrls[1].url = this.roomBookingRequestDetail.studentCardImageUrl;
        this.imageUrls[2].url = this.roomBookingRequestDetail.priorityImageUrl;
        console.log(this.roomBookingRequestDetail);
        this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result
          .then((result) => { })
          .catch((err) => { });
        this.loading = false;
      });
  }
  closeModal() {
    this.modalService.dismissAll();
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
  approveRoomBooking(bookingId) {
    this.roomBookingService.approveRoomBooking(bookingId)
      .subscribe((res) => {
        alert('Chỉnh sửa yêu cầu thành công');
        console.log(res);
        this.closeModal();
        this.getRoomRequest();
      }, (error) => {
        console.log(error);
        alert('Chỉnh sửa yêu cầu thất bại');
        this.closeModal();
      });
  }
  rejectRequest(id) {
    if (this.rejectReason === '') {
      alert('Nhập lí do từ chối');
      $('#inputReason').focus();
      return;
    }
    const data = {
      'roomBookingId': id,
      'reason': this.rejectReason
    };
    this.roomBookingService.rejectRequest(data)
      .subscribe((res) => {
        alert('Chỉnh sửa yêu cầu thành công');
        console.log(res);
        this.closeModal();
        this.getRoomRequest();
      }, (error) => {
        console.log(error);
        alert('Chỉnh sửa yêu cầu thất bại');
        this.closeModal();
      });
  }
}
