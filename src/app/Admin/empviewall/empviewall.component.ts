import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-empviewall',
  templateUrl: './empviewall.component.html',
  styleUrls: ['./empviewall.component.css']
})
export class EmpviewallComponent implements OnInit {

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

  tmpe(){
    this.router.navigate(['Admin/empregall'])

  }
}
