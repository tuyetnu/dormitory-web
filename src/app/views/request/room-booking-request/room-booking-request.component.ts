import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-room-booking-request',
  templateUrl: './room-booking-request.component.html',
  styleUrls: ['./room-booking-request.component.scss']
})
export class RoomBookingRequestComponent implements OnInit {
  collection = [];
  showList = [false, true];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  open(content) {
    this.showList = [false, true];
    this.modalService.open(content, { size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }
  show(index) {
    var tmp = this.showList[index];
    this.showList.fill(false);
    this.showList[index] = !tmp;
    $(".fa").removeClass("fa-caret-down").removeClass("fa-caret-right");
    $(".fa").addClass("fa-caret-right");
    if(this.showList[index] == true){
      $(".fa").eq(index).removeClass("fa-caret-right");
      $(".fa").eq(index).addClass("fa-caret-down");
    }
  }
}
