import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
  import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-hr-manager',
  templateUrl: './edit-hr-manager.component.html',
  styleUrls: ['./edit-hr-manager.component.css']
})
export class EditHrManagerComponent implements OnInit {

  constructor(private router : Router, private web3: Web3Service) { }
  universities: Array<any> = []
  ServiceData:any={

  }
  ngOnInit() {

    this.getDataIndividual()
  }
// hrmanreg  hrlogin  gethrman  gethmbyid gethmByname  delhremployee  updatehrman

getDataIndividual(){

  var id= localStorage.getItem("caseno")
  let data={
    "employeeid":id
  }
  this.web3.gethmbyid(data).subscribe((res)=>{
  //  this.DataById=res[0].email;
  this.ServiceData=res[0]
  
    console.log(res[0])
   

  })
}
register(ServiceData){
  console.log(ServiceData)
   
  this.web3.updatehrman(ServiceData).subscribe((res)=>{
    console.log(res)
    Swal.fire({
      text: 'Employee Updated',
      icon: 'success',
      confirmButtonText: 'OK',
  // import Swal from 'sweetalert2';
      
    });
  })
    
  
  }
  back(){
    this.router.navigate(['Admin/hrman'])

  }
}
