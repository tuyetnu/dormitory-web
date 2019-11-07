import { BuildingService } from './../../../services/building.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-building-management',
  templateUrl: './building-management.component.html',
  styleUrls: ['./building-management.component.scss']
})
export class BuildingManagementComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router, private buildingService: BuildingService) { }
  stepper: Stepper;
  index;
  building;
  showList = [];
  buildings = [];
  ngOnInit() {
    this.getBuilding();
  }

  open(content) {
    this.index = 1;
    this.building = {
      name: '',
      numberOfFloor: 1,
      roomOnEachFloor: 1,
      floors: [],
    };
    this.modalService.open(content, { size: 'lg', windowClass: 'myCustomModalClass' });
    const a = document.querySelector('#stepper1');
    this.stepper = new Stepper(a, {
      linear: false,
      animation: true
    });
  }

  next() {
    if (this.index === 1) {
      for (let i = 1; i <= this.building.numberOfFloor; i++) {
        const createRoomRequests = [];
        for (let j = 1; j <= this.building.roomOnEachFloor; j++) {
          const name = this.building.name + i + (j < 10 ? '0' + j : j);
          const room = {
            name,
            roomType: 11,
            roomStatus: 'Active',
            gender: false
          };
          createRoomRequests.push(room);
        }
        const floor = {
          name: 'Tầng ' + i,
          gender: false,
          createRoomRequests
        };
        this.building.floors.push(floor);
      }
    } else if (this.index === 2) {
      this.showList = new Array(this.building.numberOfFloor).fill(false);
      this.show(0);
    }
    this.stepper.next();
    this.index = this.index + 1;
  }

  back() {
    this.index = this.index - 1;
    this.stepper.previous();
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
  listRoomMiss() {
    this.router.navigate(['/room-miss-equipment']);
  }
  newBuilding() {
    const data = {
      name: this.building.name,
      numberOfFloor: this.building.numberOfFloor,
      roomOnEachFloor: this.building.roomOnEachFloor,
      createRoomRequests: [],
    };
    this.building.floors.forEach(floor => {
      floor.createRoomRequests.forEach(createRoomRequest => {
        createRoomRequest.gender = floor.gender;
      });
      data.createRoomRequests = data.createRoomRequests.concat(floor.createRoomRequests);
    });
    this.buildingService.newBuilding(data)
      .subscribe((res) => {
        console.log(res);
      });
  }
  getBuilding() {
    this.buildingService.getBuilding()
      .subscribe((res) => {
        this.buildings = res;
      }, (err) => {

      });
  }
}

