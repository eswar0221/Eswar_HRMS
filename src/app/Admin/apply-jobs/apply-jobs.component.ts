import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply-jobs',
  templateUrl: './apply-jobs.component.html',
  styleUrls: ['./apply-jobs.component.css']
})
export class ApplyJobsComponent implements OnInit {

  file: File;

  constructor(private router:Router,private web3:Web3Service) { }
  incomingFile(event){
    console.log(event);
this.file=(event.target.files[0]);
  }
  getJob_Id:any;

  ServiceData:any={
    // Job_Id:this.getJob_Id
  }
  ngOnInit() {

    this.getDataIndividual()
    // console.log("eswar",this.getJob_Id);
    
    
  }
  
  getDataIndividual(){
  
    var Job_Id= localStorage.getItem("Job_Id")
    let data={
      "Job_Id":Job_Id
    }
    this.web3.getjobsno(data).subscribe((res)=>{
      console.log("getjobsno edit data",res);
      console.log(res);
      
      this.getJob_Id=res[0].Job_Id
      // console.log("dfghjk", this.getJob_Id);
      this.ServiceData=res[0]
localStorage.removeItem("Job_Id")
  
    })
  }



  Send(ServiceData){
    console.log(ServiceData)
        var formData= new FormData()
        formData.append("Job_Id", ServiceData.Job_Id)
    
        formData.append("Name", ServiceData.Name)
        formData.append("Email", ServiceData.Email) 
              
        formData.append("Phone", ServiceData.Phone) 

        formData.append("Message", ServiceData.Message)
      
       
        formData.append("file", this.file,this.file.name)
    this.web3.sendjobApp(formData).subscribe((res)=>{
      console.log(res)


      Swal.fire({
        text: 'Application Sended',
        icon: 'success',
        confirmButtonText: 'OK',
      });
// import Swal from 'sweetalert2';
this.router.navigate(['Admin/jobs'])
localStorage.removeItem("Job_Id")
    
      
    })
      
    
    }

    back(){
this.router.navigate(['Admin/jobs'])
localStorage.removeItem("Job_Id")

    }

}
