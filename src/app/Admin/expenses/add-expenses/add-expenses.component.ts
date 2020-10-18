import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.css']
})
export class AddExpensesComponent implements OnInit {
  file:File;

 
  ServiceData:any={

  }
  mon:any;
  noofdays:any=[];
  pmonth1:any;
  months:Array<any> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  range = [];
  rangedays=[];
  rangedays1=[];
  rangedays3=[];
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) 
  { 
    
    var year = new Date().getFullYear();
    var dyear = new Date().getMonth();

    this.ServiceData.pyear=year;
    this.ServiceData.pmonth=dyear;

  for (var i = 2019; i < year +1; i++) {
    this.range.push(i);
}

   }
  ngOnInit() {
// this.getData()
this.ServiceData.email = localStorage.getItem("Email_ID");
this.ServiceData.Purchased_By = localStorage.getItem("Pro_t_l");
console.log(typeof uuid());
// this.list.push(uuid());
// import { v4 as uuid } from 'uuid';

this.ServiceData.Expensives_ID=uuid();
  }
  ghjt(){
    // console.log("ghj1",this.ServiceData.pmonth);
    
    // console.log("ghj",this.ServiceData.fyear);
    // this.ServiceData.leav_ap_mon =this.ServiceData.pmonth ;
    // this.ServiceData.tmonth =this.ServiceData.pmonth ;
    //  this.ServiceData.leav_ap_year=this.ServiceData.fyear ;
      if(this.ServiceData.pmonth =="January"){
        this.noofdays=32
      }
      if(this.ServiceData.pmonth =="February" && (this.ServiceData.fyear % 4) !==0  ){this.noofdays=29}
      if(this.ServiceData.pmonth =="February" && (this.ServiceData.fyear % 4) ==0  ){this.noofdays=30} 
      
      if(this.ServiceData.pmonth =="March"){   this.noofdays=32 }
       if(this.ServiceData.pmonth =="April"){ this.noofdays=31 } 
      if(this.ServiceData.pmonth =="May"){   this.noofdays=32} if(this.ServiceData.pmonth =="June"){   this.noofdays=31 }
       if(this.ServiceData.pmonth =="July"){ this.noofdays=32 } 
    
      if(this.ServiceData.pmonth =="August"){this.noofdays=32 } if(this.ServiceData.pmonth =="September"){ this.noofdays=31}
      if(this.ServiceData.pmonth =="October"){this.noofdays=32 } if(this.ServiceData.pmonth =="November"){ this.noofdays=31}
    if (this.ServiceData.pmonth== "December") {
    this.noofdays=32
    }
     console.log("cvhbjkl",this.noofdays);
           for (var z = 1; z < this.noofdays; z++) {
        this.rangedays.push(z);
        this.rangedays1.push(z);
        // console.log("sdfghjk",this.rangedays1);
        
    //     console.log("len",this.rangedays.length);
    // if(this.rangedays.length > 32){
    //   for (var m = 1; m <= 31; m++) {
    //             this.rangedays1.push(m);
    //           }        
    // }
    // else{
      
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
  back(){
    // this.router.navigate(['Admin/expenses'])

  }
  incomingFile(imagedata){
    console.log(imagedata);
this.file=(imagedata.target.files[0]);

  }
  getcal(ServiceData){
    // ServiceData.gst = 15 ;
    ServiceData.DA = Math.round((parseInt( ServiceData.Amount) * (ServiceData.gst) ) / 100);
    ServiceData.total_amount =parseInt( ServiceData.Amount) +parseInt( ServiceData.DA)

  }
  sendData(ServiceData){
console.log(ServiceData);
var formData= new FormData()
    //   Item_Name Purchase_Date Amount Status Purchase_From     Purchased_By    Paid_By

  formData.append("Item_Name", ServiceData.Item_Name)
        // formData.append("Purchase_Date", ServiceData.Purchase_Date)
        formData.append("pday", ServiceData.pday)
        formData.append("pmonth", ServiceData.pmonth)
        formData.append("pyear", ServiceData.pyear)

        formData.append("Amount", ServiceData.Amount)
        // formData.append("Status", ServiceData.Status)
        formData.append("Purchase_From",ServiceData.Purchase_From)
        formData.append("Purchased_By",ServiceData.Purchased_By)
        formData.append("Paid_By",ServiceData.Paid_By)
        formData.append("gst",ServiceData.gst)
        formData.append("total_amount",ServiceData.total_amount)
        formData.append("email",ServiceData.email)
        formData.append("Expensives_ID",ServiceData.Expensives_ID)

        
       
        formData.append("file", this.file,this.file.name)
    this.web3.RegExpenses(formData).subscribe((res)=>{
      console.log(res)


      Swal.fire({
        text: 'Expenses Added',
        icon: 'success',
        confirmButtonText: 'OK',
      });
  // import Swal from 'sweetalert2';
    
    // this.router.navigate(['Admin/expenses'])
      
    })
      
  }

}
