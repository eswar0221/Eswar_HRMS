import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
    import Swal from 'sweetalert2';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  newmanageForm: FormGroup;
  newhrForm: FormGroup;
  newengForm: FormGroup;
  newdocForm: FormGroup;
  newdocForm1:FormGroup;
  opadmin: string;
  openhod:string;
  openManage:string;
  openHR: string;
  openDoctor: string;
  openEngineering: string;
  menuAdmin: boolean;
  managees:boolean;
  newengineer: boolean;
  newhr: boolean;
  newdoctor: boolean;
  data: Array<any>=[];
  management_navbar: Array<any>=[];
  array: any;
  array0:any;
  array2: any;
  array1: any;
  array3: any;
  array4:any;
  array6:any;
  use_navbar_management:  Array<any>=[];
  alert_success: boolean;
  hr_navbar: Array<any>=[];
  use_navbar_hr:Array<any>=[];
  eng_navbar: Array<any>=[];
  use_navbar_eng:Array<any>=[];
  doctor_navbar: Array<any>=[];
  use_navbar_doctor: Array<any>=[];

  dataemp:boolean;
  dataem:boolean;
  dataemp1:boolean;
  dataem1:boolean;
  constructor(private formbuilder : FormBuilder,private http:Web3Service, private router:Router) { }

  ngOnInit() {
    this.getHrmanper();
    // this.funiGetData();
    this.getdoctor_select();
    this.dataem=true;
    this.dataemp=false;
    this.dataem1=true;
    this.dataemp1=false;
    this.opadmin = localStorage.getItem("openAdmin");
    // this.openManage = localStorage.getItem("openManage");
    // this.openHR = localStorage.getItem('openHR');
    // this.openEngineering = localStorage.getItem('openEngineering');
    // this.openDoctor = localStorage.getItem('openDoctor');
    // console.log(this.opadmin)
    this.managees = true;


    this.newmanageForm = this.formbuilder.group({
      mang :[false, Validators.required],
      index :[false, Validators.required],
      meeting :[false, Validators.required],
      survey :[false, Validators.required]
    });

    this.newhrForm = this.formbuilder.group({
      hrhome :[false, Validators.required],
      Recruitment :[false, Validators.required],
      Campus :[false, Validators.required],
      Careers :[false, Validators.required]
    });

    this.newengForm = this.formbuilder.group({
      enghome :[false, Validators.required],
      Result :[false, Validators.required],
      About :[false, Validators.required],
      Contact :[false, Validators.required]
    });

    this.newdocForm = this.formbuilder.group({
      home :[true, Validators.required],

      Holidays :[false, Validators.required],
      Tickets :[false, Validators.required],
      Activities :[false, Validators.required],
      Events :[false, Validators.required],
      jobs :[false, Validators.required],
      Leave_Request :[false, Validators.required],

    });
  //   this.newdocForm1=this.formbuilder.group({
  //     Holidays :[false, Validators.required],
  //     Tickets :[false, Validators.required],
  //     Activities :[false, Validators.required],
  //     Events :[false, Validators.required]
  // })
    // this.getmangementdata();
    // this.gethr_select();
    // this.geteng_select();
  }
  manage(){
    this.managees = true;
    this.newhr = false;
    this.newengineer = false;
    this.newdoctor = false;
  }

  hr(){
      this.newhr = true;
      this.managees = false;
      this.newengineer = false;
      this.newdoctor = false;
  }

  Engineer(){
      this.newengineer = true;
      this.newhr = false;
      this.managees = false;
      this.newdoctor = false;
  }
  // Holidays Tickets  Activities  Events

  emp(){
      this.newdoctor = true;
      this.newengineer = false;
      this.newhr = false;
      this.managees = false;
  }

  ServiceData={
    home:true,

    Holidays:false,
    Tickets:false,
    Activities:false,
    Events:false,
  }
  Engidata={
    
  }
  hrmang={
    Dashboard:true,     Employee  :false,        Estimates:false,    Invoices :false,    Expenses :false,    Payments :false,   Provident_Fund:false,    Taxes:false,   Expenses_Reports :false,   Invoice_Report :false,   Department:false,   Holidays:false,   Dummy:false,    Designations:false,
    Projects :false,    Clients :false,  Leads :false,    Managed_Jobs:false,  Applied_Jobs:false,    Employee_Salary:false,  Payslip:false,   Leave_Request:false,    Users:false,   Timing_Sheet:false,    Tickets :false,   Email:false,      Assets:false,   Events:false,   Activities:false,   
    Profile:false,    Forgot_Password :false,Contact:false,
  }
  hrmangup={
    Dashboard:true,     Employee  :false,        Estimates:false,    Invoices :false,    Expenses :false,    Payments :false,   Provident_Fund:false,    Taxes:false,   Expenses_Reports :false,   Invoice_Report :false,   Department:false,   Holidays:false,   Dummy:false,    Designations:false,
    Projects :false,    Clients :false,  Leads :false,    Managed_Jobs:false,  Applied_Jobs:false,    Employee_Salary:false,  Payslip:false,   Leave_Request:false,    Users:false,   Timing_Sheet:false,    Tickets :false,   Email:false,      Assets:false,   Events:false,   Activities:false,   
    Profile:false,    Forgot_Password :false,Contact:false,
  }
  mangement_select_navbar(hrmang){
    console.log("message hr",hrmang);
    this.http.hmPerreg(hrmang).subscribe((res)=>{
      console.log(res)})
      Swal.fire({
        text: 'Permissions Added',
        icon: 'success',
        confirmButtonText: 'OK',
    // import Swal from 'sweetalert2';
        
      });

  }
