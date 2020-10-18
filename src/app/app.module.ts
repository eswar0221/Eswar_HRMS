import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TransactionListComponent } from './Admin/transaction-list/transaction-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule, MatSelectModule, MatTreeModule, MatTooltipModule, MatToolbarModule,
   MatTabsModule, MatTableModule, MatDatepickerModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, 
   MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatIconModule, 
   MatGridListModule, MatInputModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
    MatSortModule, MatRippleModule, MatRadioModule, MatProgressSpinnerModule, MatProgressBarModule, MatPaginatorModule, MatNativeDateModule, 
    MatMenuModule, MatListModule } from '@angular/material';
import { QRCodeModule } from 'angularx-qrcode';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarUtils as BaseCalendarUtils } from 'angular-calendar';
import { HttpClientModule } from '@angular/common/http';
import { EmpregformComponent } from './admin/empregform/empregform.component';
import {DataTableModule} from "angular-6-datatable";
// import { FilterPipe } from './filter.pipe';
import { EditEmpdataComponent } from './Admin/edit-empdata/edit-empdata.component';
import { LeaverequestComponent } from './Admin/leaverequest/leaverequest.component';
import { LeavesComponent } from './Admin/leaves/leaves.component';
// import { DemoComponent } from './Admin/demo/component';
// import {  DemoUtilsComponent } from './Admin/demo-utils/demo-utils.component';
import { AddclientComponent } from './Admin/addclient/addclient.component';
import { ContactComponent } from './Admin/contact/contact.component';
import { AddcontactComponent } from './Admin/addcontact/addcontact.component';
import { EditClientComponent } from './Admin/clients/edit-client/edit-client.component';
import { UsersComponent } from './Admin/users/users.component';
import { AssetsComponent } from './Admin/assets/assets.component';
import { ActivitiesComponent } from './Admin/activities/activities.component';
// import { EventsComponent } from './Admin/events/events.component';
import { AdduserComponent } from './Admin/adduser/adduser.component';
import { AddassetsComponent } from './Admin/addassets/addassets.component';
// import { EventComponent } from './Admin/event/event.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ClientsComponent } from './Admin/clients/clients.component';
import { EventsComponent } from "./Admin/events/events.component";

