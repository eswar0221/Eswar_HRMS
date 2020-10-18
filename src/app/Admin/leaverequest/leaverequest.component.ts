import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
 import Swal from 'sweetalert2';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {
 
  emaiid_:any;
  ServiceData:any = {
    // noofleaves:14
  
  }
  range = [];
  rangedays=[];
  rangedays1=[];
  rangedays3=[];
  gtyu:Boolean;
  ghjklj:Boolean;
  recas:Boolean;
  remed:Boolean;

  mon:any;
  noofdays:any=[];
  fmonth1:any;
  months:Array<any> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  constructor(private http:Web3Service,private router:Router) {
    var year = new Date().getFullYear();
    this.ServiceData.fyear=year;
    this.ServiceData.tyear=year;

  for (var i = 2015; i < year +1; i++) {
    this.range.push(i);
}

   }

 
  Date=new Date();

  ngOnInit() {
    this.ServiceData.email= localStorage.getItem("Email_ID")
    console.log("testing",this.ServiceData.email);
    
    this.getDataIndividual1();
    this.getDataIndividual()
//  this.ServiceData.noofleaves=14;
this.recas= false;
this.remed= false;
// import { v4 as uuid } from 'uuid';

this.ServiceData.leaveid=uuid();
  }
  // getleaveemail
  back(){
    this.router.navigate(['Admin/leaves'])

  }
  ghjt(){
    console.log("ghj1",this.ServiceData.fmonth);
    
    console.log("ghj",this.ServiceData.fyear);
    // this.ServiceData.leav_ap_mon =this.ServiceData.fmonth ;
    // this.ServiceData.tmonth =this.ServiceData.fmonth ;
    //  this.ServiceData.leav_ap_year=this.ServiceData.fyear ;
      if(this.ServiceData.fmonth =="January"){
        this.noofdays=32
      }
      if(this.ServiceData.fmonth =="February" && (this.ServiceData.fyear % 4) !==0  ){   this.noofdays=29}
      if(this.ServiceData.fmonth =="February" && (this.ServiceData.fyear % 4) ==0  ){   this.noofdays=30} if(this.ServiceData.fmonth =="March"){   this.noofdays=32 }
       if(this.ServiceData.fmonth =="April"){ this.noofdays=31 } 
      if(this.ServiceData.fmonth =="May"){   this.noofdays=32} if(this.ServiceData.fmonth =="June"){   this.noofdays=31 } if(this.ServiceData.fmonth =="July"){ this.noofdays=32 } 
    
      if(this.ServiceData.fmonth =="August"){this.noofdays=32 } if(this.ServiceData.fmonth =="September"){ this.noofdays=31}
      if(this.ServiceData.fmonth =="October"){this.noofdays=32 } if(this.ServiceData.fmonth =="November"){ this.noofdays=31}
    if (this.ServiceData.fmonth== "December") {
    this.noofdays=32
    }
     
      for (var z = 1; z < this.noofdays; z++) {
        this.rangedays.push(z);
    //     console.log("len",this.rangedays.length);
    // if(this.rangedays.length > 32){
    //   for (var m = 1; m <= 31; m++) {
    //             this.rangedays1.push(m);
    //           }        
    // }
    // else{
      this.rangedays1.push(z);
    // }
    }
   

    }
    ghjt1(){
      console.log("ghj1",this.ServiceData.tmonth);
      
      console.log("ghj",this.ServiceData.tyear);
     
        if(this.ServiceData.tmonth =="January"){
          this.noofdays=32
        }
        if(this.ServiceData.tmonth =="February" && (this.ServiceData.fyear % 4) !==0  ){   this.noofdays=29}
        if(this.ServiceData.tmonth =="February" && (this.ServiceData.fyear % 4) ==0  ){   this.noofdays=30} if(this.ServiceData.tmonth =="March"){   this.noofdays=32 }
         if(this.ServiceData.tmonth =="April"){ this.noofdays=31 } 
        if(this.ServiceData.tmonth =="May"){   this.noofdays=32} if(this.ServiceData.tmonth =="June"){   this.noofdays=31 } if(this.ServiceData.tmonth =="July"){ this.noofdays=32 } 
      
        if(this.ServiceData.tmonth =="August"){this.noofdays=32 } if(this.ServiceData.tmonth =="September"){ this.noofdays=31}
        if(this.ServiceData.tmonth =="October"){this.noofdays=32 } if(this.ServiceData.tmonth =="November"){ this.noofdays=31}
      if (this.ServiceData.tmonth== "December") {
      this.noofdays=32
      }
       
        for (var z = 1; z < this.noofdays; z++) {
          this.rangedays.push(z);
      //     console.log("len",this.rangedays.length);
      // if(this.rangedays.length > 32){
      //   for (var m = 1; m <= 31; m++) {
      //             this.rangedays1.push(m);
      //           }        
      // }
      // else{
        this.rangedays3.push(z);
      // }
      }  
      }

      eid:any;
      onChange1(event){
        this.eid=event.target.value     
        console.log("le ty",this.eid);
           
        let data={
          "employeeid":this.eid
        }
        if(this.eid == "medical"){
          this.recas= false;
          this.remed= true;
          this.calcu1();

        }
        if(this.eid == "casual"){
          this.recas= true;
this.remed= false;
        this.calcu();

        }
      }
      caldays(){
        this.ServiceData.No_Of_Days_Leave_Apply  = (this.ServiceData.tday - this.ServiceData.fday) + 1 ;
        // this.calcu();
      }
  calcu(){
if(this.ServiceData.No_Of_Days_Leave_Apply >= this.ServiceData.total_casual_leaves){
  this.ServiceData.casual_lev = 0;
  this.ServiceData.medical_lev= this.ServiceData.total_medi_leaves
  this.ServiceData.losofpay = this.ServiceData.No_Of_Days_Leave_Apply -this.ServiceData.total_casual_leaves 
  //  console.log( "lop",cdfg);
  
  // this.ServiceData.noofleaves==0
   
}
else{
    this.ServiceData.casual_lev= this.ServiceData.total_casual_leaves - this.ServiceData.No_Of_Days_Leave_Apply
    this.ServiceData.losofpay=0
  this.ServiceData.medical_lev= this.ServiceData.total_medi_leaves

}


  }
  calcu1(){
    if(this.ServiceData.No_Of_Days_Leave_Apply >= this.ServiceData.total_medi_leaves){
      this.ServiceData.medical_lev = 0;
  this.ServiceData.casual_lev= this.ServiceData.total_casual_leaves
    
      this.ServiceData.losofpay = this.ServiceData.No_Of_Days_Leave_Apply -this.ServiceData.total_medi_leaves 
      //  console.log( "lop",cdfg);
      
      // this.ServiceData.noofleaves==0
       
    }
    else{
        this.ServiceData.medical_lev= this.ServiceData.total_medi_leaves - this.ServiceData.No_Of_Days_Leave_Apply
        this.ServiceData.losofpay=0
        this.ServiceData.casual_lev= this.ServiceData.total_casual_leaves


    }
    
    
      }
  
//   calculateDiff(sentDate) {
//     var date1:any = new Date(sentDate);
//     var date2:any = new Date();
//     var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

//     return diffDays;
// }

  clear(ServiceData){
    ServiceData.firstname = "",
  ServiceData.username = "",
  ServiceData.password = "",
  ServiceData.employeeid = "",  
  ServiceData.company = "",
  ServiceData.phone = "",
  ServiceData.lastname = "",
  ServiceData.email = "",
  ServiceData.cpassword = "",
  ServiceData.designation = ""
     
  }

  apply(ServiceData){
    console.log(ServiceData);
    let data={
      "email":ServiceData.email
    }
    this.http.sendleaveData(ServiceData).subscribe((res)=>{
      // console.log(res.rror);
      // console.log(res.ERROR);
      // console.log(res.ERROR.error);
      

      Swal.fire({
        text: 'Leave apply',
        icon: 'success',
        confirmButtonText: 'OK',
    // import Swal from 'sweetalert2';
        
      });
    })
   
    // this.http.updateEmpLeaves(ServiceData).subscribe((res1)=>{
    //   console.log(res1);
      
   
    // })


  }
  sats:any
  getDataIndividual(){

    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.http.getleaveemail(data).subscribe((res)=>{
    //  this.DataById=res[0].email;
    this.sats=res
     
      // console.log(res[0])
     
  
    })
  }
  profile:any;ctc:any;
  getDataIndividual1(){

    var id= localStorage.getItem("Email_ID")
    let data1={
      "email":this.ServiceData.email
    }
    console.log("test",data1);
    
    this.http.getEmpByname(data1).subscribe((res)=>{
    //  this.DataById=res[0].email;
  //  console.log("profile emp data",res);
  console.log("leves",res[0]);
  
this.ServiceData.employeename=res[0].firstname
this.ServiceData.designation=res[0].designation
// this.ServiceData.totalleaves=res[0].noofleaves
this.ServiceData.total_casual_leaves=res[0].casual_lev
this.ServiceData.total_medi_leaves=res[0].medical_lev

this.ServiceData.employeeid=res[0].employeeid
this.ctc=(res[0].ctc)
this.ServiceData.Reporting_Manager=res[0].Reporting_Manager
console.log("leves1",res[0].firstname);

// this.ServiceData=res[0]
   
     
  
    })

  }
  // updateEmpLeaves updateEmpLeaves
}
