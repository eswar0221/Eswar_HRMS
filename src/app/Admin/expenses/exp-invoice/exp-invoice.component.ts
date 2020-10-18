import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-exp-invoice',
  templateUrl: './exp-invoice.component.html',
  styleUrls: ['./exp-invoice.component.css']
})
export class ExpInvoiceComponent implements OnInit {

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }
  view:Array<any>=[];
  ServiceData:any={

  }
  exid:any;
  ngOnInit() {
    this.getDataIndividual()
  }
   
back(){
  this.router.navigate(['Admin/expenses'])

}
  getDataIndividual(){
  
    var estim= localStorage.getItem("expinvoice_id")
    let data={
      "Expensives_ID":estim
    }
    this.web3.getExpenses_ID(data).subscribe((res)=>{
      this.view=res
this.exid=res.Expensives_ID
console.log("exp id",this.exid);

this.ServiceData.Status=res.Status
this.ServiceData=res
this.ServiceData.Expensives_ID=res.Expensives_ID

      console.log("Expenses_ID 1 data Expensives_ID", this.view);

    })} 
    stat:any;
    espids:any;
    asset(){
      this.stat=this.ServiceData.Status
      this.espids=this.ServiceData.Expensives_ID
            let data={
             "Expensives_ID":this.espids,
             "Status":this.stat
            }
            this.web3.updateExpenses(data).subscribe(res=>{
              console.log("res",res);
            });
    }
}
