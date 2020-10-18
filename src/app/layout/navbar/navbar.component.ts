import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr'; 
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  officerlogin: any;
  parentlogin: any;
  adminlogin: any;
  guardianlogin: any;
  isShown:boolean=false;
  public isCollapsed = false;
  opened = false;
  Managerlogin:any;
  EmpLogin:any;
  Team_Lead:any;
  Accounting_login:any;
  newdoctor: boolean;
  data: Array<any>=[];
  management_navbar: Array<any>=[];
  array: any;
  array0:any;
  array2: any;
  array1: any;
  array3: any;
  array4:any;
  hgfr1:any;
  hgfr2:any;
  hgfr3:any;
  use_navbar_management:  Array<any>=[];
  alert_success: boolean;
  hr_navbar: Array<any>=[];
  use_navbar_hr:Array<any>=[];
  eng_navbar: Array<any>=[];
  use_navbar_eng:Array<any>=[];
  doctor_navbar: Array<any>=[];
  use_navbar_doctor: Array<any>=[];
  clockHandle:any;
  today4e:any;
  oday_Date:any;

  constructor(private router: Router,private http:Web3Service,private datePipe: DatePipe,private toastr: ToastrService) { 
      this.oday_Date =this.datePipe.transform( new Date(),'yyyy-MM-dd  h:mm:ss');
      // console.log(this.oday_Date);
      
   }


  // @HostListener('window:beforeunload', ['$event'])
  // beforeunloadHandler($event) {
  // // localStorage.clear();
  // this.logout()
  // this.router.navigateByUrl('/login');
  // // this.router.navigate(['Admin/hrmanDashboard'], { replaceUrl: true });
  // }
  ngOnInit(){
   
    this.clockHandle = setInterval(()=>{
      this.today4e =this.datePipe.transform( new Date(),'yyyy-MM-dd  h:mm:ss').toLocaleString();
    },1000);
    this.getHrmanper();
    this.gettotLeaveData();
    this.getDataIndividuale();
    this.getdoctor_select();
    this.getDatahrIndividual()
    this.gettotaltasksData()
    this.gettotticksData()
    this.hrgettotLeaveData();
    this.admingettotLeaveData()
    // this.getDataIndividualtic();
    // this.gettottasksData();
    this.notitasks();
    this.notileaves();
    this.notiticks();
    // this.getDataIndividualtasks()
    this.adminlogin=localStorage.getItem("openadmin");
    // this.openadmin=localStorage.getItem("openadmin");
  this.EmpLogin = localStorage.getItem("openEmployee");
    this.Team_Lead = localStorage.getItem("openTeam_Lead");
 this.Managerlogin = localStorage.getItem("Managerlogin");
 this.Accounting_login =  localStorage.getItem("Accounting_login");
  
  }
  

  sats:any;
  sats1:any;
  sats2:any;
  sats3:any;hrdata:any;
  sats4:any;
repman:any;
projects:any;
  profile:any;epname:any;hrmdata:any;
  getDataIndividuale(){

    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.http.getEmpByname(data).subscribe((res)=>{
    //  this.DataById=res[0].email;
   console.log("profile emp data",res);
this.profile=res 


// console.log(res[0].noofleaves);

    })
  }
  getDatahrIndividual(){

    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.http.gethmByname(data).subscribe((res)=>{
    //  this.DataById=res[0].email;
   console.log("profile emp data",res);
  this.hrmdata=res 
 
  
    })
  }
