import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-emp-viewtickets',
  templateUrl: './emp-viewtickets.component.html',
  styleUrls: ['./emp-viewtickets.component.css']
})
export class EmpViewticketsComponent implements OnInit {

 
constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }
back(){
  this.router.navigate(['Admin/addtickets'])
}
sats:any;
getData(){
  this.web3.ticketdata().subscribe((res)=>{

    // this.sats=res;
    console.log(res)
  })
}
ServiceData:any;
getDataIndividualtic(){

  var TicketId= localStorage.getItem("Email_ID")
  let data={
    "email":TicketId
  }
  this.web3.getTicketemial(data).subscribe((res)=>{
    console.log(res);
    
  this.sats=res
   
  })
}

  ngOnInit() {
    this.getDataIndividualtic()
  }
  // empviewtickets
}
