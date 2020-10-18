import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as deLocale from 'date-fns/locale/de';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';


import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-holidays',
  templateUrl: './edit-holidays.component.html',
  styleUrls: ['./edit-holidays.component.css']
})
export class EditHolidaysComponent implements OnInit {

 
   date; // = new Date();
   DateCreated;
 
   searchText:any;
 
   options: DatepickerOptions = {
     minYear: 2000,
     maxYear: 2021,
     displayFormat: 'D.MM.YYYY',
     barTitleFormat: 'MMMM YYYY',
     dayNamesFormat: 'dd',
     firstCalendarDay: 1, // 0 - Sunday, 1 - Monday
     placeholder: 'Click to select a date',
     locale: deLocale,
     //barTitleIfEmpty: 'Click to select a date',
    // placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
     addClass: 'abc', // Optional, value to pass on to [ngClass] on the input field
     addStyle: {"padding-left":"50px","width":"430px","height":"45px", "border-radius": "5px" }, // Optional, value to pass to [ngStyle] on the input field
     fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
     useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
   };
 //   import { DatepickerOptions } from 'ng2-datepicker';
 // import * as deLocale from 'date-fns/locale/de';
 constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }
 ServiceData:any={
  Holiday_Date:"",
  Holiday_Name:""
 }
 tmpe1(){
   this.router.navigate(['Admin/holidays'])
 
 }
 ngOnInit() {
  this.getDataIndividual()
  
    }
    getDataIndividual(){
  
      var Holiday_Name= localStorage.getItem("Holiday_Name")
      let data={
        "Holiday_Name":Holiday_Name
      }
      this.web3.getholidaysno(data).subscribe((res)=>{
        console.log("Holiday_Name edit data",res);
        
      //  this.DataById=res[0].email;
      // if(res[0].project[0].pread==false){
      //   this.ServiceData.pread==true
      //   console.log("dsfgh 84",this.ServiceData.pread);
      
      //   }
      
      this.ServiceData=res[0]
      // console.log("rdtfgbuhjn80",res[0].project[0].pread);
      
    
        console.log("Holiday_Name edit res",res[0])
  
       
    
      })
    }

 
    Update(data){
   console.log("add up holiday",data);
 
 
   this.web3.updateholidays(data).subscribe((res)=>{
     console.log("up holidays respon",res)
 
    
     Swal.fire({
       text: 'Holiday Updated',
       icon: 'success',
       confirmButtonText: 'OK',
     });
      this.router.navigate(['Admin/holidays'])
 
     // import Swal from 'sweetalert2';
 
 
 
   })
 
 }

  

}
