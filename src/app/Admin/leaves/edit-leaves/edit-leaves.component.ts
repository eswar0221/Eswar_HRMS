import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
       import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-leaves',
  templateUrl: './edit-leaves.component.html',
  styleUrls: ['./edit-leaves.component.css']
})
export class EditLeavesComponent implements OnInit {

  ServiceData:any={

  }

  
  range = [];
  rangedays=[];
  rangedays1=[];

  gtyu:Boolean;
  ghjklj:Boolean;
    remed:Boolean;
  recas:Boolean;
  mon:any;
  noofdays:any=[];
  fmonth1:any;
  months:Array<any> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  constructor( private web3:Web3Service,private router:Router) { }
 
  ngOnInit() {
this.getDataIndividual();
this.recas=false
this.remed=false


  }
    eid:any;
    onChange1(){
  //  this.ServiceData.leavetype 
      if( this.ServiceData.leavetype == "medical"){
        this.recas= false;
        this.remed= true;
        // this.calcu1();

      }
      if( this.ServiceData.leavetype  == "casual"){
        this.recas= true;
this.remed= false;
      // this.calcu();

      }
    }
     onChange(event){
      this.eid=event.target.value     
      console.log("le ty",this.eid);
this.onChange1()

      }

  getDataIndividual(){

    var employeename= localStorage.getItem("employeename")
    let data={
      "leaveid":employeename
    }
    this.web3.getleaveId(data).subscribe((res)=>{
      console.log("leaves edit data",res);
      
    //  this.DataById=res[0].email;
    // if(res[0].project[0].pread==false){
    //   this.ServiceData.pread==true
    //   console.log("dsfgh 84",this.ServiceData.pread);
    
    //   }
    
    this.ServiceData=res[0]
    // console.log("rdtfgbuhjn80",res[0].project[0].pread);
    // this.ServiceData.tf
  
      console.log("leaves edit res",res[0])

     
  
    })
  }
  ghjt(){
    console.log("ghj1",this.ServiceData.fmonth);
    
    console.log("ghj",this.ServiceData.fyear);
    
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
back(){
  this.router.navigate(['Admin/leaves'])

}

//   calculateDiff(sentDate) {
//     var date1:any = new Date(sentDate);
//     var date2:any = new Date();
//     var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

//     return diffDays;
// }

  apply(value){
    console.log(value);
    console.log("LLLLLL",value.status);
    
    if(value.designation !== "HR" && value.status=="Approved" &&  this.ServiceData.leavetype =="casual"){

    this.web3.updateEmpLeaves_cas(value).subscribe((res1)=>{
      console.log(res1);
    })
  }
     if(value.designation !== "HR" && value.status=="Approved" && this.ServiceData.leavetype == "medical"){

    this.web3.updateEmpLeaves_med(value).subscribe((res1)=>{
      console.log(res1);
    })
  }
      if(value.designation == "HR" && value.status=="Approved" && this.ServiceData.leavetype == "medical" ){
     this.web3.updatehrmanLeaves_med(value).subscribe((res1)=>{
      console.log(res1);
     
  })
}
 if(value.designation == "HR" && value.status=="Approved" && this.ServiceData.leavetype == "casual" ){
     this.web3.updatehrmanLeaves_cas(value).subscribe((res1)=>{
      console.log(res1);
     
  })
}
    this.web3.updateleve(value).subscribe((res)=>{
      console.log("up date ghn leaves edit",res)

      Swal.fire({
        text: 'leaves Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      // this.router.navigate(['Admin/leaves'])
      // import Swal from 'sweetalert2';
    })


  }


  

}
