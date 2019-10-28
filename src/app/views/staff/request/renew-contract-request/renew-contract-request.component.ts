import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-renew-contract-request',
  templateUrl: './renew-contract-request.component.html',
  styleUrls: ['./renew-contract-request.component.scss']
})
export class RenewContractRequestComponent implements OnInit {

  renewContracts = [];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    const room = {
      name: 'A201',
      roomType: 'Loại thường'
    };
    const student = {
      name: 'Nguyễn Văn A',
      studentCardNumber: 'SE62525',
    };
    const renewContract = {
      createdDate: '27/10/2019',
      status: 'Chưa xử lí',
      month: '12',
      room,
      student,
    };
    for (let i = 1; i <= 100; i++) {
      this.renewContracts.push(renewContract);
    }
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }


}
