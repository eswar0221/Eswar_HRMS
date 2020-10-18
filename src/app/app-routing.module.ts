import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Authentication/login/login.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { TransactionListComponent } from './Admin/transaction-list/transaction-list.component';
import { EmpregformComponent } from './admin/empregform/empregform.component';
import { EditEmpdataComponent } from './Admin/edit-empdata/edit-empdata.component';
import { LeaverequestComponent } from './Admin/leaverequest/leaverequest.component';
import { LeavesComponent } from './Admin/leaves/leaves.component';
import { ClientsComponent } from './Admin/clients/clients.component';
import { AddclientComponent } from './Admin/addclient/addclient.component';
import { ContactComponent } from './Admin/contact/contact.component';
import { AddcontactComponent } from './Admin/addcontact/addcontact.component';
import { EditClientComponent } from './Admin/clients/edit-client/edit-client.component';
// import { EventsComponent } from './Admin/events/events.component';
import { AssetsComponent } from './Admin/assets/assets.component';
import { UsersComponent } from './Admin/users/users.component';
import { ActivitiesComponent } from './Admin/activities/activities.component';
import { ProfileComponent } from './Admin/profile/profile.component';
import { AdduserComponent } from './Admin/adduser/adduser.component';
import { AddassetsComponent } from './Admin/addassets/addassets.component';
// import { EventComponent } from './Admin/event/event.component';

import { TicketsComponent } from './Admin/tickets/tickets.component';
import { AddticketsComponent } from './Admin/addtickets/addtickets.component';
import { EditticketsComponent } from './Admin/edittickets/edittickets.component';
import { EditcontactComponent } from './Admin/editcontact/editcontact.component';
import { ProfilesComponent } from './Admin/profiles/profiles.component';
import { EditUsersComponent } from './Admin/edit-users/edit-users.component';
import { DepartmentsComponent } from './Admin/departments/departments.component';
import { EditDepartmentComponent } from './Admin/departments/edit-department/edit-department.component';
import { EditLeavesComponent } from './Admin/leaves/edit-leaves/edit-leaves.component';
import { AddHolidaysComponent } from './Admin/holidays/add-holidays/add-holidays.component';
import { EditHolidaysComponent } from './Admin/holidays/edit-holidays/edit-holidays.component';
import { HolidaysComponent } from './Admin/holidays/holidays.component';
import { DesignationsComponent } from './Admin/designations/designations.component';
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
import { ProjectsComponent } from './Admin/projects/projects.component';
import { AddprojectsComponent } from './Admin/projects/addprojects/addprojects.component';
import { EditprojectsComponent } from './Admin/projects/editprojects/editprojects.component';



import { EmpPayslipComponent } from './Admin/emp-payslip/emp-payslip.component';


