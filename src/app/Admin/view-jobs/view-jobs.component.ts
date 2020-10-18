import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {

  constructor(private router:Router,private web3:Web3Service) { }


  ngOnInit() {
    this.getJOBSdata()
 
    this.getDataIndividual()
    
      }
      datas:any;

      getDataIndividual(){
    
        var Job_Id= localStorage.getItem("Job_Id")
        let data={
          "Job_Id":Job_Id
        }
        console.log(data);
        this.web3.getjobsno(data).subscribe((res)=>{
          console.log("Job_Id edit data",res);
          this.datas=res
          // localStorage.removeItem("Job_Id")
        //  this.DataById=res[0].email;
        // if(res[0].project[0].pread==false){
        //   this.ServiceData.pread==true
        //   console.log("dsfgh 84",this.ServiceData.pread);
        
        //   }
        
        // this.ServiceData=res[0]
        // console.log("rdtfgbuhjn80",res[0].project[0].pread);
        
      
          // console.log("Job_Id edit res",res[0])
    
         
      
        })
      }
  
      // applyjobs(x.Job_Id)
  applyjobs(Job_Id){
    localStorage.setItem("Job_Id",Job_Id)
    this.router.navigate(['Admin/applyjobs'])

  }
  JOBS:any;
  getJOBSdata(){
    this.web3.getjobsdata().subscribe((res)=>{
      this.JOBS=res;
      console.log(res);
      
    })
      }
  


}
