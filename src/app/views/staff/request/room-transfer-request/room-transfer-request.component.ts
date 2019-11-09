import { RoomTransferService } from './../../../../services/room-transfer.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-room-transfer-request',
  templateUrl: './room-transfer-request.component.html',
  styleUrls: ['./room-transfer-request.component.scss']
})
export class RoomTransferRequestComponent implements OnInit {
  constructor(private modalService: NgbModal, private roomTransferService: RoomTransferService) { }
  status = 'Pending';
  roomType = null;
  month = null;
  studentCardNumber = null;
  createdDate = 'createdDate';
  isLoaded = false;
  page = 1;
  pageSize = 5;
  studentBook;
  rejectReason = '';
  loading = false;
  roomTransferRequests;
  transferRequestDetail = {
    name: '',
    studentCode: '',
    reason: ''
  };
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
    this.loading = true;
    this.roomTransferService.getRoomTransfer(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.loading = false;
        this.roomTransferRequests = res.resultList;
        if (this.roomTransferRequests == null) {
          this.roomTransferRequests = [];
        }
        this.roomTransferRequests.forEach(roomTransferRequest => {
          switch (roomTransferRequest.status) {
            case 'Pending':
              roomTransferRequest.parseStatus = 'Chưa duyệt';
              break;
            case 'Reject':
              roomTransferRequest.parseStatus = 'Từ chối';
              break;
            case 'Approved':
              roomTransferRequest.parseStatus = 'Đã duyệt';
              break;
            case 'Complete':
              roomTransferRequest.parseStatus = 'Hoàn tất';
              break;
          }
          console.log(this.roomTransferRequests);
        });
        this.isLoaded = true;
      },
        (error) => {

        });
  }
  open(content, i) {
    this.transferRequestDetail = {
      name: this.roomTransferRequests[i].studentName,
      studentCode: this.roomTransferRequests[i].studentCardNumber,
      reason: this.roomTransferRequests[i].reason
    };
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    });
  }


}
