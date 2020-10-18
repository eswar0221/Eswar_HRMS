import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hr-man-dashboard',
  templateUrl: './hr-man-dashboard.component.html',
  styleUrls: ['./hr-man-dashboard.component.css']
})
export class HrManDashboardComponent implements OnInit {

  sats: any;
  tableSEcond_tab: boolean;
  secondTable: boolean;
  empid: any;
  sats1:any;
  sats2:any;
  sats3:any;
  sats4:any;
  repman:any;
  oday_Date:any;
  today1e:any;
  today2e:any;
  today3e:any;
  today4e:any;
  date:any;
  clockHandle;
  constructor(private modalService : NgbModal, private web3: Web3Service,private router:Router,private datePipe: DatePipe) {


  }
  totleaves:any;leav1:any;leav2:any;
  ngOnInit() {
    this.getemailBankdata()
     // this.date = Date.now();
  this.today2e= this.datePipe.transform( new Date(),'EEEE, MMMM d, y');

  this.clockHandle = setInterval(()=>{
    this.today4e =this.datePipe.transform( new Date(),'ss a').toLocaleString();
  },1000);
  this.clockHandle = setInterval(()=>{
    this.today3e =this.datePipe.transform( new Date(),'h:mm').toLocaleString();
  },1000);
    this.getDataIndividual();
    this.getDataIndividualleave()
    console.log('time111111111111');
    this.getData();
    // this.getDataIndividualemp();
   
  }
  bankempdata:Array<any>=[];
  getData(){
    this.web3.gethrman().subscribe((res)=>{

      this.sats=res;
      // console.log(res)
    })
  }
  getemailBankdata(){
    
    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.web3.getempbankemail(data).subscribe((res)=>{
      // console.log("emp bank data",res);
      this.bankempdata.push(res[0]);
      console.log("emp bank data",this.bankempdata);

    })
  }
navigate(){
  this.router.navigate(["Admin/addhrman"])
}
profile:any;cauused:any;medused:any;totavai:any;
getDataIndividual(){

  var id= localStorage.getItem("Email_ID")
  let data={
    "email":id
  }
  this.web3.gethmByname(data).subscribe((res)=>{
  //  this.DataById=res[0].email;
 console.log("profile emp data",res);
this.profile=res 
this.repman=res[0].Reporting_Manager
this.leav2=res[0].medical_lev
this.leav1=res[0].casual_lev
this.totleaves=parseInt(this.leav2)+parseInt(this.leav1)
this.cauused= 8 - parseInt(this.leav1)
this.medused = 7 - parseInt(this.leav2)
this.totavai =  parseInt(this.cauused) +  parseInt(this.medused) 
this.sats4= 15 - parseInt( this.totleaves);
localStorage.setItem("Pro_t_l",res[0].firstname)

// console.log("Remaining leaves",this.sats4);

// console.log(res[0].noofleaves);

  })
}
epname:any;
// getDataIndividualemp(){

//   var id= localStorage.getItem("Email_ID")
//   let data={
//     "email":id
//   }
//   this.web3.getEmpByname(data).subscribe((res)=>{
//   //  this.DataById=res[0].email;
// //  console.log("profile emp data",res);
// this.profile=res 
// // console.log(res);

// this.epname=res[0].firstname
// localStorage.setItem("Pro_t_l",res[0].firstname)
// // console.log(this.epname);

// localStorage.setItem("Epname",this.epname)
// this.repman=res[0].Reporting_Manager

// this.sats3=res[0].noofleaves
// this.sats4= 14 - parseInt( this.sats3);
// console.log("Remaining leaves",this.sats4);

// // console.log(res[0].noofleaves);

//   })
// }
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
}
