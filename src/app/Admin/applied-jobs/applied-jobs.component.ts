import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {
  appjobs:any;


  constructor(private router:Router,private web3:Web3Service) { }
  getData(){
    this.web3.getSendapplyJobdata().subscribe((res)=>{
  
      this.appjobs=res;
      console.log(res)
    })
  }
  Resume(){
    // this.router.navigate(['Admin/timingsheet'])


  }
  Schedule(employeename){

  }

  ngOnInit() {

   this. getData()
  }

}
