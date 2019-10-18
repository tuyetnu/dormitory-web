import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cancle-contrac-request',
  templateUrl: './cancle-contrac-request.component.html',
  styleUrls: ['./cancle-contrac-request.component.scss']
})
export class CancleContracRequestComponent implements OnInit {
  collection = [];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  open(content) {
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }
}
