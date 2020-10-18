import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
  import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  empid:any;
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }

  ServiceData:any={

  }

  back(){
    this.router.navigate(['Admin/tasks'])

  }
  ngOnInit() {
    this.getData();

  }
  getData(){
    this.web3.empregdata().subscribe((res)=>{

      this.empid=res;
      console.log(res)
    })
  }
  getEmpname(event){
console.log(event);


  // var id= localStorage.getItem("caseno")
  let data={
    "employeeid":event
  }
  this.web3.getEmpById(data).subscribe((res)=>{

  this.ServiceData.Employee_Name=res[0].firstname
  this.ServiceData.email=res[0].email
 
    // console.log(res[0].firstname)
   

  })


  }
  

register(ServiceData){
  console.log("add regDepartment",ServiceData);


  this.web3.AddTasks(ServiceData).subscribe((res)=>{
    // console.log("AddTasks respon",res)

   
    Swal.fire({
      text: 'Task Added',
      icon: 'success',
      confirmButtonText: 'OK',
    });
     this.router.navigate(['Admin/tasks'])

    // import Swal from 'sweetalert2';
  })

}
// AddTasks updateTask    gettasks  delTasks   getTaskID

}