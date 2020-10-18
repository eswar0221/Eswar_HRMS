import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ModalDismissReasons, NgbModalOptions, NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-emp-payslip',
  templateUrl: './emp-payslip.component.html',
  styleUrls: ['./emp-payslip.component.css']
})
export class EmpPayslipComponent implements OnInit {
  clockHandle:any;
  today4e:any;
  oday_Date:any;
  range = [];
  gtyu:Boolean;
  ghjklj:Boolean;
    // year:any;
  // 'dd-MM-yyyy'
  constructor(private router: Router,private http:Web3Service,private datePipe: DatePipe,private toastr: ToastrService, private modalService: NgbModal,public dialog: MatDialog)
   { 
    // this.oday_Date =this.datePipe.transform( new Date(),'yyyy-MM-dd  h:mm:ss');
    // console.log(this.oday_Date);
    var year = new Date().getFullYear();
    
    for (var i = 2015; i < year +1; i++) {
        this.range.push(i);
    }
    
    
 }
 months:Array<any> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 dmonth
 fffgg(){
   for (let m = 2017; m = 2027; m++){
    
2017    
   }
 }
  date =new  Date('MMMM-yyyy');

 ServiceData:any={
  // year:
  // today_Date: this.datePipe.transform( new Date(),'MMMM-yyyy'),
  // Hours: this.datePipe.transform( new Date(),' hh'),
    }
ngOnInit(){
  this.gtyu=true;
  this.ghjklj=false;
  this.clockHandle = setInterval(()=>{
    this.today4e =this.datePipe.transform( new Date(),'yyyy-MM-dd  h:mm:ss').toLocaleString();
  },1000);
  }
  closing(){
    this.gtyu=false;
    this.ghjklj=true;
    this.modalReference.close();
   }
  //  hhhhiiii(){
    
  //   this.openLargeModalPopup(content)
  //  }
   
     // modal
     modalReference: NgbModalRef;       // modal popup refrence variable
     closeResult: string;         // modal pop up close string
     openLargeModalPopup(content) {
    
       this.modalReference = this.modalService.open(content, { size: 'xl' });
       this.modalReference.result.then((result: any) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }
     openMediumModalPopup(content) {
       let ngbModalOptions: NgbModalOptions = {
         backdrop: 'static',
         keyboard: false,
       };
       this.modalReference = this.modalService.open(content, ngbModalOptions);
       this.modalReference.result.then((result: any) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }
     private getDismissReason(reason: any): string {
       if (reason === ModalDismissReasons.ESC) {
         return 'by pressing ESC';
       }
       else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
         return 'by clicking on a backdrop';
       } else {
         return `with: ${reason}`;
       }
     }
   





}
