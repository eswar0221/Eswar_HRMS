import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr'; 
// import { Observable } from 'rxjs/Observable'
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/timeout';
// import { Observable } from 'rxjs';
@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {
  oday_Date:any;
  today1e:any;
  today2e:any;
  today3e:any;
  today4e:any;
  date:any;
  clockHandle;

  constructor(private router:Router,private toastr: ToastrService,private web3:Web3Service,private datePipe: DatePipe,) { 
  this.oday_Date =this.datePipe.transform( new Date(),'yyyy-MM-dd  h:mm:ss');
  console.log( this.oday_Date);
  this.today1e= this.datePipe.transform( new Date(),'dd-MM-yyyy');
  this.today2e= this.datePipe.transform( new Date(),'EEEE, MMMM d, y');

// console.log("2",this.today2e);
// console.log("1",this.today1e);
// console.log("3",this.today3e);


  // 'EEEE, MMMM d, y'
  // 'h:mm:ss a'
  }
  ServiceData:any={
    today_Date: this.datePipe.transform( new Date(),'dd-MM-yyyy'),
    Hours: this.datePipe.transform( new Date(),' hh'),
      }
  // date = Date.now();

  sats:any;
  sats1:any;
  sats2:any;
  sats3:any;
  sats4:any;
repman:any;
projects:any;
EmpLogin:any;
Team_Lead:any;
Accounting_login:any;

  ngOnInit() {
    this.EmpLogin = localStorage.getItem("openEmployee");
    this.Team_Lead = localStorage.getItem("openTeam_Lead");
    this.Accounting_login = localStorage.getItem("Accounting_login");
  // this.date = Date.now();
  this.clockHandle = setInterval(()=>{
    this.today4e =this.datePipe.transform( new Date(),'ss a').toLocaleString();
  },1000);
  this.clockHandle = setInterval(()=>{
    this.today3e =this.datePipe.transform( new Date(),'h:mm').toLocaleString();
  },1000);
  // this.today3e= this.datePipe.transform( new Date(),'h:mm');
  // this.today4e= this.datePipe.transform( new Date(),'ss a');
  console.log("4",this.today4e);

    this.getDataIndividual();
    this.getDataIndividualleave();
    this.getDataIndividualtic();
    this.getemailBankdata()
    this.getDataIndividualtasks()
    // console.log(parseInt( this.sats3));
    this.getProData()
    this.getproteam()
  }
  prteam:any;
  getProData(){
    this.web3.getProjectData().subscribe((resp)=>{

      this.projects=resp;
      this.prteam=resp.addteam
      for (let pt = 0; pt < resp.length; pt++) {
        const element = resp[pt];
var zzz=localStorage.getItem("Pro_t_l")

        if(zzz==resp[pt].projectleader){

        }
        
      }
      // console.log( this.prteam);
      // console.log(resp);
      // getprojecname
      // console.log(resp.addteam)
    })
  }

  editprofile(){
    this.router.navigate(['Admin/editprofiles'])

  }
  bankempdata:Array<any>=[];
  getemailBankdata(){
    
    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.web3.getempbankemail(data).subscribe((res)=>{
      this.bankempdata.push(res[0]);
      console.log("emp bank data",this.bankempdata);

    })
  }
  // localStorage.setItem("Email_ID",user.email)

  profile:any;epname:any;leav2:any;leav1:any;totleaves:any;cauused:any;medused:any;totavai:any;
  getDataIndividual(){
    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.web3.getEmpByname(data).subscribe((res)=>{
    //  this.DataById=res[0].email;
   console.log("profile emp data",res);
this.profile=res 
// console.log(res);

this.epname=res[0].firstname
localStorage.setItem("Pro_t_l",res[0].firstname)
// console.log(this.epname);
localStorage.setItem("Epname",this.epname)
this.repman=res[0].Reporting_Manager

// this.sats3=res[0].noofleaves
this.leav2=res[0].medical_lev
this.leav1=res[0].casual_lev
this.totleaves=parseInt(this.leav2)+parseInt(this.leav1)
this.cauused= 8 - parseInt(this.leav1)
this.medused = 7 - parseInt(this.leav2)
this.totavai =  parseInt(this.cauused) +  parseInt(this.medused) 
this.sats4= 15 - parseInt( this.totleaves);
// this.sats4= 14 - parseInt( this.sats3);
console.log("Remaining leaves",this.sats4);

// console.log(res[0].noofleaves);

    })
  }
  teamp:any;
  pna: Array<any>=[];

  getproteam(){
    // getprojecname
    var id= localStorage.getItem("Pro_t_l")
    let data={
      "projectleader":id
    }
    this.web3.getprojecname(data).subscribe((respn)=>{
  console.log("leader",respn);
  for (let cd = 0; cd < respn.length; cd++) {
    this.teamp = respn[cd].addteam;
    this.pna.push(respn[cd].projectname);
    console.log("nameeeeeeee",this.pna);
    
  }
//  respn[0].addteam
  
    })}
    

  getDataIndividualleave(){

    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.web3.getleaveemail(data).subscribe((res)=>{
    //  this.DataById=res[0].email;
    this.sats=res
    this.sats1=res.noofleaves
    this.sats2=res.No_Of_Days_Leave_Apply
    // this.sats3=res.employeename
      // console.log(res[0])
       
    })
  }
  ticke_id: Array<any>=[];
  ticke_id1: Array<any>=[];

  sats11:any;
  sats12:any;ticno:any;
    getDataIndividualtic(){

      var TicketId= localStorage.getItem("Email_ID")
      let data={
        "email":TicketId
      }
      this.web3.getTicketemial(data).subscribe((res)=>{
        console.log(res);
        
      this.sats11=res
       
      this.ticno=res.length
  //     localStorage.setItem("tot",this.ticno)

  //   // console.log("this is from studdent verified res",res);
  //     for(var i=0;i< res.length;i++)
  //     {
  //       // if(res[i].status !== "Close"){
  //       this.ticke_id.push(res[i]);
  //       console.log(this.ticke_id);
        
        
     
  //     }  
  
  // if(this.ticke_id.length>0){ 
  //     for(var i=this.ticke_id.length-1;i<this.ticke_id.length;i++){
  //       console.log("sdfg",this.ticke_id[i].TicketId);
        
  //       this.toastr.info(` Hi Your Ticket id ${this.ticke_id[i].TicketId} Ticket Subject ${this.ticke_id[i].TicketSubject} `, 'Notification');  

  // }
  //   }
  

})

    }
    tasno:any;abc1:any;noti:number;
    getDataIndividualtasks(){

      var id= localStorage.getItem("Email_ID")
      let data={
        "email":id
      }
      this.web3.getTaskEmail(data).subscribe((rest)=>{
      //  this.DataById=res[0].email;
      this.sats12=rest
      this.tasno=rest.length
     this.abc1=localStorage.getItem("tot")
this.noti=(parseInt(this.tasno) + parseInt(this.abc1))
        // console.log(res[0])
  //       for(var i=0;i< rest.length;i++)
  //     {
  //       // if(res[i].student_id === this.username){
  //       this.ticke_id1.push(rest[i]);
  //       console.log(this.ticke_id);
        
  //     }  
  
  // if(this.ticke_id1.length>0){ 
  //     for(var i=this.ticke_id1.length-1;i<this.ticke_id1.length;i++){
        
  //       this.toastr.success(` Hi Your Task Name ${this.ticke_id1[i].Task_Name} Your ID ${this.ticke_id1[i].Employeeid} `, 'Notification');  
  //       // iconClasses = {
  //       //   error: 'toast-error',
  //       //   info: 'toast-info',
  //       //   success: 'toast-success',
  //       //   warning: 'toast-warning'
  //       // };
  // }
  //   }
    
      })
    }

    // onClicknot() {
    //   const ob = Observable.of(1).delay(5000).timeout(200);
    //   ob.subscribe(x => {
    //     console.log('Next: %s', x);
    //   }, error => {
    //     console.log('enter error');
    //     throw error;
    //   });
  
    //   // If umcomment this line, it works as I expected.
    //   // this.notificationsService.info('info');
    // }
}
