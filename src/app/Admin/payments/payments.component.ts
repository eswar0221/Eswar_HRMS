import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
this.getData()

  }
  addcontact(){
    this.router.navigate(['Admin/addtimingsheet'])

  }
  Esti:any;
  getData(){
    this.web3.getEstimartes().subscribe((res)=>{
      this.Esti=res;
      console.log(res);
      
    })
      }

}
