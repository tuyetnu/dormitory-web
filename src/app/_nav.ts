interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
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
        name: 'Danh sách sinh viên',
        url: '/student-managerment',
        icon: 'icon-cursor'
      },
      {
        name: 'Xếp phòng',
        url: '/arrange',
        icon: 'icon-cursor'
      }
      ]
  },
  {
    name: 'Danh sách yêu cầu',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Đặt ngày',
        url: '/setDate',
        icon: 'icon-cursor'
      },
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
          }
        ]
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
  },
  {
    name: 'Quản lí sinh viên (staff)',
    url: '/student-managerment-staff',
    icon: 'icon-puzzle',
  },
  {
    name: 'Báo cáo về TTB (staff)',
    url: '/equipment-report',
    icon: 'icon-puzzle',
  },
  {
    name: 'Danh sách khiếu nại(staff)',
    url: '/issue-ticket',
    icon: 'icon-puzzle',
  },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // },
  // {
  //   name: 'Collapses',
  //   url: '/base/collapses',
  //   icon: 'icon-puzzle'
  // },
  // {
  //   name: 'Forms',
  //   url: '/base/forms',
  //   icon: 'icon-puzzle'
  // },
  // {
  //   name: 'Pagination',
  //   url: '/base/paginations',
  //   icon: 'icon-puzzle'
  // },
  // {
  //   name: 'Popovers',
  //   url: '/base/popovers',
  //   icon: 'icon-puzzle'
  // },
  // {
  //   name: 'Progress',
  //   url: '/base/progress',
  //   icon: 'icon-puzzle'
  // },
  // {
  //   name: 'Switches',
  //   url: '/base/switches',
  //   icon: 'icon-puzzle'
  // },
  // {
  //   name: 'Tables',
  //   url: '/base/tables',
  //   icon: 'icon-puzzle'
  // },
  // {
  //   name: 'Tabs',
  //   url: '/base/tabs',
  //   icon: 'icon-puzzle'
  // },
  // {
  //   name: 'Tooltips',
  //   url: '/base/tooltips',
  //   icon: 'icon-puzzle'
  // }
  
];
