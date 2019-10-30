import { IssueTicketService } from './../../../services/issue-ticket.service';
import { ParamService } from './../../../services/param.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-equipment-report',
  templateUrl: './equipment-report.component.html',
  styleUrls: ['./equipment-report.component.scss']
})
export class EquipmentReportComponent implements OnInit {
  equipmentReports = [];
  createdDate = '-createdDate';
  page = 1;
  pageSize = 5;
  isLoaded = false;
  status = null;
  filter = null;
  ownerName = null;
  equipmentType;
  equipmentTypeName = null;
  roomName = null;
  constructor(private modalService: NgbModal, private paramService: ParamService, private issueTicketService: IssueTicketService) { }
  ngOnInit() {
    const paramEquipment = sessionStorage.getItem('paramEquipment');
    if (paramEquipment == null) {
      this.paramService.getAllIssueType()
        .subscribe((res) => {
          for (let i = 0; i < res.length; i++) {
            if (res[i].name === 'Tình trạng thiết bị') {
              sessionStorage.setItem('paramEquipment', res[i].paramId);
              break;
            }
          }
          this.getIssueEquipment();
        });
    } else {
      this.getIssueEquipment();
    }
    const paramTypeId = sessionStorage.getItem('EquipmentType');
    if (paramTypeId == null) {
      this.paramService.getParamTypes()
        .subscribe((res) => {
          for (let i = 0; i < res.length; i++) {
            if (res[i].name === 'EquipmentType') {
              sessionStorage.setItem('EquipmentType', res[i].paramTypeId);
              break;
            }
          }
          this.getEquipmentType();
        });
    } else {
      this.getEquipmentType();
    }
  }
  getIssueEquipment() {
    let filters = 'type==' + sessionStorage.getItem('paramEquipment');
    if (this.status !== null) {
      filters += ',status@=' + this.status;
    } if (this.ownerName !== null && this.ownerName !== '') {
      filters += ',ownerName@=' + this.ownerName;
    }if (this.equipmentTypeName !== null) {
      filters += ',equipmentTypeName@=' + this.equipmentTypeName;
    }if (this.roomName !== null && this.roomName !== '') {
      filters += ',roomName@=' + this.roomName;
    }
    console.log(filters);
    this.issueTicketService.getIssue(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.equipmentReports = res.resultList;
        this.isLoaded = true;
        console.log(this.equipmentReports);
      },
        (error) => {

        });
  }
  filterByStatus(status) {
    this.status = status;
    this.getIssueEquipment();
  }
  filterType(equipmentTypeName) {
    this.equipmentTypeName = equipmentTypeName;
    this.getIssueEquipment();
  }
  getEquipmentType() {
    this.paramService.getByParamTypeById(sessionStorage.getItem('EquipmentType'))
      .subscribe((res) => {
        this.equipmentType = res;
      });
  }
  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }

}
