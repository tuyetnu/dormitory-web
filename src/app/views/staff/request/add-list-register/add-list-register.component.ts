import { RoomBookingService } from './../../../../services/room-booking.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-list-register',
  templateUrl: './add-list-register.component.html',
  styleUrls: ['./add-list-register.component.scss']
})
export class AddListRegisterComponent implements OnInit {
  accept = ['xls', 'xlsx', 'xlsm'];
  constructor(private modalService: NgbModal, private roomBookingService: RoomBookingService) { }
  students = [];
  preview = null;
  ngOnInit() {
  }

  download() {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/file/Danh_Sach_Sinh_Vien_Dang_Ky.xlsm';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  changeFile() {
    this.preview = true;
  }
  importFileExcel(): void {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = $('#inputExcel').prop('files')[0];
    const extension = file.name.substring(file.name.lastIndexOf('.') + 1);
    if (!this.accept.includes(extension)) {
      alert('Vui lòng chọn file excel');
      return;
    }
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
      dataString = dataString.replace(/Họ và tên/g, 'name');
      dataString = dataString.replace(/MSSV/g, 'studentCardNumber');
      dataString = dataString.replace(/Khoá/g, 'term');
      dataString = dataString.replace(/Email/g, 'email');
      dataString = dataString.replace(/Ngành/g, 'industry');
      dataString = dataString.replace(/Số tháng muốn ở/g, 'month');
      dataString = dataString.replace(/Độ ưu tiên/g, 'priorityType');
      dataString = dataString.replace(/Loại phòng/g, 'targetRoomType');
      dataString = dataString.replace(/Không có ưu tiên/g, '3');
      dataString = dataString.replace(/Ưu tiên loại 1 và 2/g, '2');
      dataString = dataString.replace(/Ưu tiên loại 2/g, '1');
      dataString = dataString.replace(/Ưu tiên loại 1/g, '0');
      this.students = JSON.parse(dataString);
      this.preview = false;
    };
    reader.readAsBinaryString(file);
  }

  submit() {
    const data = [];
    this.students.forEach(student => {
      let targetRoomType = 12;
      if (student.targetRoomType === 'Loại thường' ) {
        targetRoomType = 11;
      }
      const tmp = {
        email: student.email,
        month: student.month,
        targetRoomType,
        priorityType: student.priorityType
      };
      data.push(tmp);
    });
    console.log(JSON.stringify(data));
    this.roomBookingService.importListRoomBooing(data)
      .subscribe((res) => {
        alert('Import thành công');
      },
        (err) => {
          alert(err.error);
        });
  }

  clear() {
    this.students = [];
    this.preview = null;
    $('#inputExcel').val('');
  }

}
