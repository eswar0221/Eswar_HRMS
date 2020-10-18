import { Component, OnInit } from '@angular/core';
 import { DatepickerOptions } from 'ng2-datepicker';
 import * as deLocale from 'date-fns/locale/de';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';


 import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-holidays',
  templateUrl: './add-holidays.component.html',
  styleUrls: ['./add-holidays.component.css']
})
export class AddHolidaysComponent implements OnInit {

  date; // = new Date();
  DateCreated;

  searchText:any;
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }
  ngOnInit() {
    var year = new Date().getFullYear();
  }
  options: DatepickerOptions = {
    // var year = new Date().getFullYear(),

    minYear: 2000,
    maxYear:  2023, 
    
    displayFormat: 'D.MMMM.YYYY',
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
ServiceData:any={
  Holiday_Date:"",
  Holiday_Name:""

}
tmpe1(){
  this.router.navigate(['Admin/holidays'])

}

register(ServiceData){
  console.log("add regDepartment",ServiceData);


  this.web3.Regholidays(ServiceData).subscribe((res)=>{
    console.log("regDepartment respon",res)

   
    Swal.fire({
      text: 'Holiday Added',
      icon: 'success',
      confirmButtonText: 'OK',
    });
     this.router.navigate(['Admin/holidays'])

    // import Swal from 'sweetalert2';



  })

}

 

}
