import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
  this.getJOBSdata()

  }
  JOBS:any;
  getJOBSdata(){
    this.web3.getjobsdata().subscribe((res)=>{
      this.JOBS=res;
      console.log(res);
      
    })
      }

      applyjo(Job_Id){ 
localStorage.setItem("Job_Id",Job_Id)

    this.router.navigate(['Admin/viewjobs'])


  }

}
