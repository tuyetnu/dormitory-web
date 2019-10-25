import { ApprovedRequestComponent } from './views/admin/approved-request/approved-request.component';
import { EquipmentReportComponent } from './views/staff/equipment-report/equipment-report.component';
import { StudentComponent } from './views/staff/student/student.component';
import { EquipmentComponent } from './views/admin/equipment/equipment.component';
import { LogoutComponent } from './views/logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ArrageComponent } from './views/admin/student/arrage/arrage.component';
import { StudentManagermentComponent } from './views/admin/student/student-managerment/student-managerment.component';
import { SetRequestDateComponent } from './views/staff/request/set-request-date/set-request-date.component';
import { RoomBookingRequestComponent } from './views/staff/request/room-booking-request/room-booking-request.component';
import { RoomTransferRequestComponent } from './views/staff/request/room-transfer-request/room-transfer-request.component';
import { RenewContractRequestComponent } from './views/staff/request/renew-contract-request/renew-contract-request.component';
import { CancleContracRequestComponent } from './views/staff/request/cancle-contrac-request/cancle-contrac-request.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { RoomManagementComponent } from './views/admin/room/room-management/room-management.component';
import { StaffComponent } from './views/admin/staff/staff.component';
import { UpdateFeeComponent } from './views/admin/update-fee/update-fee.component';
import { IssueTicketComponent } from './views/staff/issue-ticket/issue-ticket.component';
import { CreateNewComponent } from './views/admin/create-new/create-new.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'arrange',
        component: ArrageComponent
      },
      {
        path: 'student-managerment',
        component: StudentManagermentComponent
      },
      {
        path: 'setDate',
        component: SetRequestDateComponent
      },
      {
        path: 'room-booking-request',
        component: RoomBookingRequestComponent
      },
      {
        path: 'room-transfer-request',
        component: RoomTransferRequestComponent
      },
      {
        path: 'renew-contract-request',
        component: RenewContractRequestComponent
      },
      {
        path: 'cancle-contract-request',
        component: CancleContracRequestComponent
      },
      {
        path: 'room-management',
        component: RoomManagementComponent
      },
      {
        path: 'staff-management',
        component: StaffComponent
      },
      {
        path: 'update-fee',
        component: UpdateFeeComponent
      },
      {
        path: 'equipment-management',
        component: EquipmentComponent
      },
      {
        path: 'student-managerment-staff',
        component: StudentComponent
      },
      {
        path: 'equipment-report',
        component: EquipmentReportComponent
      },
      {
        path: 'issue-ticket',
        component: IssueTicketComponent
      },
      {
        path: 'create-news',
        component: CreateNewComponent
      },
      {
        path: 'approved-request',
        component: ApprovedRequestComponent
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
