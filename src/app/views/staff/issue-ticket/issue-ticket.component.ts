import { IssueTicketService } from './../../../services/issue-ticket.service';
import { ParamService } from './../../../services/param.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-issue-ticket',
  templateUrl: './issue-ticket.component.html',
  styleUrls: ['./issue-ticket.component.scss']
})
export class IssueTicketComponent implements OnInit {
  issueTickets = [];
  createdDate = '-createdDate';
  page = 1;
  pageSize = 5;
  isLoaded = false;
  status = null;
  filter  = null;
  ownerName = null;
  constructor(private modalService: NgbModal, private paramService: ParamService, private issueTicketService: IssueTicketService) { }
  ngOnInit() {
    const paramIssue = sessionStorage.getItem('paramIssue');
    if (paramIssue == null) {
      this.paramService.getAllIssueType()
        .subscribe((res) => {
          for (let i = 0; i < res.length; i++) {
            if (res[i].name === 'Phản ánh') {
              sessionStorage.setItem('paramIssue', res[i].paramId);
              break;
            }
          }
          this.getIssue();
        });
    } else {
      this.getIssue();
    }
  }
  getIssue() {
    let filters = 'type==' + sessionStorage.getItem('paramIssue');
    if (this.status !== null) {
      filters += ',status@=' + this.status;
    }if (this.ownerName !== null) {
      filters += ',ownerName@=' + this.ownerName;
    }
    console.log(filters);
    this.issueTicketService.getIssue(this.createdDate, filters, this.page, this.pageSize)
      .subscribe((res) => {
        this.issueTickets = res.resultList;
        this.isLoaded = true;
        console.log(res);
      },
        (error) => {

        });
  }
  sortByCreateDate(des) {
    if (!des) {
      this.createdDate = this.createdDate.replace('-', '');
    } else if (des && this.createdDate[0] !== '-') {
      this.createdDate = '-' + this.createdDate;
    }
    this.getIssue();
  }
  filterByStatus(status) {
    this.status = status;
    this.getIssue();
  }
  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }

}
