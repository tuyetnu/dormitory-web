import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-issue-ticket',
  templateUrl: './issue-ticket.component.html',
  styleUrls: ['./issue-ticket.component.scss']
})
export class IssueTicketComponent implements OnInit {
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
