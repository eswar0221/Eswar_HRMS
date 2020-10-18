import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-managed-jobs',
  templateUrl: './managed-jobs.component.html',
  styleUrls: ['./managed-jobs.component.css']
})
export class ManagedJobsComponent implements OnInit {

  constructor( private modalService : NgbModal,private router:Router, private web3: Web3Service) { }


  addnewjobs(){
    this.router.navigate(['Admin/addnewjobs'])

  }
  appcandi(){

    this.router.navigate(['Admin/appliedjobs'])

  }
  Job_Id:any;
  row(event){
      
    if(event.target){
      var tr = $(event.currentTarget).closest('tr')
          this.Job_Id = tr.find(".sdf").text(); 
          console.log("wsdftghjuk 222222",this.Job_Id);
          
          let data={
            "Job_Id":this.Job_Id
          }
  
          console.log("Job_Id   sssssssss",data)
          localStorage.setItem("Job_Id",this.Job_Id);
          // alert("hi")
          this.router.navigate(['Admin/editmanagedjobs'])
        }

      }


  JOBS:any;
// jobsadd
// updatejobs
// Job_Title
// getjobsno
// deljobs
getJOBSdata(){
  this.web3.getjobsdata().subscribe((res)=>{
    this.JOBS=res;
    console.log(res);
    
  })
    }



  ngOnInit() {
    this.getJOBSdata()
  }

}









