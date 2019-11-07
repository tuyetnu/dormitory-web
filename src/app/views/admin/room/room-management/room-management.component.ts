import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BuildingService } from '../../../../services/building.service';
@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.scss']
})
export class RoomManagementComponent implements OnInit {
  showList = [true, false, false];
  theCheckbox1 = false;
  theCheckbox2 = false;
  theCheckbox3 = false;
  theCheckbox4 = false;
  theCheckbox5 = false;
  marked = true;
  loading = false;
  building;
  floors = [];
  constructor(private modalService: NgbModal,
    private buildingService: BuildingService) { }
  dropdownList = [
    { 'id': 1, 'name': 'Bình thường' },
    { 'id': 5, 'name': 'Đặt biệt' },
  ];
  dropdownList2 = [
    { 'id': 1, 'name': '6 sinh viên' },
    { 'id': 5, 'name': '8 sinh viên' },
  ];
  selectedItems = [];
  dropdownSetting1 = {
    text: 'Chọn loại phòng',
    classes: 'form-control form-group',
    labelKey: 'name',
    maxHeight: 240,
    showCheckbox: true,
  };
  dropdownSetting2 = {
    text: 'Chọn số sinh viên',
    classes: 'form-control form-group',
    labelKey: 'name',
    maxHeight: 240,
    showCheckbox: true,
  };
  numbers;
  ngOnInit() {
    this.loading = true;
    const buildingId = 1;
    this.buildingService.getBuildingById(buildingId)
      .subscribe((res) => {
        this.building = res;
        for (let i = 1; i <= this.building.numberOfFloor; i++) {
          const rooms = [];
          for (let j = 1; j <= this.building.roomOnEachFloor; j++) {
            const name = this.building.name + i + (j < 10 ? '0' + j : j);
            const room = this.building.rooms.find(r => {
              return r.name === name;
            });
            rooms.push(room);
          }
          const floor = {
            name: 'Tầng ' + i,
            rooms
          };
          this.floors.push(floor);
        }
        console.log(this.floors);
        this.loading = false;
      }, (err) => {

      });
  }
  open(content) {
    this.showList = [true, false, false];
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    });
  }

  show(index) {
    const tmp = this.showList[index];
    this.showList.fill(false);
    this.showList[index] = !tmp;
    $('.detail').removeClass('fa-caret-down');
    $('.detail').removeClass('fa-caret-right');
    $('.detail').addClass('fa-caret-right');
    if (this.showList[index] === true) {
      $('.detail').eq(index).removeClass('fa-caret-right');
      $('.detail').eq(index).addClass('fa-caret-down');
    }
  }
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }


}
