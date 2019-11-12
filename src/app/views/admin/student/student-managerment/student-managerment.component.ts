import { StudentService } from './../../../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-managerment',
  templateUrl: './student-managerment.component.html',
  styleUrls: ['./student-managerment.component.scss']
})
export class StudentManagermentComponent implements OnInit {
  students = [];
  studentDetail;
  isLoaded = false;
  createdDate = 'createdDate';
  gender = true;
  page = 1;
  loading = false;
  pageSize = 5;
  showList = [true, false, false, false];
  constructor(private modalService: NgbModal, private studentService: StudentService) { }

  ngOnInit() {
    this.getStudent();
  }
  getStudent() {
    const filters = 'gender==' + this.gender;
    this.loading = true;
    this.studentService.getStudent(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.loading = false;
        this.students = res;
        this.isLoaded = true;
      },
        (error) => {

        });
  }
  open(content, index) {
    if (index !== undefined) {
      this.studentDetail = this.students[index];
    }
    this.showList = [true, false, false, false];
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }).catch(error => { });
  }

  show(index) {
    const tmp = this.showList[index];
    this.showList.fill(false);
    this.showList[index] = !tmp;
    $('.detail').removeClass('fa-caret-down');
    $('.detail').removeClass('fa-caret-right');
    $('.detail').addClass('fa-caret-right');
    if (this.showList[index] === true) {
      $('.detail').eq(index).removeClass('fa-caret-right');
      $('.detail').eq(index).addClass('fa-caret-down');
    }
  }
}