import { AddEmployeeSalaryComponent } from './Admin/employee-salary/add-employee-salary/add-employee-salary.component';
import { EditEmployeeSalaryComponent } from './Admin/employee-salary/edit-employee-salary/edit-employee-salary.component';
import { EmployeeSalaryComponent } from './Admin/employee-salary/employee-salary.component';
import { PayslipComponent } from './Admin/employee-salary/payslip/payslip.component';
import { TimingSheetComponent } from './Admin/timing-sheet/timing-sheet.component';
import { EditTimingSheetComponent } from './Admin/edit-timing-sheet/edit-timing-sheet.component';
import { AddTimingSheetComponent } from './Admin/add-timing-sheet/add-timing-sheet.component';
import { EmailComponent } from './Admin/email/email.component';
import { ViewEmailComponent } from './Admin/email/view-email/view-email.component';
import { EstimatesComponent } from './Admin/estimates/estimates.component';
import { EditEstimatesComponent } from './Admin/estimates/edit-estimates/edit-estimates.component';
import { AddEstimatesComponent } from './Admin/estimates/add-estimates/add-estimates.component';
import { InvoicesComponent } from './Admin/invoices/invoices.component';
import { AddInvoicesComponent } from './Admin/invoices/add-invoices/add-invoices.component';
import { EditInvoicesComponent } from './Admin/invoices/edit-invoices/edit-invoices.component';
import { ExpenseReportComponent } from './Admin/expense-report/expense-report.component';
import { ExpensesComponent } from './Admin/expenses/expenses.component';
import { AddExpensesComponent } from './Admin/expenses/add-expenses/add-expenses.component';
import { EditExpensesComponent } from './Admin/expenses/edit-expenses/edit-expenses.component';
import { PaymentsComponent } from './Admin/payments/payments.component';
import { ProvidentFundComponent } from './Admin/provident-fund/provident-fund.component';
import { AddProvidentFundComponent } from './Admin/provident-fund/add-provident-fund/add-provident-fund.component';
import { EditProvidentFundComponent } from './Admin/provident-fund/edit-provident-fund/edit-provident-fund.component';
import { InvoiceReportComponent } from './Admin/invoice-report/invoice-report.component';
import { TaxesComponent } from './Admin/taxes/taxes.component';
import { AddTaxesComponent } from './Admin/taxes/add-taxes/add-taxes.component';
import { EditTaxesComponent } from './Admin/taxes/edit-taxes/edit-taxes.component';
import { EventscalenderComponent } from './Admin/events/eventscalender/eventscalender.component';
import { EventsComponent } from './Admin/events/events.component';
import { ResetPasswordComponent } from './Admin/manage-forgot-pass/reset-password/reset-password.component';
import { EditProfilesComponent } from './Admin/profile/edit-profiles/edit-profiles.component';
import { EditProfileComponent } from './Admin/profiles/edit-profile/edit-profile.component';
import { DummmyComponent } from './Admin/dummmy/dummmy.component';
import { EditdummmyComponent } from './Admin/dummmy/editdummmy/editdummmy.component';
import { AdddummmyComponent } from './Admin/dummmy/adddummmy/adddummmy.component';
import { EditHrManagerComponent } from './Admin/hr-man/edit-hr-manager/edit-hr-manager.component';
import { AddHrManagerComponent } from './Admin/hr-man/add-hr-manager/add-hr-manager.component';
import { HrManComponent } from './Admin/hr-man/hr-man.component';
import { PermissionsComponent } from './Admin/permissions/permissions.component';
import { HrmanprofileComponent } from './Admin/hrmanprofile/hrmanprofile.component';
import { TasksComponent } from './Admin/tasks/tasks.component';
import { AddTasksComponent } from './Admin/tasks/add-tasks/add-tasks.component';
import { EditTasksComponent } from './Admin/tasks/edit-tasks/edit-tasks.component';
import { EmpViewTasksComponent } from './Admin/emp-view-tasks/emp-view-tasks.component';
import { EmpViewsLeavesComponent } from './Admin/leaverequest/emp-views-leaves/emp-views-leaves.component';
import { EmpDashboardComponent } from './Admin/emp-dashboard/emp-dashboard.component';
import { HrManDashboardComponent } from './Admin/hr-man-dashboard/hr-man-dashboard.component';
import { HrLeavesComponent } from './Admin/hr-leaves/hr-leaves.component';
import { AddHrLeavesComponent } from './Admin/hr-leaves/add-hr-leaves/add-hr-leaves.component';
import { MainDashboardComponent } from './Admin/main-dashboard/main-dashboard.component';
import { EmpViewticketsComponent } from './Admin/tickets/emp-viewtickets/emp-viewtickets.component';
import { EmpviewEditTasksComponent } from './Admin/emp-view-tasks/empview-edit-tasks/empview-edit-tasks.component';
import { ManviewleavesComponent } from './Admin/manviewleaves/manviewleaves.component';
import { EmpBankAcComponent } from './Admin/emp-bank-ac/emp-bank-ac.component';
import { AddEmpBankComponent } from './Admin/emp-bank-ac/add-emp-bank/add-emp-bank.component';
import { EditEmpBankComponent } from './Admin/emp-bank-ac/edit-emp-bank/edit-emp-bank.component';
import { HrBankComponent } from './Admin/hr-bank/hr-bank.component';
import { EditHrBankComponent } from './Admin/edit-hr-bank/edit-hr-bank.component';
import { AddHrBankComponent } from './Admin/add-hr-bank/add-hr-bank.component';
import { HrPayslipComponent } from './Admin/employee-salary/hr-payslip/hr-payslip.component';
import { HrSalaryComponent } from './Admin/employee-salary/hr-salary/hr-salary.component';
import { AddhrsalaryComponent } from './Admin/employee-salary/addhrsalary/addhrsalary.component';
import { EmpExpenComponent } from './Admin/expenses/emp-expen/emp-expen.component';
import { ViewExpeBillComponent } from './Admin/expenses/view-expe-bill/view-expe-bill.component';
import { EmpRegAllComponent } from './Admin/emp-reg-all/emp-reg-all.component';
import { EmpviewallComponent } from './Admin/empviewall/empviewall.component';
import { HrApplyViewLeavesComponent } from './Admin/leaverequest/hr-apply-view-leaves/hr-apply-view-leaves.component';
import { AllHRLeavesComponent } from './Admin/leaverequest/all-hr-leaves/all-hr-leaves.component';
import { HRApplyLeRequestComponent } from './Admin/leaverequest/h-r-apply-le-request/h-r-apply-le-request.component';
import { ExpInvoiceComponent } from './Admin/expenses/exp-invoice/exp-invoice.component';
import { ShoppingComponent } from './Admin/shopping/shopping.component';
import { AddshoppingComponent } from './Admin/addshopping/addshopping.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

