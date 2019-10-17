import {Component, OnInit} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-arrage',
  templateUrl: './arrage.component.html',
  styleUrls: ['./arrage.component.scss']
})
export class ArrageComponent implements OnInit {
  collection = [];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }

}
