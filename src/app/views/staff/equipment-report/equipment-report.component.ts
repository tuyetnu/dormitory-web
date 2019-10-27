import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-equipment-report',
  templateUrl: './equipment-report.component.html',
  styleUrls: ['./equipment-report.component.scss']
})
export class EquipmentReportComponent implements OnInit {
  equipmentReports = [];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    const equipment = {
      equipmentType: 'Gường tầng',
      name: 'Gường tầng 1'
    };
    const student = {
      name: 'Nguyễn Văn A'
    };
    const room = {
      name: 'A201'
    };
    const equipmentReport = {
      issueTicketId: 1,
      status: 'Chưa xử lí',
      student,
      equipment,
      room,
    };
    for (let i = 1; i <= 100; i++) {
      this.equipmentReports.push(equipmentReport);
    }
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }

}