import {EventscalenderComponent  } from "./Admin/events/eventscalender/eventscalender.component";
// import { DemoUtilsModule } from "./Admin/demo-utils/module";
import { TicketsComponent } from './Admin/tickets/tickets.component';
// import { ProfileComponent } from './Admin/profile/profile.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { AddticketsComponent } from './Admin/addtickets/addtickets.component';
import { EditticketsComponent } from './Admin/edittickets/edittickets.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditcontactComponent } from './Admin/editcontact/editcontact.component';
import { ProfilesComponent } from './Admin/profiles/profiles.component';
import { EditUsersComponent } from './Admin/edit-users/edit-users.component';
import { DepartmentsComponent } from './Admin/departments/departments.component';
import { EditDepartmentComponent } from './Admin/departments/edit-department/edit-department.component';
import { EditLeavesComponent } from './Admin/leaves/edit-leaves/edit-leaves.component';
import { HolidaysComponent } from './Admin/holidays/holidays.component';
import { DesignationsComponent } from './Admin/designations/designations.component';
import { ProjectsComponent } from './Admin/projects/projects.component';
import { EditHolidaysComponent } from './Admin/holidays/edit-holidays/edit-holidays.component';
import { AddHolidaysComponent } from './Admin/holidays/add-holidays/add-holidays.component';
import { EditDesignationsComponent } from './Admin/designations/edit-designations/edit-designations.component';
import { AddDesignationsComponent } from './Admin/designations/add-designations/add-designations.component';
import { LeadsComponent } from './Admin/leads/leads.component';
import { EditAssetsComponent } from './Admin/assets/edit-assets/edit-assets.component';
import { ManageLoginComponent } from './Admin/manage-login/manage-login.component';
import { ManageRegisterComponent } from './Admin/manage-register/manage-register.component';
import { ManageForgotPassComponent } from './Admin/manage-forgot-pass/manage-forgot-pass.component';
import { JobsComponent } from './Admin/jobs/jobs.component';
import { ApplyJobsComponent } from './Admin/apply-jobs/apply-jobs.component';
import { ViewJobsComponent } from './Admin/view-jobs/view-jobs.component';
import { ManagedJobsComponent } from './Admin/managed-jobs/managed-jobs.component';
import { AppliedJobsComponent } from './Admin/applied-jobs/applied-jobs.component';
import { AddNewJobsComponent } from './Admin/managed-jobs/add-new-jobs/add-new-jobs.component';
import { EditManagedjobsComponent } from './Admin/managed-jobs/edit-managedjobs/edit-managedjobs.component';
import { AddprojectsComponent } from './Admin/projects/addprojects/addprojects.component';
import { EditprojectsComponent } from './Admin/projects/editprojects/editprojects.component';
// import { PayslipComponent } from './Admin/payslip/payslip.component';
import { EmployeeSalaryComponent } from './Admin/employee-salary/employee-salary.component';
// import { AddEmployeeSalaryComponent } from './Admin/add-employee-salary/add-employee-salary.component';
import { EditEmployeeSalaryComponent } from './Admin/employee-salary/edit-employee-salary/edit-employee-salary.component';
import { AddEmployeeSalaryComponent } from './Admin/employee-salary/add-employee-salary/add-employee-salary.component';
import { PayslipComponent } from './Admin/employee-salary/payslip/payslip.component';
import { EmpPayslipComponent } from './Admin/emp-payslip/emp-payslip.component';
import { TimingSheetComponent } from './Admin/timing-sheet/timing-sheet.component';
import { EditTimingSheetComponent } from './Admin/edit-timing-sheet/edit-timing-sheet.component';
import { AddTimingSheetComponent } from './Admin/add-timing-sheet/add-timing-sheet.component';
import { DateFilterPipe } from './Admin/add-timing-sheet/date-filter.pipe';
import {  DatePipe } from '@angular/common';
import { ExpenseReportComponent } from './Admin/expense-report/expense-report.component';
import { InvoiceReportComponent } from './Admin/invoice-report/invoice-report.component';
import { EstimatesComponent } from './Admin/estimates/estimates.component';
import { AddEstimatesComponent } from './Admin/estimates/add-estimates/add-estimates.component';
import { EditEstimatesComponent } from './Admin/estimates/edit-estimates/edit-estimates.component';
import { InvoicesComponent } from './Admin/invoices/invoices.component';
import { PaymentsComponent } from './Admin/payments/payments.component';
import { ExpensesComponent } from './Admin/expenses/expenses.component';
import { ProvidentFundComponent } from './Admin/provident-fund/provident-fund.component';
import { TaxesComponent } from './Admin/taxes/taxes.component';
import { EditTaxesComponent } from './Admin/taxes/edit-taxes/edit-taxes.component';
import { AddTaxesComponent } from './Admin/taxes/add-taxes/add-taxes.component';
import { AddProvidentFundComponent } from './Admin/provident-fund/add-provident-fund/add-provident-fund.component';
import { EditProvidentFundComponent } from './Admin/provident-fund/edit-provident-fund/edit-provident-fund.component';
import { AddExpensesComponent } from './Admin/expenses/add-expenses/add-expenses.component';
import { EditExpensesComponent } from './Admin/expenses/edit-expenses/edit-expenses.component';
import { AddInvoicesComponent } from './Admin/invoices/add-invoices/add-invoices.component';
import { EditInvoicesComponent } from './Admin/invoices/edit-invoices/edit-invoices.component';
import { EmailComponent } from './Admin/email/email.component';
import { ViewEmailComponent } from './Admin/email/view-email/view-email.component';
import { FlatpickrModule} from 'angularx-flatpickr'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ResetPasswordComponent } from './Admin/manage-forgot-pass/reset-password/reset-password.component';
import { EditProfileComponent } from './Admin/profiles/edit-profile/edit-profile.component';
import { EditProfilesComponent } from './Admin/profile/edit-profiles/edit-profiles.component';
import { DummmyComponent } from './Admin/dummmy/dummmy.component';
import { AdddummmyComponent } from './Admin/dummmy/adddummmy/adddummmy.component';
import { EditdummmyComponent } from './Admin/dummmy/editdummmy/editdummmy.component';
import { SearchPipe } from './search.pipe';
import { HrManComponent } from './Admin/hr-man/hr-man.component';
import { AddHrManagerComponent } from './Admin/hr-man/add-hr-manager/add-hr-manager.component';
import { EditHrManagerComponent } from './Admin/hr-man/edit-hr-manager/edit-hr-manager.component';
import { PermissionsComponent } from './Admin/permissions/permissions.component';
import { HrmanprofileComponent } from './Admin/hrmanprofile/hrmanprofile.component';
import { EditHrmanprofileComponent } from './Admin/hrmanprofile/edit-hrmanprofile/edit-hrmanprofile.component';
import { TasksComponent } from './Admin/tasks/tasks.component';
import { AddTasksComponent } from './Admin/tasks/add-tasks/add-tasks.component';
import { EditTasksComponent } from './Admin/tasks/edit-tasks/edit-tasks.component';
import { EmpViewTasksComponent } from './Admin/emp-view-tasks/emp-view-tasks.component';
import { EmpViewsLeavesComponent } from './Admin/leaverequest/emp-views-leaves/emp-views-leaves.component';
import { EmpDashboardComponent } from './Admin/emp-dashboard/emp-dashboard.component';
import { MultiSelectComponent } from './Admin/projects/addprojects/multi-select/multi-select.component';
// import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import { NgSelectModule ,  } from '@ng-select/ng-select';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { HrManDashboardComponent } from './Admin/hr-man-dashboard/hr-man-dashboard.component';
import { HrLeavesComponent } from './Admin/hr-leaves/hr-leaves.component';
import { AddHrLeavesComponent } from './Admin/hr-leaves/add-hr-leaves/add-hr-leaves.component';
import { MainDashboardComponent } from './Admin/main-dashboard/main-dashboard.component';
import { EmpViewticketsComponent } from './Admin/tickets/emp-viewtickets/emp-viewtickets.component';
import { OrganisationComponent } from './Admin/organisation/organisation.component';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { EmpviewEditTasksComponent } from './Admin/emp-view-tasks/empview-edit-tasks/empview-edit-tasks.component';
import { ManviewleavesComponent } from './Admin/manviewleaves/manviewleaves.component';
import { EmpBankAcComponent } from './Admin/emp-bank-ac/emp-bank-ac.component';
import { EditEmpBankComponent } from './Admin/emp-bank-ac/edit-emp-bank/edit-emp-bank.component';
import { AddEmpBankComponent } from './Admin/emp-bank-ac/add-emp-bank/add-emp-bank.component';
import { HrBankComponent } from './Admin/hr-bank/hr-bank.component';
import { EditHrBankComponent } from './Admin/edit-hr-bank/edit-hr-bank.component';
import { AddHrBankComponent } from './Admin/add-hr-bank/add-hr-bank.component';
import { HrSalaryComponent } from './Admin/employee-salary/hr-salary/hr-salary.component';
import { AddhrsalaryComponent } from './Admin/employee-salary/addhrsalary/addhrsalary.component';
import { HrPayslipComponent } from './Admin/employee-salary/hr-payslip/hr-payslip.component';
import { NumberFormatPipe } from './number-format.pipe';
import { EmpExpenComponent } from './Admin/expenses/emp-expen/emp-expen.component';
import { ViewExpeBillComponent } from './Admin/expenses/view-expe-bill/view-expe-bill.component';
import { EmpChanePassComponent } from './Admin/manage-forgot-pass/emp-chane-pass/emp-chane-pass.component';
 import{ NgpSortModule } from 'ngp-sort-pipe';
