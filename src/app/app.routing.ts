import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ArrageComponent } from './views/student/arrage/arrage.component';
import { StudentManagermentComponent } from './views/student/student-managerment/student-managerment.component';
import { SetRequestDateComponent } from './views/request/set-request-date/set-request-date.component';
import { RoomBookingRequestComponent } from './views/request/room-booking-request/room-booking-request.component';
import { RoomTransferRequestComponent } from './views/request/room-transfer-request/room-transfer-request.component';
import { RenewContractRequestComponent } from './views/request/renew-contract-request/renew-contract-request.component';
import { CancleContracRequestComponent } from './views/request/cancle-contrac-request/cancle-contrac-request.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RoomManagementComponent } from './views/room/room-management/room-management.component';

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
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
