import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-issue-ticket',
  templateUrl: './issue-ticket.component.html',
  styleUrls: ['./issue-ticket.component.scss']
})
export class IssueTicketComponent implements OnInit {
  issueTickets = [];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    const owner = {
      name: 'Nguyễn Văn A',
    };
    const issueTicket = {
      issueTicketId: '1',
      status: 'Chưa xử lí',
      description: 'Khiếu nại về ý thức sinh hoạt chung',
      owner,
    };
    for (let i = 1; i <= 100; i++) {
      this.issueTickets.push(issueTicket);
    }
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }

}
