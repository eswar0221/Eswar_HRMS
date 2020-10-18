import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-emp-expen',
  templateUrl: './emp-expen.component.html',
  styleUrls: ['./emp-expen.component.css']
})
export class EmpExpenComponent implements OnInit {

  constructor(private router : Router, private web3: Web3Service ) { }

  Esti:any;
  ngOnInit() {
    this.getDataIndividual()
  }
  addcontact(){
    this.router.navigate(['Admin/addexpenses'])

  }
  getDataIndividual(){

    var TicketId= localStorage.getItem("Email_ID")
    let data={
      "email":TicketId
    }
    this.web3.getExpensesEMAIL(data).subscribe((res)=>{
      console.log(res);   
      this.Esti=res;
      
  
    })
  }
  // getExpenses_ID
  // getExpensesEMAIL









}
