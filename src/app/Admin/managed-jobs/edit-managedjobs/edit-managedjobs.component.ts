import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-managedjobs',
  templateUrl: './edit-managedjobs.component.html',
  styleUrls: ['./edit-managedjobs.component.css']
})
export class EditManagedjobsComponent implements OnInit {

  constructor( private modalService : NgbModal,private router:Router, private web3: Web3Service) { }


  back(){
    this.router.navigate(['Admin/managedjobs'])

  }
  ngOnInit() {
    this.getDataIndividual()
  }
  ServiceData:any={}
// jobsadd
// updatejobs
// Job_Title
// getjobsno
  getDataIndividual(){
  
    var Job_Id= localStorage.getItem("Job_Id")
    let data={
      "Job_Id":Job_Id
    }
    this.web3.getjobsno(data).subscribe((res)=>{
      console.log("getjobsno edit data",res);
      
    //  this.DataById=res[0].email;
    // if(res[0].project[0].pread==false){
    //   this.ServiceData.pread==true
    //   console.log("dsfgh 84",this.ServiceData.pread);
    
    //   }
    
    this.ServiceData=res[0]
    // console.log("rdtfgbuhjn80",res[0].project[0].pread);
    
  
      console.log("Job_Id edit res",res[0])

     
  
    })
  }


  Update(data){
 console.log("add up holiday",data);


 this.web3.updatejobs(data).subscribe((res)=>{
   console.log("up updatejobs respon",res)

  
   Swal.fire({
     text: 'Jobs Updated',
     icon: 'success',
     confirmButtonText: 'OK',
   });
   localStorage.removeItem("Job_Id")
    this.router.navigate(['Admin/managedjobs'])

   // import Swal from 'sweetalert2';



 })

}











}
