import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-arrage',
  templateUrl: './arrage.component.html',
  styleUrls: ['./arrage.component.scss']
})
export class ArrageComponent implements OnInit {
  collection = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }

  download() {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/file/dssv.xlsx';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  importFileExcel(): void {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = $('#inputExcel').prop('files')[0];
    console.log(file);
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      jsonData = jsonData.Sheet1;
      jsonData.forEach(elm => delete elm.STT);
      let dataString = JSON.stringify(jsonData);
      dataString = dataString.replace(/Họ và tên/g, 'Fullname');
      dataString = dataString.replace(/MSSV/g, 'StudentCode');
      dataString = dataString.replace(/Giới tính/g, 'Gender');
      dataString = dataString.replace(/Số điện thoại/g, 'PhoneNumber');
      dataString = dataString.replace(/Địa chỉ/g, 'Address');
      dataString = dataString.replace(/Ngày sinh/g, 'Birthday');
      dataString = dataString.replace(/CMND/g, 'IdentityNumber');
      dataString = dataString.replace(/Năm nhập học/g, 'YearStart');
      dataString = dataString.replace(/Khoá/g, 'Term');
      dataString = dataString.replace(/Số tháng muốn ở/g, 'Month');
      dataString = dataString.replace(/Độ ưu tiên/g, 'Priority');
      dataString = dataString.replace(/Loại phòng/g, 'RoomType');
      console.log(dataString);
    };
    reader.readAsBinaryString(file);
  }

}
