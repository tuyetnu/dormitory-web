import { Router } from '@angular/router';
import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {
  public navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  public photoUrl;
  constructor(@Inject(DOCUMENT) _document?: any, private router?: Router) {
    this.photoUrl = sessionStorage.getItem('photoUrl');
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit() {
    const role = sessionStorage.getItem('role');
    if (role === 'Staff') {
      this.navItems = [
        {
          name: 'Danh sách đã duyệt',
          url: '/approved-request',
          icon: 'icon-pencil'
        },
        {
          name: 'Quản lí sinh viên',
          url: '/student-managerment-staff',
          icon: 'icon-puzzle',
        },
        {
          name: 'Danh sách yêu cầu',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Yêu cầu đặt phòng',
              url: '/room-booking-request',
              icon: 'icon-cursor'
            },
            {
              name: 'Yêu cầu chuyển phòng',
              url: '/room-transfer-request',
              icon: 'icon-cursor'
            },
            {
              name: 'Yêu cầu gia hạn HĐ',
              url: '/renew-contract-request',
              icon: 'icon-cursor'
            },
            {
              name: 'Yêu cầu huỷ hợp đồng',
              url: '/cancle-contract-request',
              icon: 'icon-cursor'
            },
          ]
        },
        {
          name: 'Báo cáo về TTB',
          url: '/equipment-report',
          icon: 'icon-puzzle',
        },
        {
          name: 'Danh sách khiếu nại',
          url: '/issue-ticket',
          icon: 'icon-puzzle',
        }
      ];
    } else {
      this.navItems = [
        {
          name: 'Xem thống kê',
          url: '/dashboard',
          icon: 'icon-speedometer',
        },
        {
          name: 'Quản lí sinh viên',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Thêm DS sinh viên',
              url: '/add-list-student',
              icon: 'icon-cursor',
            },
            {
              name: 'Thêm DS đăng kí',
              url: '/add-list-register',
              icon: 'icon-cursor',
            },
            {
              name: 'Danh sách sinh viên',
              url: '/student-managerment',
              icon: 'icon-cursor'
            },
          ]
        },
        {
          name: 'Quản lí toà nhà',
          url: '/buiding-management',
          icon: 'icon-pencil'
        },
        {
          name: 'Quản lí phòng',
          url: '/room-management',
          icon: 'icon-pencil'
        },
        {
          name: 'Quản lí nhân sự',
          url: '/staff-management',
          icon: 'icon-puzzle',
        },
        {
          name: 'Đặt ngày',
          url: '/setDate',
          icon: 'icon-cursor'
        },
        {
          name: 'Cập nhật phí',
          url: '/update-fee',
          icon: 'icon-puzzle',
        },
        {
          name: 'Quản lí thiết bị',
          url: '/equipment-management',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tạo thông báo',
          url: '/create-news',
          icon: 'icon-puzzle',
        }
      ];
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
