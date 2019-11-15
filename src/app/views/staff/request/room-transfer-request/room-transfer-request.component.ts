import { RoomTransferService } from './../../../../services/room-transfer.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
  selector: 'app-room-transfer-request',
  templateUrl: './room-transfer-request.component.html',
  styleUrls: ['./room-transfer-request.component.scss']
})
export class RoomTransferRequestComponent implements OnInit {
  constructor(private modalService: NgbModal, private roomTransferService: RoomTransferService) { }
  status = 'Pending';
  targetRoomTypeName = null;
  month = null;
  studentCardNumber = null;
  createdDate = 'createdDate';
  isLoaded = false;
  page = 1;
  pageSize = 5;
  studentBook;
  currentRoomTypeName = 'All';
  rejectReason = '';
  loading = false;
  roomTransferRequests;
  reason = '';
  totalPage;
  transferRequestDetail = {
    id: '',
    name: '',
    studentCode: '',
    reason: '',
    roomName: '',
    currentRoomTypeName: '',
    targetRoomTypeName: '',
  };
  ngOnInit() {
    this.getRoomTransferRequest();
  }
  changePage(n) {
    if (this.page + n > this.totalPage || this.page + n < 1) {
      return;
    }
    this.page += n;
    this.getRoomTransferRequest();
  }
  getRoomTransferRequest() {
    let filters = 'status@=' + this.status;
    if (this.targetRoomTypeName !== null) {
      filters += ',targetRoomTypeName@=' + this.targetRoomTypeName;
    } if (this.month !== null) {
      filters += ',month==' + this.month;
    } if (this.studentCardNumber !== null) {
      filters += ',studentCardNumber@=' + this.studentCardNumber;
    }if (this.currentRoomTypeName !== 'All') {
      filters += ',currentRoomTypeName@=' + this.currentRoomTypeName;
    }
    this.loading = true;
    this.roomTransferService.getRoomTransfer(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.loading = false;
        this.page = res.currentPage;
        this.totalPage = res.totalPage;
        this.roomTransferRequests = res.resultList;
        if (this.roomTransferRequests == null) {
          this.roomTransferRequests = [];
        }
        this.roomTransferRequests.forEach(roomTransferRequest => {
          switch (roomTransferRequest.status) {
            case 'Pending':
              roomTransferRequest.parseStatus = 'Chưa duyệt';
              break;
            case 'Rejected':
              roomTransferRequest.parseStatus = 'Từ chối';
              break;
            case 'Approved':
              roomTransferRequest.parseStatus = 'Đã duyệt';
              break;
            case 'Complete':
              roomTransferRequest.parseStatus = 'Hoàn tất';
              break;
          }
          const dateTransfer = moment(roomTransferRequest.lastUpdatedDate).add(1, 'M').startOf('month');
          roomTransferRequest.dateTransfer = dateTransfer.format('DD/MM/YYYY') + '-' + dateTransfer.add(4, 'day').format('DD/MM/YYYY');
          console.log(this.roomTransferRequests);
        });
        this.isLoaded = true;
      },
        (error) => {

        });
  }
  filteByRoomType(roomtype) {
    this.targetRoomTypeName = roomtype;
    this.getRoomTransferRequest();
  }
  filteBycurrentRoomTypeName() {
    this.getRoomTransferRequest();
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.getRoomTransferRequest();
  }
  sortByCreateDate(des) {
    if (!des) {
      this.createdDate = this.createdDate.replace('-', '');
    } else if (des && this.createdDate[0] !== '-') {
      this.createdDate = '-' + this.createdDate;
    }
    this.getRoomTransferRequest();
  }
  rejectTransfer(id) {
    if (this.reason === '') {
      alert('Nhập lí do từ chối');
      $('#inputReason').focus();
      return;
    }
    const data = {
      roomTransferId: id,
      reason: this.reason
    };
    console.log(data);
    this.roomTransferService.rejectRequest(data)
    .subscribe ((res) => {
      alert('Chỉnh sửa yêu cầu thành công');
      console.log(res);
      this.closeModal();
      this.getRoomTransferRequest();
    }, (err) => {
      console.log(err);
      alert('Chỉnh sửa yêu cầu thất bại');
      this.closeModal();
    });
  }
  approvedTransfer(id) {
    this.roomTransferService.approveRoomTransfer(id)
      .subscribe((res) => {
        alert('Chỉnh sửa yêu cầu thành công');
        console.log(res);
        this.closeModal();
        this.getRoomTransferRequest();
      }, (error) => {
        console.log(error);
        alert('Chỉnh sửa yêu cầu thất bại');
        this.closeModal();
      });
  }
  filterByStatus(status) {
    this.status = status;
    this.getRoomTransferRequest();
  }
  closeModal() {
    this.modalService.dismissAll();
  }
  open(content, i) {
    this.transferRequestDetail = {
      id: this.roomTransferRequests[i].roomTransferRequestFormId,
      name: this.roomTransferRequests[i].studentName,
      studentCode: this.roomTransferRequests[i].studentCardNumber,
      reason: this.roomTransferRequests[i].reason,
      currentRoomTypeName: this.roomTransferRequests[i].currentRoomTypeName,
      targetRoomTypeName: this.roomTransferRequests[i].targetRoomTypeName,
      roomName: this.roomTransferRequests[i].roomName,
    };
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }).catch((err) => { });
  }


}
