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
  }
  settings2 = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: true,
  }
  selectedItems = [];
  dropdownSettings = {
    singleSelection: false,
    text: "Chọn loại yêu cầu cần đóng",
    selectAllText: 'Tất cả',
    classes: "form-control form-group",
    labelKey: "name",
    maxHeight: 240,
    showCheckbox: true,
  };
  ngOnInit() {
  }

}
