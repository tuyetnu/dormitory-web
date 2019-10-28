import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cancle-contrac-request',
  templateUrl: './cancle-contrac-request.component.html',
  styleUrls: ['./cancle-contrac-request.component.scss']
})
export class CancleContracRequestComponent implements OnInit {
  cancelContracts = [];
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
    const cancelContract = {
      createdDate: '27/10/2019',
      status: 'Chưa xử lí',
      cancelationDate: '30/10/2019',
      reason: 'Muốn ra khỏi KTX',
      room,
      student,
    };
    for (let i = 1; i <= 10; i++) {
      this.cancelContracts.push(cancelContract);
    }
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    });
  }
}
