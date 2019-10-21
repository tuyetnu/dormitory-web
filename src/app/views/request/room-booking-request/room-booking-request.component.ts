import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IImage } from '../../../module/IImage';
@Component({
  selector: 'app-room-booking-request',
  templateUrl: './room-booking-request.component.html',
  styleUrls: ['./room-booking-request.component.scss']
})
export class RoomBookingRequestComponent implements OnInit {
  collection = [];
  showList = [false, true];
  constructor(private modalService: NgbModal) { }
  imageUrls: (string | IImage)[] = [
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
     caption: 'Hình chứng minh nhân dân', href: '#config' },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', 
    caption: 'Hình thẻ sinh viên', href: '#config' },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', 
    caption: 'Hình đối tượng ưu tiên', href: 'https://www.apple.com/' },
  ];
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;


  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  open(content) {
    this.showList = [false, true];
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {

    });
  }
  show(index) {
    const tmp = this.showList[index];
    this.showList.fill(false);
    this.showList[index] = !tmp;
    $('.detail').removeClass('fa-caret-down').removeClass('fa-caret-right');
    $('.detail').addClass('fa-caret-right');
    if (this.showList[index] === true) {
      $('.detail').eq(index).removeClass('fa-caret-right');
      $('.detail').eq(index).addClass('fa-caret-down');
    }
  }

}