//   hmperupdate   gethmper  hmPerreg

hmperupdate(hrmangup){
  this.http.hmperupdate(hrmangup).subscribe((res)=>{
    console.log(res)})
    Swal.fire({
      text: 'Permissions Updated',
      icon: 'success',
      confirmButtonText: 'OK',
  // import Swal from 'sweetalert2';
      
    });
  }
  hrmangup2: Array<any>=[];

  getHrmanper(){
      this.http.gethmper().subscribe((res1)=>{
  
        this.hrmangup=res1[0];
        this.hrmangup2=res1
        console.log(res1)
        for(var e=0; e<res1.length; e++){
          this.array6=this.hrmangup2[e].Dashboard;
    
       
          // console.log(this.array)
      if(this.array6 == true){
    // this.doctor_navbar.push("Home");
        this.dataem1=false;
        this.dataemp1=true;
      }
    }
      })
  

  }
  // Dashboard      Employee        Estimates  Invoices    Expenses    Payments  Provident_Fund  Taxes  Expenses_Reports  Invoice_Report  Department Holidays Dummy  Designations
  // Projects   Clients  Leads   Managed_Jobs Applied_Jobs  Employee_Salary Payslip Leave_Request  Users  Timing_Sheet  Tickets  Email    Assets  Events Activities Assets
  // Profile    Forgot_Password  
//   Empperupdate   getEmpper  EmpPerreg
doctor_select_navbar(){
  var dict = [];
  var dicts = [];
 
    dict.push({
      home:this.newdocForm.controls['home'].value,

      Holidays:this.newdocForm.controls['Holidays'].value,
      Tickets:this.newdocForm.controls['Tickets'].value,
      Activities:this.newdocForm.controls['Activities'].value,
      Events:this.newdocForm.controls['Events'].value,
      Leave_Request:this.newdocForm.controls['Leave_Request'].value,
      jobs:this.newdocForm.controls['jobs'].value,

      status:"filied"      
    });
    
let arr3 = dict.map((item, i) => Object.assign({}, item, dicts[i]));

console.log("LLLLLLL",arr3)
   for(var k = 0; k <arr3.length; k++){
    console.log("llllllllllll",arr3[k])

    this.http.EmpPerreg(arr3[k]).subscribe(res=>{
      console.log(JSON.stringify(res))
    })

  }
console.log("Data selected successfully....")


this.alert_success = true;

}
updatedoc(ServiceData){
    
 
  console.log(ServiceData);
  
   this.http.Empperupdate(ServiceData).subscribe((dt:any)=>{
    //  alert(dt.msg)
    //  this.funiGetData()
    // console.log(dt);
    Swal.fire({
      text: 'Permissions Updated',
      icon: 'success',
      confirmButtonText: 'OK',
  // import Swal from 'sweetalert2';
      
    });
   })


}

getdoctor_select(){
  this.http.getEmpper().subscribe(res=>{
    console.log(JSON.stringify(res))
    this.data=res
    if(res){
    // this.dataem=false;

    }
    this.ServiceData=res[0]

    for(var i=0; i<res.length;i++){
      this.array0=this.data[i].home;

      this.array=this.data[i].Holidays;
      this.array1=this.data[i].Tickets;
      this.array2 = this.data[i].Activities;;
      this.array3 = this.data[i].Events
      // console.log(this.array)
  if(this.array0 == true){
this.doctor_navbar.push("Home");
    this.dataem=false;
    this.dataemp=true;
  }
  if(this.array1 == true){
    this.doctor_navbar.push("Holidays");
    
      }
  if( this.array2 == true){
    this.doctor_navbar.push("Tickets");
  }

  if( this.array3 == true){
    this.doctor_navbar.push("Activities")
   }

   if(this.array4 == true){
    this.doctor_navbar.push("Events")
  }
  }
})
  console.log(this.doctor_navbar);
  this.use_navbar_doctor = this.doctor_navbar

}


// mangement_select_navbar(hrmang){

// }










}
