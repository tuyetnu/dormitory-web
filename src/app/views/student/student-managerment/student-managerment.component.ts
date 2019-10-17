import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-managerment',
  templateUrl: './student-managerment.component.html',
  styleUrls: ['./student-managerment.component.scss']
})
export class StudentManagermentComponent implements OnInit {
  collection = [];
  showList = [false, false, false, false];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  open(content) {
    this.showList.fill(false);
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    });
  }

  show(index) {
    var tmp = this.showList[index];
    this.showList.fill(false);
    this.showList[index] = !tmp;
  }
}
