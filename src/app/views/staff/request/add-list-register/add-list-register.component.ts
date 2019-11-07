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
  preview = true;
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
      dataString = dataString.replace(/Số tháng muốn ở/g, 'month');
      dataString = dataString.replace(/Độ ưu tiên/g, 'priorityType');
      dataString = dataString.replace(/Loại phòng/g, 'targetRoomType');
      dataString = dataString.replace(/Loại thường/g, '11');
      dataString = dataString.replace(/Loại dịch vụ/g, '12');
      dataString = dataString.replace(/Không có ưu tiên/g, '3');
      dataString = dataString.replace(/Ưu tiên loại 1 và 2/g, '2');
      dataString = dataString.replace(/Ưu tiên loại 2/g, '1');
      dataString = dataString.replace(/Ưu tiên loại 1/g, '0');
      this.students = JSON.parse(dataString);
      this.students.forEach(student => {
        delete student.name;
        delete student.studentCardNumber;
        delete student.term;
        student.priorityType = Number(student.priorityType);
        student.targetRoomType = Number(student.targetRoomType);
      });
      const a = JSON.stringify(this.students);
      console.log(a);
      if (!this.preview) {
        this.roomBookingService.importListRoomBooing(this.students)
          .subscribe((res) => {
            alert('Import thành công');
            console.log(res);
          },
            (error) => {
              alert(error.error);
            });
      } else {
        this.preview = false;
      }
    };
    reader.readAsBinaryString(file);
  }

}
