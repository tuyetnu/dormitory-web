import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import * as $ from 'jquery';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
} from '@angular/material';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,

} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ArrageComponent } from './views/admin/student/arrage/arrage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentManagermentComponent } from './views/admin/student/student-managerment/student-managerment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { SetRequestDateComponent } from './views/staff/request/set-request-date/set-request-date.component'; 
import {AngularDateTimePickerModule} from 'angular2-datetimepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { RoomBookingRequestComponent } from './views/staff/request/room-booking-request/room-booking-request.component';
import { RoomTransferRequestComponent } from './views/staff/request/room-transfer-request/room-transfer-request.component';
import { RenewContractRequestComponent } from './views/staff/request/renew-contract-request/renew-contract-request.component';
import { CancleContracRequestComponent } from './views/staff/request/cancle-contrac-request/cancle-contrac-request.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { RoomManagementComponent } from './views/admin/room/room-management/room-management.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { LogoutComponent } from './views/logout/logout.component';
import { StaffComponent } from './views/admin/staff/staff.component';
import { UpdateFeeComponent } from './views/admin/update-fee/update-fee.component';
import { EquipmentComponent } from './views/admin/equipment/equipment.component';
import { StudentComponent } from './views/staff/student/student.component';
import { EquipmentReportComponent } from './views/staff/equipment-report/equipment-report.component';
import { IssueTicketComponent } from './views/staff/issue-ticket/issue-ticket.component';
import { CreateNewComponent } from './views/admin/create-new/create-new.component';
import { ApprovedRequestComponent } from './views/admin/approved-request/approved-request.component';
import { BuildingManagementComponent } from './views/admin/building-management/building-management.component';
import { RoomMissEquipmentComponent } from './views/admin/room-miss-equipment/room-miss-equipment.component';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('617553831115-9gu00bnls8ovuie9djvtvc5it444pst1.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  imports: [
    SlideshowModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatIconModule, MatListModule, MatStepperModule,
    MatInputModule,
    NgbModule,
    NgxPaginationModule,
    AngularDateTimePickerModule,
    AngularMultiSelectModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ArrageComponent,
    StudentManagermentComponent,
    SetRequestDateComponent,
    RoomBookingRequestComponent,
    RoomTransferRequestComponent,
    RenewContractRequestComponent,
    CancleContracRequestComponent,
    DashboardComponent,
    RoomManagementComponent,
    LogoutComponent,
    StaffComponent,
    UpdateFeeComponent,
    EquipmentComponent,
    StudentComponent,
    EquipmentReportComponent,
    IssueTicketComponent,
    CreateNewComponent,
    ApprovedRequestComponent,
    BuildingManagementComponent,
    RoomMissEquipmentComponent
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
