import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-hr-leaves',
  templateUrl: './all-hr-leaves.component.html',
  styleUrls: ['./all-hr-leaves.component.css']
})
export class AllHRLeavesComponent implements OnInit {

 
  empreg:Boolean;
  empsal:Boolean;
  empbank:Boolean;
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }

  
    ngOnInit() {
    }
    empregs(){
  this.empreg=true;
  this.empsal=false
  this.empbank=false
  
  }
  empsals(){
    this.empreg=false;
    this.empsal=true
    this.empbank=false 
  }
  empbanks(){
    this.empreg=false;
  this.empsal=false
  this.empbank=true
  }
  //  addleaverequest
  tmpe(){
    this.router.navigate(['Admin/hrleaverequest'])

  }

}