notit2: Array<any>=[];notileav:any;
leave_id: Array<any>=[];notleav1:Array <any>=[];nottic:any;nottas:any;notleav:any;
notileaves(){
  var id= localStorage.getItem("Email_ID")
  let data={
    "email":id
  }
  this.http.getleaveemail(data).subscribe((resnl)=>{
    console.log(resnl);
    
for (let hn = 0; hn < resnl.length; hn++) {
  const element = resnl[hn];
  

if((resnl[hn].status !=="Apply" )  ){
  this.notleav1.push( resnl[hn].status)
  this.notleav=this.notleav1.length
//       localStorage.setItem("tot_L",this.notleav)
// console.log("tot_L",this.notleav);

}}

  })
}
notit: Array<any>=[];
notit1: Array<any>=[];
totle:Array<any>=[];
getnoti(){
  this.getDataIndividualtasks()


}
getnoti2(){
  this.getDataIndividualtic()
}
getnoti3(){
  this.getDataIndividualleave()
}
notiticks(){
  var TicketId= localStorage.getItem("Email_ID")
  let data={
    "email":TicketId
  }
  this.http.getTicketemial(data).subscribe((rest)=>{
    console.log(rest);
    for (let ti = 0; ti < rest.length; ti++) {
      const element = rest[ti];      
      
    if(rest[ti].status !== "Close"){
      this.notit1.push(rest[ti].status)
      console.log(rest[ti]);
console.log(rest[ti].status);

      this.nottic =  this.notit1.length
      
      // localStorage.setItem("tot_Ti",this.nottic)  
    // localStorage.setItem("tot_Ti",this.nottic)  

      // console.log("tot_Ti",rest.length);
     
       
    }
  }
  
   
})
}
abc9:any;abc8:any;notiEm:number;notiEmp:any;ticnoti:any;
notitasks(){
  var id= localStorage.getItem("Email_ID")
      let data={
        "email":id
      }
      this.http.getTaskEmail(data).subscribe((resta)=>{
        for(var d =0; d< resta.length; d++){
        if(resta[d].status !=="Close"){ 
          this.nottas=resta[d].status
          this.notit.push(resta[d].status)
          // console.log(this.nottas);
          console.log(resta[d]);
          console.log(resta[d].status);
          
        this.ticnoti= this.notit.length;     
        }}
  //       this.abc9=localStorage.getItem("tot_L")
  //       this.abc8=localStorage.getItem("tot_Ti")
  //  this.notiEm=((this.notit.length) + parseInt(this.abc9) + parseInt(this.abc8) )
  //  console.log("total",this.notiEm);
})
}
hh:any;ffg:any;hhr:any;
gettotLeaveData(){
  this.http.getLeaveData().subscribe((resl)=>{
    // this.totle=resl;
    // console.log(resl);
 this.ffg=localStorage.getItem("Pro_t_l")
    for (let lg = 0; lg < resl.length; lg++) {
     console.log("leve man",resl[lg].Reporting_Manager);
     
     if((resl[lg].status !== "Pending" && resl[lg].status !== "Approved" && ( resl[lg].Reporting_Manager == this.ffg ) )){
      this.totle.push( resl[lg].status)
      this.hh= this.totle.length
   console.log(this.hh);
  //  console.log(this.totle);
    }    }
   })
    }
    hrgettotLeaveData(){
      this.http.getLeaveData().subscribe((resel)=>{
        // this.totle=resl;
        // console.log(resl);
     this.ffg=localStorage.getItem("Pro_t_l")
        for (let lg = 0; lg < resel.length; lg++) {
         console.log(" hr leve man",resel[lg].Reporting_Manager);
         
         if((resel[lg].status !== "Pending" && resel[lg].status !== "Approved" && resel[lg].designation !=="HR")){
          this.totle.push( resel[lg].status)
          this.hhr= this.totle.length
       console.log("HR",this.hh);
      //  console.log(this.totle);
        }    }
       })
        }
        // designation=="HR"
        hhad:any;
        admingettotLeaveData(){
          this.http.getLeaveData().subscribe((resel)=>{
            // this.totle=resl;
            // console.log(resl);
         this.ffg=localStorage.getItem("Pro_t_l")
            for (let lg = 0; lg < resel.length; lg++) {
             console.log(" hr leve man",resel[lg].Reporting_Manager);
             
             if((resel[lg].status !== "Pending" && resel[lg].status !== "Approved" &&  resel[lg].designation=="HR")){
              this.totle.push( resel[lg].status)
              this.hhad= this.totle.length
           console.log("HR",this.hh);
          //  console.log(this.totle);
            }    }
           })
            }
    totl_e:Array<any>=[];h_h:any;
    gettotLeaveData1(){
var ffgg=localStorage.getItem("Pro_t_l")

      this.http.getLeaveData().subscribe((res_l)=>{
     
    
        for (let lg = 0; lg < res_l.length; lg++) {
         
         if((res_l[lg].status !== "Pending" && res_l[lg].status !== "Approved") && ( res_l[lg].Reporting_Manager == ffgg  )){
          this.totl_e.push( res_l[lg])
          this.h_h= this.totle.length    
        }    }

       })  
       if(this.totl_e.length>0){ 
      for(var i=0; i<this.totl_e.length; i++){
        // console.log("sdfg",this.ticke_id1[i].Task_Name);
        
        this.toastr.warning(`${this.totl_e[i].employeename} is Applying leave status is ${this.totl_e[i].status} `, 'Notification');  
        // iconClasses = {
        //   error: 'toast-error',
        //   info: 'toast-info',
        //   success: 'toast-success',
        //   warning: 'toast-warning'
        // };
  }
    } 
        }
        adgettotLeaveData1(){
          var ffgg=localStorage.getItem("Pro_t_l")
          
                this.http.getLeaveData().subscribe((res_l)=>{
               
              
                  for (let lg = 0; lg < res_l.length; lg++) {
                   
                   if((res_l[lg].status !== "Pending" && res_l[lg].status !== "Approved") && ( res_l[lg].designation=="HR")){
                    this.totl_e.push( res_l[lg])
                    this.h_h= this.totle.length    
                  }    }
          
                 })  
                 if(this.totl_e.length>0){ 
                for(var i=0; i<this.totl_e.length; i++){
                  // console.log("sdfg",this.ticke_id1[i].Task_Name);
                  
                  this.toastr.warning(`${this.totl_e[i].employeename} is Applying leave status is ${this.totl_e[i].status} `, 'Notification');  
                  // iconClasses = {
                  //   error: 'toast-error',
                  //   info: 'toast-info',
                  //   success: 'toast-success',
                  //   warning: 'toast-warning'
                  // };
            }
              } 
                  }
        hrgettotLeaveData1(){
          var ffgg=localStorage.getItem("Pro_t_l")
          
                this.http.getLeaveData().subscribe((res_l)=>{
               
              
                  for (let lg = 0; lg < res_l.length; lg++) {
                   
                   if((res_l[lg].status !== "Pending" && res_l[lg].status !== "Approved" && res_l[lg].designation !=="HR") ){
                    this.totl_e.push( res_l[lg])
                    this.h_h= this.totle.length    
                  }    }
          
                 })  
                 if(this.totl_e.length>0){ 
                for(var i=0; i<this.totl_e.length; i++){
                  // console.log("sdfg",this.ticke_id1[i].Task_Name);
                  
                  this.toastr.warning(`${this.totl_e[i].employeename} is Applying leave status is ${this.totl_e[i].status} `, 'Notification');  
                  // iconClasses = {
                  //   error: 'toast-error',
                  //   info: 'toast-info',
                  //   success: 'toast-success',
                  //   warning: 'toast-warning'
                  // };
            }
              } 
                  }
        frtyu(){
  this.gettotLeaveData1()
}
frtyu1(){
  this.hrgettotLeaveData1()
}
frtyuad(){
  this.adgettotLeaveData1()
}
    tastot:Array<any>=[];tto:any;
    gettotaltasksData(){
      this.http.gettasks().subscribe((rests)=>{
    for (let tf = 0; tf < rests.length; tf++) {

        if(rests[tf].status !== "Pending" && rests[tf].status !== "open"){
          this.tastot.push( rests[tf].status)
          // console.log(this.tastot.length);
          this.tto=this.tastot.length
          // this.tto= this.totle.length
        }
      }
      })
    }
    tas_tot:Array<any>=[];
    gettottasksData(){
      this.http.gettasks().subscribe((res_t)=>{
        // this.tottasks=res;
        for (let t_f = 0; t_f < res_t.length; t_f++) {

          if(res_t[t_f].status !== "Pending" && res_t[t_f].status !== "open"){
            this.tas_tot.push( res_t[t_f])
            // console.log(this.tastot.length);
            this.tto=this.tastot.length
            // this.tto= this.totle.length
          } }
          if(this.tas_tot.length>0){ 
            for(var i=0; i<this.tas_tot.length;i++){              
              this.toastr.success(` Hi your Task name is  ${this.tas_tot[i].Task_Name}  Emp_Name is ${this.tas_tot[i].Employee_Name}  & status is ${this.tas_tot[i].status} `, 'Notification');        
        }
          }
      })
    }
    getaln(){
    this.gettottasksData();
    }
    tkstot:Array<any>=[];tio:any;
    gettotticksData(){
      this.http.ticketdata().subscribe((restk)=>{
        for (let ti = 0; ti < restk.length; ti++) {

          if(restk[ti].status !== "Close" ){
            this.tkstot.push( restk[ti].status)
            // console.log(this.tastot.length);
            this.tio=this.tkstot.length
            // this.tto= this.totle.length
          }
        }
        
      })
    }
    tksto_t:Array<any>=[];
    gettotticksData1(){
      this.http.ticketdata().subscribe((rest_k)=>{
        for (let t_i = 0; t_i < rest_k.length; t_i++) {

          if(rest_k[t_i].status !== "Close" ){
            this.tksto_t.push( rest_k[t_i])
            // console.log(this.tastot.length);
            this.tio=this.tkstot.length
            // this.tto= this.totle.length
          }
        }
        if(this.tksto_t.length>0){ 
          for(var i=0; i<this.tksto_t.length;i++){
            // console.log("sdfg",this.tksto_t[i].TicketId);        
            this.toastr.info(`  Ticket id ${this.tksto_t[i].TicketId} Ticket Subject ${this.tksto_t[i].TicketSubject} Status is ${this.tksto_t[i].status} `, 'Notification');  
      }
        }
      })
    }
    gettiol(){
      this.gettotticksData1()
    }
  getDataIndividualleave(){

    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.http.getleaveemail(data).subscribe((resl)=>{
    //  this.DataById=res[0].email;
    this.sats=resl
    this.sats1=resl.noofleaves
    this.sats2=resl.No_Of_Days_Leave_Apply
    // this.sats3=res.employeename
      // console.log(res[0])
       for(var i=0;i< resl.length;i++)
      {
        if(resl[i].status !== "Apply"){
          // this.tasno=resl.length   
        this.leave_id.push(resl[i]);
      }     
      }   
  if(this.leave_id.length > 0){ 
    console.log("la", this.leave_id.length);
    
      for(var i=0; i < this.leave_id.length; i++){
        // console.log("sdfg",this.ticke_id1[i].Task_Name);
    console.log("la", this.leave_id);
        
        this.toastr.warning(` Hi  ${this.leave_id[i].employeename} Your leave status is ${this.leave_id[i].status} `, 'Notification');  
        // iconClasses = {
        //   error: 'toast-error',
        //   info: 'toast-info',
        //   success: 'toast-success',
        //   warning: 'toast-warning'
        // };
  }
    }   
    })
  }
  ticke_id: Array<any>=[];
  ticke_id1: Array<any>=[];

  sats11:any;tottasks:any;
  sats12:any;ticno:any;

    getDataIndividualtic(){
      var TicketId= localStorage.getItem("Email_ID")
      let data={
        "email":TicketId
      }
      this.http.getTicketemial(data).subscribe((res)=>{
        console.log(res);        
      this.sats11=res    
    // console.log("this is from studdent verified res",res);
      for(var tc=0;tc< res.length;tc++)
      {         
        if(res[tc].status !== "Close"){
          this.ticno=res.length
        this.ticke_id.push(res[tc]);
        console.log(this.ticke_id);        
        // this.durationperiod.push(new Date((evented[i].returnValues.verifiedtime)*1000).toLocaleString());
        }
      }  
  if(this.ticke_id.length>0){ 
      for(var i=0; i<this.ticke_id.length;i++){
        console.log("sdfg",this.ticke_id[i].TicketId);        
        this.toastr.info(` Hi Your Ticket id ${this.ticke_id[i].TicketId} Ticket Subject ${this.ticke_id[i].TicketSubject} `, 'Notification');  
  }
    }
  })
    }
    tasno:any;abc1:any;noti:number;
    getDataIndividualtasks(){
      var id= localStorage.getItem("Email_ID")
      let data={
        "email":id
      }
      this.http.getTaskEmail(data).subscribe((rest)=>{
      //  this.DataById=res[0].email;
      this.sats12=rest
//       this.tasno=rest.length
//      this.abc1=localStorage.getItem("tot")
// this.noti=(parseInt(this.tasno) + parseInt(this.abc1))
        // console.log(res[0])
    
        for(var i=0;i< rest.length;i++)
      {
        if(rest[i].status !== "Close"){
          this.tasno=rest.length
    //       this.abc1=localStorage.getItem("tot_n")
    //  this.noti=(parseInt(this.tasno) + parseInt(this.abc1))
        // if(res[i].student_id === this.username){
        this.ticke_id1.push(rest[i]);
        console.log(this.ticke_id1);
      }
        
        // this.durationperiod.push(new Date((evented[i].returnValues.verifiedtime)*1000).toLocaleString());
        // }
      }  
  
  if(this.ticke_id1.length>0){ 
      for(var i=0; i<this.ticke_id1.length;i++){
        // console.log("sdfg",this.ticke_id1[i].Task_Name);
        console.log(this.ticke_id1);
        
        this.toastr.success(` Hi Your Task Name ${this.ticke_id1[i].Task_Name} Your ID ${this.ticke_id1[i].Employeeid} `, 'Notification');  
        // iconClasses = {
        //   error: 'toast-error',
        //   info: 'toast-info',
        //   success: 'toast-success',
        //   warning: 'toast-warning'
        // };
  }
    }
    
      })
    }
  routetoCmm(){
    this.router.navigateByUrl('/University/generate-cmm');
  }
  routetoPC(){
    this.router.navigateByUrl('/University/generate-pc');

  }
  routetoOD(){
    this.router.navigateByUrl('/University/generate-od');

  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }


  // expanded = new Array(3).fill(false);

  // toggle(open: boolean, group: number) {
  //   if (open) {
  //     // Collapse everything then open the one we want
  //     this.expanded = new Array(3).fill(false);
  //     this.expanded[group] = true;
  //   } else {
  //     this.expanded[group] = false;
  //   }
  // }