{
  path: '',
  component: NavbarComponent,
  children: [    
    {path : 'Admin/admin-dashboard', component:AdminDashboardComponent},
    {path : 'Admin/transaction-list', component:TransactionListComponent},
    {path : 'Admin/employee-reg', component:EmpregformComponent},
    {path : 'edit-empdata', component:EditEmpdataComponent},
    {path : 'Admin/addleaverequest', component:LeaverequestComponent},
    {path : 'Admin/leaves', component:LeavesComponent},
    {path:'Admin/clients',component:ClientsComponent},
    {path:'Admin/addclient',component:AddclientComponent},

    {path:'Admin/contact',component:ContactComponent},
    {path:'Admin/editcontact',component:EditcontactComponent},

    {path:'Admin/adduser',component:AdduserComponent},
    {path:'Admin/edittickets',component:EditticketsComponent},
    // {path:'Admin/event',component:EventComponent},
    // {path:'Admin/events',component:EventsComponent},
    
    {path:'Admin/profile',component:ProfilesComponent},

    {path:'Admin/assets',component:AssetsComponent},
  

    {path:'Admin/addassets',component:AddassetsComponent},
    {path:'Admin/tickets',component:TicketsComponent},
    {path:'Admin/addtickets',component:AddticketsComponent},
   
    {path:'Admin/users',component:UsersComponent},
    {path:'Admin/activities',component:ActivitiesComponent},

    {path:'Admin/editclient',component:EditClientComponent},

    {path:'Admin/addcontact',component:AddcontactComponent},
    {path:'Admin/editusers',component:EditUsersComponent},
    {path:'Admin/department',component:DepartmentsComponent},
    {path:'Admin/editdepartment',component:EditDepartmentComponent},
    {path:'Admin/editleaves',component:EditLeavesComponent},
    {path:'Admin/addholidays',component:AddHolidaysComponent},
    {path:'Admin/editholidays',component:EditHolidaysComponent},
    {path:'Admin/holidays',component:HolidaysComponent},

    

    {path:'Admin/designations',component:DesignationsComponent},

    {path:'Admin/editdesignations',component:EditDesignationsComponent},
    {path:'Admin/adddesignations',component:AddDesignationsComponent},

    {path:'Admin/leads',component:LeadsComponent},

    // {path:'Admin/assets',component:LeadsComponent},
    {path:'Admin/editassets',component:EditAssetsComponent},
     {path:'Admin/manlogin',component:ManageLoginComponent},
     {path:'Admin/manregister',component:ManageRegisterComponent},
     {path:'Admin/manpassword',component:ManageForgotPassComponent},
   
     {path:'Admin/jobs',component:JobsComponent},
    {path:'Admin/applyjobs',component:ApplyJobsComponent},
    {path:'Admin/viewjobs',component:ViewJobsComponent},

    {path:'Admin/managedjobs',component:ManagedJobsComponent},
    {path:'Admin/appliedjobs',component:AppliedJobsComponent},
    {path:'Admin/addnewjobs',component:AddNewJobsComponent},

    {path:'Admin/editmanagedjobs',component:EditManagedjobsComponent},

    {path:'Admin/projects',component:ProjectsComponent},
    {path:'Admin/addprojects',component:AddprojectsComponent},
    {path:'Admin/editprojects',component:EditprojectsComponent},

    {path:'Admin/emppayslip',component:EmpPayslipComponent},
    {path:'Admin/addempsal',component:AddEmployeeSalaryComponent},
    {path:'Admin/editempsal',component:EditEmployeeSalaryComponent},
    {path:'Admin/empsal',component:EmployeeSalaryComponent},
    {path:'Admin/payslip',component:PayslipComponent},

    {path:'Admin/timingsheet',component:TimingSheetComponent},
    {path:'Admin/edittimingsheet',component:EditTimingSheetComponent},
    {path:'Admin/addtimingsheet',component:AddTimingSheetComponent},

    {path:'Admin/email',component:EmailComponent},
    {path:'Admin/viewemail',component:ViewEmailComponent},
    
    {path:'Admin/estimates',component:EstimatesComponent},
    {path:'Admin/editestimates',component:EditEstimatesComponent},
    {path:'Admin/addestimates',component:AddEstimatesComponent},
    {path:'Admin/invoices',component:InvoicesComponent},
    {path:'Admin/addinvoices',component:AddInvoicesComponent},
    {path:'Admin/editinvoices',component:EditInvoicesComponent},
    {path:'Admin/expensereport',component:ExpenseReportComponent},
    {path:'Admin/invoicereport',component:InvoiceReportComponent},

    {path:'Admin/expenses',component:ExpensesComponent},
    {path:'Admin/addexpenses',component:AddExpensesComponent},
    {path:'Admin/editexpenses',component:EditExpensesComponent},
    
    {path:'Admin/Payments',component:PaymentsComponent},
    {path:'Admin/pf',component:ProvidentFundComponent},
    {path:'Admin/addpf',component:AddProvidentFundComponent},
    {path:'Admin/editpf',component:EditProvidentFundComponent},

    {path:'Admin/tax',component:TaxesComponent},
    {path:'Admin/addtax',component:AddTaxesComponent},
    {path:'Admin/edittax',component:EditTaxesComponent},
    {path:'Admin/events',component:EventscalenderComponent},
    {path:'Admin/event',component:EventsComponent},
    {path:'Admin/resetpass',component:ResetPasswordComponent},
    {path:'Admin/editprofile',component:EditProfilesComponent},
    {path:'Admin/editprofiles',component:EditProfileComponent},
    {path:'Admin/dummy',component:DummmyComponent},
    {path:'Admin/editdummy',component:EditdummmyComponent},
    {path:'Admin/adddummy',component:AdddummmyComponent},
    {path:'Admin/edithrman',component:EditHrManagerComponent},
    {path:'Admin/addhrman',component:AddHrManagerComponent},
    {path:'Admin/hrman',component:HrManComponent},

    {path:'Admin/permissions',component:PermissionsComponent},
    {path:'Admin/hrmanprofile',component:HrmanprofileComponent},
    {path:'Admin/tasks',component:TasksComponent},
    {path:'Admin/addtasks',component:AddTasksComponent},
    {path:'Admin/edittasks',component:EditTasksComponent},
    {path:'Admin/empviewtasks',component:EmpViewTasksComponent},
    {path:'Admin/empviewleaves',component:EmpViewsLeavesComponent},
    {path:'Admin/empDashboard',component:EmpDashboardComponent},
    {path:'Admin/hrmanDashboard',component:HrManDashboardComponent},
    {path:'Admin/hrleaves',component:HrLeavesComponent},
    {path:'Admin/addhrleaves',component:AddHrLeavesComponent},
    {path:'Admin/maindashboard',component:MainDashboardComponent},
    {path:'Admin/empviewtickets',component:EmpViewticketsComponent},

    {path:'Admin/empedittasks',component:EmpviewEditTasksComponent},
    {path:'Admin/manviewleaves',component:ManviewleavesComponent},
    {path:'Admin/empbank',component:EmpBankAcComponent},
    {path:'Admin/addempbank',component:AddEmpBankComponent},
    {path:'Admin/editempbank',component:EditEmpBankComponent},
    {path:'Admin/hrbank',component:HrBankComponent},
    {path:'Admin/edithrbank',component:EditHrBankComponent},
    {path:'Admin/addhrbank',component:AddHrBankComponent},

    {path:'Admin/hrsalary',component:HrSalaryComponent},
    {path:'Admin/hrpayslip',component:HrPayslipComponent},
    {path:'Admin/addhrsalary',component:AddhrsalaryComponent},
    {path:'Admin/empexpensives',component:EmpExpenComponent},
    {path:'Admin/expinvoice',component:ExpInvoiceComponent},

    {path:'Admin/viewexpbill',component:ViewExpeBillComponent},
    {path:'Admin/empregall',component:EmpRegAllComponent},
    {path:'Admin/empviewall',component:EmpviewallComponent},
    

    {path:'Admin/hrapplyleaves',component:HrApplyViewLeavesComponent},
    {path:'Admin/Leaves_Hr_all',component:AllHRLeavesComponent},
    {path:'Admin/hrleaverequest',component:HRApplyLeRequestComponent},
    {path:'Admin/shopping',component:ShoppingComponent},
    {path:'Admin/addshopping',component:AddshoppingComponent},
    
  ]
},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
