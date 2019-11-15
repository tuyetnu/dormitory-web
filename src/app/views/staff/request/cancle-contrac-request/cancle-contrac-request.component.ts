import { ContractCancelService } from './../../../../services/contract-cancel.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
  selector: 'app-cancle-contrac-request',
  templateUrl: './cancle-contrac-request.component.html',
  styleUrls: ['./cancle-contrac-request.component.scss']
})
export class CancleContracRequestComponent implements OnInit {
  constructor(private modalService: NgbModal, private contractCancelService: ContractCancelService) { }
  cancelContracts = [];
  status = 'Pending';
  roomType = 'null';
  studentCode;
  createdDate = '-createdDate';
  loading = false;
  page = 1;
  pageSize = 5;
  totalPage;
  isLoaded = false;
  reason = '';
  cancelcontractDetail = {
    id: '',
    name: '',
    studentCode: '',
    roomName: '',
    roomType: 0,
    dateOut: '',
    description: ''
  };
  ngOnInit() {
    this.getCancelContract();
  }
  changePage(n) {
    if (this.page + n > this.totalPage || this.page + n < 1) {
      return;
    }
    this.page += n;
    this.getCancelContract();
  }
  getCancelContract() {
    let filters = 'Status@=' + this.status;
    if (this.studentCode !== null && this.studentCode !== undefined) {
      filters += ',studentCode@=' + this.studentCode;
    }
    console.log(filters);
    this.loading = true;
    this.contractCancelService.getCancelContract(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.loading = false;
        this.page = res.currentPage;
        this.totalPage = res.totalPage;
        this.cancelContracts = res.resultList;
        if (this.cancelContracts == null) {
          this.cancelContracts = [];
        }
        this.cancelContracts.forEach(cancelContract => {
          switch (cancelContract.status) {
            case 'Pending':
              cancelContract.parseStatus = 'Chưa duyệt';
              break;
            case 'Rejected':
              cancelContract.parseStatus = 'Từ chối';
              break;
            case 'Approved':
              cancelContract.parseStatus = 'Đã duyệt';
              break;
            case 'Complete':
              cancelContract.parseStatus = 'Hoàn tất';
              break;
          }
        });
        this.calDateOut();
        this.isLoaded = true;
      },
        (error) => {

        });
  }
  sortByCreateDate(des) {
    if (!des) {
      this.createdDate = this.createdDate.replace('-', '');
    } else if (des && this.createdDate[0] !== '-') {
      this.createdDate = '-' + this.createdDate;
    }
    this.getCancelContract();
  }
  filterByStatus(status) {
    this.status = status;
    this.getCancelContract();
  }
  calDateOut() {
    this.cancelContracts.forEach(cancelContract => {
      const dateOut = moment(cancelContract.LastUpdatedDate).add(cancelContract.month, 'M').endOf('month');
      cancelContract.dateOut = dateOut.format('DD/MM/YYYY');
    });
  }
  reject(id) {
    if (this.reason === '') {
      alert('Nhập lí do từ chối');
      $('#inputReason').focus();
      return;
    }
    const data = {
      cancelContractFormId: id,
      staffId: sessionStorage.getItem('accountID'),
      reason: this.reason
    };
    this.contractCancelService.reject(data)
    .subscribe ((res) => {
      alert('Chỉnh sửa yêu cầu thành công');
      console.log(res);
      this.closeModal();
      this.getCancelContract();
    }, (err) => {
      console.log(err);
      alert('Chỉnh sửa yêu cầu thất bại');
      this.closeModal();
    });
  }
  approved(id) {
    const data = {
      cancelContractFormId: id,
      staffId: sessionStorage.getItem('accountID'),
    };
    this.contractCancelService.approved(data)
      .subscribe((res) => {
        alert('Chỉnh sửa yêu cầu thành công');
        console.log(res);
        this.closeModal();
        this.getCancelContract();
      }, (error) => {
        console.log(error);
        alert('Chỉnh sửa yêu cầu thất bại');
        this.closeModal();
      });
  }
  closeModal() {
    this.modalService.dismissAll();
  }
  open(content, i) {
    this.cancelcontractDetail = {
      id: this.cancelContracts[i].cancelContractFormId,
      name: this.cancelContracts[i].studentName,
      studentCode: this.cancelContracts[i].studentCode,
      roomName: this.cancelContracts[i].roomName,
      roomType: this.cancelContracts[i].roomType,
      dateOut: this.cancelContracts[i].dateOut,
      description: this.cancelContracts[i].description,
    };
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result
    .then((result) => {
    }).catch((err) => { });
  }
}
