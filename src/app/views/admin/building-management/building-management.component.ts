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

  constructor(private modalService: NgbModal, private router: Router) { }
  stepper: Stepper;
  index;
  building;
  showList = [];
  ngOnInit() {
  }

  open(content) {
    this.index = 1;
    this.building = {
      numberFloor: 1,
      numberRoomOnFloor: 1,
      name: '',
      floors: []
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
      for (let i = 1; i <= this.building.numberFloor; i++) {
        // const rooms = new Array(this.building.numberFloor);
        const rooms = []
        for (let j = 1; j <= this.building.numberRoomOnFloor; j++) {
          const name = this.building.name + i + (j < 10 ? '0' + j : j);
          const room = {
            name,
            type: false
          };
          // rooms[j] = room;
          rooms.push(room);
        }
        const tmp = {
          name: 'Tầng ' + i,
          gender: false,
          rooms
        };
        this.building.floors.push(tmp);
      }
    } else if (this.index === 2) {
      console.log(this.building.floors);
      this.showList = new Array(this.building.numberFloor).fill(false);
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
}

