import { StudentService } from './../../../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-list-student',
  templateUrl: './add-list-student.component.html',
  styleUrls: ['./add-list-student.component.scss']
})
export class AddListStudentComponent implements OnInit {
  accept = ['xls', 'xlsx', 'xlsm'];
  constructor(private modalService: NgbModal, private studentService: StudentService) { }
  preview = true;
  students = [];
  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }

  download() {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/file/Danh_Sach_Sinh_Vien.xlsm';
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
      dataString = dataString.replace(/Giới tính/g, 'gender');
      dataString = dataString.replace(/Nam/g, 'TRUE');
      dataString = dataString.replace(/Nữ/g, 'FALSE');
      dataString = dataString.replace(/Số điện thoại/g, 'phoneNumber');
      dataString = dataString.replace(/Địa chỉ/g, 'address');
      dataString = dataString.replace(/Ngày sinh/g, 'birthDay');
      dataString = dataString.replace(/CMND/g, 'identityNumber');
      dataString = dataString.replace(/Năm nhập học/g, 'startedSchoolYear');
      dataString = dataString.replace(/Khoá/g, 'term');
      dataString = dataString.replace(/Email/g, 'email');
      this.students = JSON.parse(dataString);
      if (!this.preview) {
        this.studentService.importListStudent(this.students)
          .subscribe((res) => {
            alert('Import thành công');
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
