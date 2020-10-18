import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }

  ServiceData:any={

  }

  back(){
    this.router.navigate(['Admin/tasks'])
   localStorage.removeItem("caseno1")

  }
  ngOnInit() {
    this.getData();
    this.getDataIndividual()
  }
  getData(){
    this.web3.empregdata().subscribe((res)=>{

      this.ServiceData=res[0];
      console.log(res[0])
    })
  }
  getEmpname(event){
console.log(event);


  // var id= localStorage.getItem("caseno1")
  let data={
    "employeeid":event
  }
  this.web3.getEmpById(data).subscribe((res)=>{

  this.ServiceData.Employee_Name=res[0].firstname
 
    console.log(res[0].firstname)
   

  })


  }
// AddTasks updateTask    gettasks  delTasks   getTaskID
getDataIndividual(){

  var id= localStorage.getItem("caseno1")
  let data={
    "Task_Name":id
  }
  this.web3.getTaskID(data).subscribe((res)=>{
  //  this.DataById=res[0].email;
  this.ServiceData=res[0]
   
    console.log(res[0])
   

  })
}

register(ServiceData){
  console.log("add updateTask",ServiceData);


  this.web3.updateTask(ServiceData).subscribe((res)=>{
    console.log("AddTasks respon",res)

   
    Swal.fire({
      text: 'Task Updated',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    //  this.router.navigate(['Admin/tasks'])

    // import Swal from 'sweetalert2';
  })

}

}
