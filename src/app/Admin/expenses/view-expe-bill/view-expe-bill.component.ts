import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-view-expe-bill',
  templateUrl: './view-expe-bill.component.html',
  styleUrls: ['./view-expe-bill.component.css']
})
export class ViewExpeBillComponent implements OnInit {
  view:Array<any>=[];
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }

  ngOnInit() {

    this.getDataIndividual()
  }
back(){
  this.router.navigate(['Admin/expenses'])

}
  getDataIndividual(){
  
    var estim= localStorage.getItem("Item_Name_id")
    let data={
      "Expensives_ID":estim
    }
    this.web3.getExpenses_ID(data).subscribe((res)=>{
      console.log("Expenses_ID 1 data",res);
      this.view=res
    })}
}
