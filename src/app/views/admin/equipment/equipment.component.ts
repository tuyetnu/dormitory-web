import { EquipmentService } from './../../../services/equipment.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParamService } from '../../../services/param.service';
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  loading = false;
  equipmentCode = null;
  equipments;
  equipmentType;
  filterUse = null;
  status = 'Active';
  equipmentTypeName = null;
  createdDate = 'createdDate';
  page = 1;
  pageSize = 5;
  isLoaded = false;
  createEquipment;
  constructor(private modalService: NgbModal, private equipmentService: EquipmentService,
    private paramService: ParamService) { }
  ngOnInit() {
    if (sessionStorage.getItem('addEquipment') != null) {
      $('#btnAdd').click();
      sessionStorage.removeItem('addEquipment');
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
  getEquipmentType() {
    this.paramService.getByParamTypeById(sessionStorage.getItem('EquipmentType'))
      .subscribe((res) => {
        this.equipmentType = res;
        this.getEquipment();
      });
  }
  getEquipment() {
    this.loading = true;
    let filters = 'Status@=' + this.status;
    if (this.equipmentTypeName !== null) {
      filters += ',equipmentTypeName@=' + this.equipmentTypeName;
    }
    if (this.filterUse !== null) {
      filters += this.filterUse;
    }
    if (this.equipmentCode !== null) {
      filters += ',code@=' + this.equipmentCode;
    }
    this.equipmentService.getEquipment(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.equipments = res.resultList;
        this.isLoaded = true;
        this.loading = false;
      },
        (error) => {

        });
  }
  filterType(equipmentTypeName) {
    this.equipmentTypeName = equipmentTypeName;
    this.getEquipment();
  }
  filterUseEquiment(filterUse) {
    switch (filterUse) {
      case '1':
        this.filterUse = null;
        break;
      case '2':
        this.filterUse = ',roomId>0';
        break;
      case '3':
        this.filterUse = ',roomId<0';
        break;
    }
    this.getEquipment();
  }
  sortByCreateDate(des) {
    if (!des) {
      this.createdDate = this.createdDate.replace('-', '');
    } else if (des && this.createdDate[0] !== '-') {
      this.createdDate = '-' + this.createdDate;
    }
    this.getEquipment();
  }
  filterByStatus(status) {
    this.status = status;
    this.getEquipment();
  }
  closeModal() {
    this.modalService.dismissAll();
  }
  open(content) {
    this.createEquipment = {
      imageUrl: '',
      status: 'Active',
      price: '',
      equipmentTypeId: this.equipmentType[0].paramId
    };
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    });
  }
  addEquipment() {
    this.equipmentService.addEquipment(this.createEquipment)
      .subscribe((res) => {
        alert('Thêm thiết bị thành công');
      },
        (error) => {
          alert('Thêm thiết bị không thành công');
        });
        this.closeModal();
        this.getEquipment();
  }
}
