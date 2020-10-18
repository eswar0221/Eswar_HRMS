import { Component, OnInit } from '@angular/core';

import { DatepickerOptions } from 'ng2-datepicker';
import * as deLocale from 'date-fns/locale/de';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
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
    addStyle: {"padding-left":"50px","width":"310px","height":"45px", "border-radius": "5px" }, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
  };
//   import { DatepickerOptions } from 'ng2-datepicker';
// import * as deLocale from 'date-fns/locale/de';
  empid:any;
  sats: any;
data:any;




constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }
back(){
  this.router.navigate(['Admin/addtickets'])
}

getData(){
  this.web3.ticketdata().subscribe((res)=>{

    this.sats=res;
    console.log(res)
  })
}



row(event){
  if(event.target){
  var tr = $(event.currentTarget).closest('tr')
      this.empid = tr.find(".case").text(); 
      console.log("wsdftghjuk 222222",this.empid);
      
      let data={
        "TicketId":this.empid
      }
      console.log("TicketId        sssssssss",data)
      localStorage.setItem("TicketId",this.empid);
      this.router.navigate(['Admin/edittickets'])
  }
}



deleteRow(event){
  if(event.target){
    var tr = $(event.currentTarget).closest('tr')
        this.empid = tr.find(".case").text(); 
        console.log("wsdftghjuk 222222",this.empid);
        
  var rv=window.confirm("You want to delete?")
  if(rv)
  {
    let data={
      "TicketId":this.empid
    }
   console.log("data   ",data);
   
    this.web3.delticketid(data).subscribe(res=>{
      // alert(dt.msg)
      console.log("dell data",res);
      
      this.getData()
    })
  }
}
}











  ngOnInit() { 
    this.getData()
  }

}
