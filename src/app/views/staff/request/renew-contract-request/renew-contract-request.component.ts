import { RenewContractService } from './../../../../services/renew-contract.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
  selector: 'app-renew-contract-request',
  templateUrl: './renew-contract-request.component.html',
  styleUrls: ['./renew-contract-request.component.scss']
})
export class RenewContractRequestComponent implements OnInit {

  renewContracts = [];
  status = 'Pending';
  studentCode;
  createdDate = '-createdDate';
  loading = false;
  page = 1;
  pageSize = 5;
  isLoaded = false;
  cancelcontractDetail = {
    id: '',
    name: '',
    studentCode: '',
    roomName: '',
    roomType: 0,
    dateEndContract: '',
    month: 0,
    dateOut: '',
  };
  reason = '';
  constructor(private modalService: NgbModal, private renewContractService: RenewContractService) {}

  ngOnInit() {
   this.getRenewContract();
  }

  getRenewContract() {
    let filters = 'Status@=' + this.status;
    if (this.studentCode !== null && this.studentCode !== undefined) {
      filters += ',studentCode@=' + this.studentCode;
    }
    this.loading = true;
    this.renewContractService.getRenewContract(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.loading = false;
        this.renewContracts = res.resultList;
        if (this.renewContracts == null) {
          this.renewContracts = [];
        }
        this.renewContracts.forEach(renewContract => {
          switch (renewContract.status) {
            case 'Pending':
              renewContract.parseStatus = 'Chưa duyệt';
              break;
            case 'Rejected':
              renewContract.parseStatus = 'Từ chối';
              break;
            case 'Approved':
              renewContract.parseStatus = 'Đã duyệt';
              break;
            case 'Complete':
              renewContract.parseStatus = 'Hoàn tất';
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
    this.getRenewContract();
  }
  filterByStatus(status) {
    this.status = status;
    this.getRenewContract();
  }
  calDateOut() {
    this.renewContracts.forEach(renewContract => {
      const dateOut = moment(renewContract.dateEndContract).add(renewContract.month, 'M').endOf('month');
      renewContract.dateOut = dateOut.format('DD/MM/YYYY');
    });
  }
  reject(id) {
    if (this.reason === '') {
      alert('Nhập lí do từ chối');
      $('#inputReason').focus();
      return;
    }
    const data = {
      renewContractFormId: id,
      staffId: sessionStorage.getItem('accountID'),
      reason: this.reason
    };
    this.renewContractService.reject(data)
    .subscribe ((res) => {
      alert('Chỉnh sửa yêu cầu thành công');
      console.log(res);
      this.closeModal();
      this.getRenewContract();
    }, (err) => {
      console.log(err);
      alert('Chỉnh sửa yêu cầu thất bại');
      this.closeModal();
    });
  }
  approved(id) {
    const data = {
      contractId: id,
      staffId: sessionStorage.getItem('accountID'),
    };
    this.renewContractService.approved(data)
      .subscribe((res) => {
        alert('Chỉnh sửa yêu cầu thành công');
        console.log(res);
        this.closeModal();
        this.getRenewContract();
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
      id: this.renewContracts[i].contractRenewalFormId,
      name: this.renewContracts[i].studentName,
      studentCode: this.renewContracts[i].studentCode,
      roomName: this.renewContracts[i].roomName,
      roomType: this.renewContracts[i].roomType,
      dateEndContract: moment(this.renewContracts[i].dateEndContract).format('DD/MM/YYYY'),
      month: this.renewContracts[i].month,
      dateOut: this.renewContracts[i].dateOut,
    };
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result
    .then((result) => {
    }).catch((err) => { });
  }

}
