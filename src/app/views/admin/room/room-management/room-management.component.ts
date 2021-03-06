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
  buildingId;
  buildings = [];
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
  roomDetail;
  isLoaded = false;
  ngOnInit() {
    this.loading = true;
    this.buildingService.getBuilding()
      .subscribe((res) => {
        this.loading = false;
        this.buildings = res;
        if (sessionStorage.getItem('buildingId') === null) {
          this.buildingId = this.buildings[0].buildingId;
        } else {
          this.buildingId = sessionStorage.getItem('buildingId');
          sessionStorage.removeItem('buildingId');
        }
        console.log(this.buildings[0].buildingId);
        this.getBuilding();
      }, (err) => {

      });
  }

  getBuilding() {
    this.isLoaded = false;
    this.loading = true;
    console.log(this.buildingId);
    this.buildingService.getBuildingById(this.buildingId)
      .subscribe((res) => {
        this.building = res;
        this.floors = [];
        for (let i = 1; i <= this.building.numberOfFloor; i++) {
          const rooms = [];
          for (let j = 1; j <= this.building.roomOnEachFloor; j++) {
            const name = this.building.name + i + (j < 10 ? '0' + j : j);
            const room = this.building.rooms.find(r => {
              return r.name === name;
            });
            let isHold = 0;
            let isLiving = 0;
            if (room.students != null) {
              room.students.forEach(student => {
                if (student.isHold) {
                  isHold++;
                } else { isLiving++; }
              });
            }
            const isHoldArr = new Array(isHold).fill(2);
            const isLivingArr = new Array(isLiving).fill(1);
            const isisEmptyArr = new Array(room.capacity - room.currentNumberOfStudent).fill(0);
            room.liveStatus = [];
            room.liveStatus.push(...isHoldArr);
            room.liveStatus.push(...isLivingArr);
            room.liveStatus.push(...isisEmptyArr);
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
        this.isLoaded = true;
      }, (err) => {

      });
  }
  open(content, room) {
    console.log(room);
    this.roomDetail = room;
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