import { EmpRegAllComponent } from './Admin/emp-reg-all/emp-reg-all.component';
import { EmpviewallComponent } from './Admin/empviewall/empviewall.component';
import { HrApplyViewLeavesComponent } from './Admin/leaverequest/hr-apply-view-leaves/hr-apply-view-leaves.component';
import { AllHRLeavesComponent } from './Admin/leaverequest/all-hr-leaves/all-hr-leaves.component';
import { HRApplyLeRequestComponent } from './Admin/leaverequest/h-r-apply-le-request/h-r-apply-le-request.component';
import { ExpInvoiceComponent } from './Admin/expenses/exp-invoice/exp-invoice.component';
import { ShoppingComponent } from './Admin/shopping/shopping.component';
import { AddshoppingComponent } from './Admin/addshopping/addshopping.component'

// import { ChartsModule } from 'ng2-charts';
// NG_SELECT_DEFAULT_CONFIG
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    NavbarComponent,
    TransactionListComponent,
    EmpregformComponent,
    EditEmpdataComponent,
    LeaverequestComponent,
    LeavesComponent,
    ClientsComponent,
    AddclientComponent,
    ContactComponent,
    AddcontactComponent,
    EditClientComponent,
    UsersComponent,
    AssetsComponent,
    ActivitiesComponent,
    // EventsComponent,
    AdduserComponent,
    AddassetsComponent,
    TicketsComponent,
    AddticketsComponent,
    EditticketsComponent,
    EditcontactComponent,
    ProfilesComponent,
    EditUsersComponent,
    DepartmentsComponent,
    EditDepartmentComponent,
    EditLeavesComponent,
    HolidaysComponent,
    DesignationsComponent,
    ProjectsComponent,
    EditHolidaysComponent,
    AddHolidaysComponent,
    EditDesignationsComponent,
    AddDesignationsComponent,
    LeadsComponent,
    EditAssetsComponent,
    ManageLoginComponent,
    ManageRegisterComponent,
    ManageForgotPassComponent,
    JobsComponent,
    ApplyJobsComponent,
    ViewJobsComponent,
    ManagedJobsComponent,
    AppliedJobsComponent,
    AddNewJobsComponent,
    EditManagedjobsComponent,
    AddprojectsComponent,
    EditprojectsComponent,
    PayslipComponent,
    EmployeeSalaryComponent,
    AddEmployeeSalaryComponent,
    EditEmployeeSalaryComponent,
    EmpPayslipComponent,
    TimingSheetComponent,
    EditTimingSheetComponent,
    AddTimingSheetComponent,
    DateFilterPipe,
    ExpenseReportComponent,
    InvoiceReportComponent,
    EstimatesComponent,
    AddEstimatesComponent,
    EditEstimatesComponent,
    InvoicesComponent,
    PaymentsComponent,
    ExpensesComponent,
    ProvidentFundComponent,
    TaxesComponent,
    EditTaxesComponent,
    AddTaxesComponent,
    AddProvidentFundComponent,
    EditProvidentFundComponent,
    AddExpensesComponent,
    EditExpensesComponent,
    AddInvoicesComponent,
    EditInvoicesComponent,
    EmailComponent,
    ViewEmailComponent,EventscalenderComponent,EventsComponent, ResetPasswordComponent, EditProfileComponent, EditProfilesComponent, DummmyComponent, 
    AdddummmyComponent, EditdummmyComponent, SearchPipe, HrManComponent, AddHrManagerComponent, EditHrManagerComponent, PermissionsComponent, HrmanprofileComponent,
     EditHrmanprofileComponent, TasksComponent, AddTasksComponent, EditTasksComponent, EmpViewTasksComponent, EmpViewsLeavesComponent, EmpDashboardComponent,
      MultiSelectComponent,
      HrManDashboardComponent,
      HrLeavesComponent,
      AddHrLeavesComponent,
      MainDashboardComponent,
      EmpViewticketsComponent,
      OrganisationComponent,
      EmpviewEditTasksComponent,
      ManviewleavesComponent,
      EmpBankAcComponent,
      EditEmpBankComponent,
      AddEmpBankComponent,
      HrBankComponent,
      EditHrBankComponent,
      AddHrBankComponent,
      HrSalaryComponent,
      AddhrsalaryComponent,
      HrPayslipComponent,
      NumberFormatPipe,
      EmpExpenComponent,
      ViewExpeBillComponent,
      EmpChanePassComponent,
      EmpRegAllComponent,
      EmpviewallComponent,
      HrApplyViewLeavesComponent,
      AllHRLeavesComponent,
      HRApplyLeRequestComponent,
      ExpInvoiceComponent,
      ShoppingComponent,
      AddshoppingComponent,
    // EventComponent,
    
    // ProfileComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    // DateAdapter,
    Ng2SearchPipeModule,     ToastrModule.forRoot({
      timeOut: 8000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ToastContainerModule,
    NgbModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatStepperModule,NgpSortModule,
    ReactiveFormsModule,
    QRCodeModule,
    HttpClientModule,AngularMultiSelectModule, 
    // NgSelectModule,    

    DataTableModule,    FullCalendarModule,    CalendarModule,NgDatepickerModule,    A11yModule,
    // ClipboardModule,
    CdkStepperModule,    CdkTableModule,    CdkTreeModule,
    // DragDropModule,   
    MatAutocompleteModule,    MatBadgeModule,    MatBottomSheetModule,    MatButtonModule,    MatButtonToggleModule,    MatCardModule,    MatCheckboxModule,    MatChipsModule,    MatStepperModule,
    MatDatepickerModule,    MatDialogModule,    MatDividerModule,    MatExpansionModule,    MatGridListModule,    MatIconModule,    MatInputModule,    MatListModule,
    MatMenuModule,    MatNativeDateModule,    MatPaginatorModule,
    MatProgressBarModule,    MatProgressSpinnerModule,    MatRadioModule,   MatRippleModule,    MatSelectModule,    MatSidenavModule,    MatSliderModule,    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,    MatTableModule,
    MatTabsModule,    MatToolbarModule,    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  providers:  [ DatePipe,
  //   {
  //     provide: NG_SELECT_DEFAULT_CONFIG,
  //     useValue: {
  //         notFoundText: 'Custom not found'
  //     }
  // }
    // { provide: SELECTION_MODEL_FACTORY, useValue: <SelectionModelFactory>CustomSelectionFactory }
    // {
    //   provide: NG_SELECT_DEFAULT_CONFIG,
    //   useValue: {
    //       placeholder: 'Select item',
    //       notFoundText: 'Items not found',
    //       addTagText: 'Add item',
    //       typeToSearchText: 'Type to search',
    //       loadingText: 'Loading...',
    //       clearAllText: 'Clear all'
    //   }
    // }
  ],
  bootstrap: [AppComponent],
  // exports: [
  //   MultiSelectComponent,

  // ]
})
export class AppModule { }
