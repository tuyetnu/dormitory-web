import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-request-date',
  templateUrl: './set-request-date.component.html',
  styleUrls: ['./set-request-date.component.scss']
})
export class SetRequestDateComponent implements OnInit {

  constructor() { }
  startdate: Date = new Date();

  enddate: Date = new Date(this.startdate);
  settings1 = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: false,
  };
  settings2 = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: true,
  };
  selectedItems = [];
  dropdownSettings = {
    singleSelection: false,
    text: 'Chọn loại yêu cầu cần đóng',
    selectAllText: 'Tất cả',
    classes: 'form-control form-group',
    labelKey: 'name',
    maxHeight: 300,
    showCheckbox: true,
  };
  dropdownList = [
    { 'id': 1, 'name': 'Tất cả' },
    { 'id': 5, 'name': 'Đặt phòng' },
    { 'id': 2, 'name': 'Chuyển phòng' },
    { 'id': 3, 'name': 'Gia hạn hợp đồng' },
    { 'id': 4, 'name': 'Huỷ họp đồng' },
  ];
  onItemSelect(item: any) { }

  onSelectAll(item: any) { }

  onDeSelectAll(item: any) { }

  OnItemDeSelect(item: any) { }
  ngOnInit() {
  }

}