zzz: Array<any>=[];
ttt: Array<any>=[];
aaa: Array<any>=[];
eee: Array<any>=[];
hhh: Array<any>=[];
llll:Array<any>=[];
jjjj:Array<any>=[];
kkkkk:Array<any>=[];
hrmens1:any;hrmens2:any;hrmens3:any;hrmens4:any;hrmens5:any;hrmens6:any;hrmens7:any;hrmens8:any;
hrmens9:any;hrmens10:any;
hrmens11:any;hrmens12:any;hrmens13:any;hrmens14:any;hrmens15:any;hrmens16:any;hrmens17:any;hrmens18:any;
hrmens19:any;hrmens20:any;
hrmens21:any;hrmens22:any;hrmens23:any;hrmens24:any;hrmens25:any;hrmens26:any;hrmens27:any;hrmens28:any;
hrmens29:any;hrmens30:any;
hrmens31:any;hrmens32:any;
hrmens33:any;hrmens34:any;

  getdoctor_select(){
    this.http.getEmpper().subscribe(res=>{
      // console.log(JSON.stringify(res))
      this.data=res
      // this.ServiceData=res
  
      for(var i=0; i<res.length;i++){
        this.array0=this.data[i].home;
  
        this.array1=this.data[i].Holidays;
        this.array2=this.data[i].Tickets;
        this.array3 = this.data[i].Activities;;
        this.array4 = this.data[i].Events
        this.hgfr1=this.data[i].Leave_Request
        this.hgfr2=this.data[i].jobs
        // this.hgfr3=this.data[i].Events
        // console.log(this.array4)
    if(this.array0 == true){
  // this.doctor_navbar.push("Home");
  this.zzz.push("Home");
// console.log(this.zzz);

  
    }
    if(this.array1 == true){
      this.hhh.push("Holidays");
      
        }
    if( this.array2 == true){
      this.ttt.push("Tickets");
    }
  
    if( this.array3 == true){
      this.aaa.push("Activities")
     }
  
     if(this.array4 == true){
      this.eee.push("Events")
    }
    if(this.hgfr1 == true){
      this.llll.push("Leave_Request")
    }
     if(this.hgfr2 == true){
      this.jjjj.push("jobs")
    }
    // if(this.hgfr3 == true){
    //   this.kkkkk.push("jobs")
    // }
    
    }})
    // console.log(this.doctor_navbar);
    // this.use_navbar_doctor = this.doctor_navbar
  
  }
  hrmangup: Array<any>=[];
  // Dashboard      Employee        Estimates  Invoices    Expenses    Payments  Provident_Fund  Taxes  Expenses_Reports  Invoice_Report  Department Holidays Dummy  Designations
  // Projects   Clients  Leads   Managed_Jobs Applied_Jobs  Employee_Salary Payslip Leave_Request  Users  Timing_Sheet  Tickets  Email    Assets  Events Activities Assets
  // Profile    Forgot_Password  Contact


  // hrmensp1: Array<any>=[];
  hrmensp1:Array<any>=[];hrmensp2:Array<any>=[];hrmensp3:Array<any>=[];hrmensp4:Array<any>=[];hrmensp5:Array<any>=[];hrmensp6:Array<any>=[];hrmensp7:Array<any>=[];hrmensp8:Array<any>=[];
  hrmensp9:Array<any>=[];hrmensp10:Array<any>=[];
  hrmensp11:Array<any>=[];hrmensp12:Array<any>=[];hrmensp13:Array<any>=[];hrmensp14:Array<any>=[];hrmensp15:Array<any>=[];hrmensp16:Array<any>=[];hrmensp17:Array<any>=[];hrmensp18:Array<any>=[];
  hrmensp19:Array<any>=[];hrmensp20:Array<any>=[];
  hrmensp21:Array<any>=[];hrmensp22:Array<any>=[];hrmensp23:Array<any>=[];hrmensp24:Array<any>=[];hrmensp25:Array<any>=[];hrmensp26:Array<any>=[];hrmensp27:Array<any>=[];hrmensp28:Array<any>=[];
  hrmensp29:Array<any>=[];hrmensp30:Array<any>=[];
  hrmensp31:Array<any>=[];hrmensp32:Array<any>=[];
  hrmensp33:Array<any>=[];hrmensp34:Array<any>=[];

  getHrmanper(){
    this.http.gethmper().subscribe((res1)=>{

      this.hrmangup=res1;
      // console.log(res1)
      for(var p=0; p<res1.length; p++){
        this.hrmens1=this.hrmangup[p].Dashboard;  
        this.hrmens2=this.hrmangup[p].Employee;
        this.hrmens3=this.hrmangup[p].Estimates;
        this.hrmens4=this.hrmangup[p].Expenses;;
        this.hrmens5=this.hrmangup[p].Payments
        this.hrmens6=this.hrmangup[p].Provident_Fund;
        this.hrmens7=this.hrmangup[p].Taxes;
        this.hrmens8=this.hrmangup[p].Expenses_Reports;
        this.hrmens9=this.hrmangup[p].Invoice_Report;
        this.hrmens10=this.hrmangup[p].Department;
        this.hrmens11=this.hrmangup[p].Holidays;  
        this.hrmens12=this.hrmangup[p].Dummy;
        this.hrmens13=this.hrmangup[p].Designations;
        this.hrmens14=this.hrmangup[p].Projects;;
        this.hrmens15=this.hrmangup[p].Clients
        this.hrmens16=this.hrmangup[p].Leads;
        this.hrmens17=this.hrmangup[p].Managed_Jobs;
        this.hrmens18=this.hrmangup[p].Applied_Jobs;
        this.hrmens19=this.hrmangup[p].Employee_Salary;
        this.hrmens20=this.hrmangup[p].Payslip;
        this.hrmens21=this.hrmangup[p].Leave_Request;  
        this.hrmens22=this.hrmangup[p].Users;
        this.hrmens23=this.hrmangup[p].Timing_Sheet;
        this.hrmens24=this.hrmangup[p].Tickets;;
        this.hrmens25=this.hrmangup[p].Email
        this.hrmens26=this.hrmangup[p].Assets;
        this.hrmens27=this.hrmangup[p].Events;
        this.hrmens28=this.hrmangup[p].Activities;
        this.hrmens29=this.hrmangup[p].Profile;
        this.hrmens30=this.hrmangup[p].Forgot_Password;
        this.hrmens31=this.hrmangup[p].Invoices;
        this.hrmens32=this.hrmangup[p].Contact;
        // this.hrmens33=this.data[i].home;
        // this.hrmens34=this.data[i].home;

        // console.log(this.array4)
    if(this.hrmens1 == true){
  this.hrmensp1.push("Dashboard");  
    }
    if(this.hrmens2 == true){
      this.hrmensp2.push("Employee");      
        }
        if(this.hrmens3 == true){
          this.hrmensp3.push("Estimates");  
            }
            if(this.hrmens4 == true){
              this.hrmensp4.push("Expenses");      
                }

                if(this.hrmens5 == true){
                  this.hrmensp5.push("Payments");  
                    }
                    if(this.hrmens6 == true){
                      this.hrmensp6.push("Provident_Fund");      
                        }
  // Dashboard      Employee        Estimates  Invoices    Expenses    Payments  Provident_Fund  Taxes  Expenses_Reports  Invoice_Report  Department Holidays Dummy  Designations

      if(this.hrmens7 == true){
        this.hrmensp7.push("Taxes");  
          }
          if(this.hrmens8 == true){
            this.hrmensp8.push("Expenses_Reports");      
              }
              if(this.hrmens9 == true){
                this.hrmensp9.push("Invoice_Report");  
                  }
                  if(this.hrmens10 == true){
                    this.hrmensp10.push("Department");      
                      }



                      if(this.hrmens11 == true){
                        this.hrmensp11.push("Holidays");  
                          }
                          if(this.hrmens12 == true){
                            this.hrmensp12.push("All Employees");      
                              }
                              if(this.hrmens13 == true){
                                this.hrmensp13.push("Designations");  
                                  }
                                  if(this.hrmens14 == true){
                                    this.hrmensp14.push("Projects");      
                                      }
                      
                                      if(this.hrmens15 == true){
                                        this.hrmensp15.push("Clients");  
                                          }
                                          if(this.hrmens16 == true){
                                            this.hrmensp16.push("Leads");      
                                              }
  // Projects   Clients  Leads   Managed_Jobs Applied_Jobs  Employee_Salary Payslip Leave_Request  Users  Timing_Sheet  Tickets  Email    Assets  Events Activities Assets

                            if(this.hrmens17 == true){
                              this.hrmensp17.push("Managed_Jobs");  
                                }
                                if(this.hrmens18 == true){
                                  this.hrmensp18.push("Applied_Jobs");      
                                    }
                                    if(this.hrmens19 == true){
                                      this.hrmensp19.push("Employee_Salary");  
                                        }
                                        if(this.hrmens20 == true){
                                          this.hrmensp20.push("Payslip");      
                                            }
                                            if(this.hrmens21 == true){
                                              this.hrmensp21.push("Leave_Request");  
                                                }
                                                if(this.hrmens22 == true){
                                                  this.hrmensp22.push("Users");      
                                                    }
                                                    if(this.hrmens23 == true){
                                                      this.hrmensp23.push("Timing_Sheet");  
                                                        }
                                                        if(this.hrmens24 == true){
                                                          this.hrmensp24.push("Tickets");      
                                                            }
                                            
                                                            if(this.hrmens25 == true){
                                                              this.hrmensp25.push("Email");  
                                                                }
                                                                if(this.hrmens26 == true){
                                                                  this.hrmensp26.push("Assets");      
                                                                    }
                                                  if(this.hrmens27 == true){
                                                    this.hrmensp27.push("Events");  
                                                      }
  // Profile    Forgot_Password 

                                                      if(this.hrmens28 == true){
                                                        this.hrmensp28.push("Activities");      
                                                          }
                                                          if(this.hrmens29 == true){
                                                            this.hrmensp29.push("Profile");  
                                                              }
                                                              if(this.hrmens30 == true){
                                                                this.hrmensp30.push("Forgot_Password");      
                                                                  }
                                                                  if(this.hrmens31 == true){
                                                                    this.hrmensp31.push("Invoices");      
                                                                      }
                                                                      if(this.hrmens32 == true){
                                                                        this.hrmensp32.push("Contact");      
                                                                          }
                                                                              

                    }
    })


}





}
