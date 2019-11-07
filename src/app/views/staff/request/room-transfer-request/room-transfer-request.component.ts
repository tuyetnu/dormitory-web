import { RoomTransferService } from './../../../../services/room-transfer.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-room-transfer-request',
  templateUrl: './room-transfer-request.component.html',
  styleUrls: ['./room-transfer-request.component.scss']
})
export class RoomTransferRequestComponent implements OnInit {
  constructor(private modalService: NgbModal, private roomTransferService: RoomTransferService) {}
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
        this.isLoaded = true;
      },
        (error) => {

        });
  }
  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }


}
