import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoomBookingService } from './../../../services/room-booking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approved-request',
  templateUrl: './approved-request.component.html',
  styleUrls: ['./approved-request.component.scss']
})
export class ApprovedRequestComponent implements OnInit {
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
  students = [];
  status = 'Approved';
  roomType = null;
  month = null;
  studentCardNumber = null;
  createdDate = 'createdDate';
  isLoaded = false;
  page = 1;
  pageSize = 5;
  studentBook;
  rejectReason = '';
  constructor(private roomBookingService: RoomBookingService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getRoomRequest();
  }
  getRoomRequest() {
    let filters = 'Status@=' + this.status;
    if (this.roomType !== null) {
      filters += ',targetRoomTypeName@=' + this.roomType;
    } if (this.month !== null) {
      filters += ',month==' + this.month;
    } if (this.studentCardNumber !== null) {
      filters += ',studentCardNumber@=' + this.studentCardNumber;
    }
    this.roomBookingService.getRoomBooking(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.roomBookingRequests = res.resultList;
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
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getRoomRequest();
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
  open(content, id) {
    this.showList = [false, true];
    this.roomBookingService.getRoomBookingDetail(id)
      .subscribe(res => {
        this.roomBookingRequestDetail = res;
        this.imageUrls[0].url = this.roomBookingRequestDetail.identityCardImageUrl;
        this.imageUrls[1].url = this.roomBookingRequestDetail.studentCardImageUrl;
        this.imageUrls[2].url = this.roomBookingRequestDetail.priorityImageUrl;
        console.log(this.roomBookingRequestDetail);
        this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => { });
      });
  }
  updateStatus(bookingId, status) {
    const data = {
      roomBookingRequestFormId: bookingId,
      status: status,
      staffId: sessionStorage.getItem('accountID'),
      reason: this.rejectReason
    };
    console.log(JSON.stringify(data));
    this.roomBookingService.updateStatus(data)
      .subscribe((res) => {
        alert('Chỉnh sửa yêu cầu thành công');
        console.log(res);
        this.rejectReason = '';
      }, (error) => {
        alert('Chỉnh sửa yêu cầu thất bại');
      });
  }
}
