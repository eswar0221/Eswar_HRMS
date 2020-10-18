import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-view-tasks',
  templateUrl: './emp-view-tasks.component.html',
  styleUrls: ['./emp-view-tasks.component.css']
})
export class EmpViewTasksComponent implements OnInit {
  ServiceData:any
  tableSEcond_tab:Boolean;
  constructor(private modalService : NgbModal, private web3: Web3Service,private router:Router) {


  }
  ngOnInit() {
    // this.getData();
    this.getDataIndividual();

    
    $('.tabs a').on('click', function(){
      $('.tabs .active').removeClass('active');
      $(this).addClass('active');
    });
    this.tableSEcond_tab = true;
   
 
   
  }
  sats:any;
  // getData(){
  //   this.web3.gettasks().subscribe((res)=>{

  //     this.sats=res;
  //     console.log(res)
  //   })
  // }
  empid:any;
navigate(){
  // this.router.navigate(["Admin/addtasks"])
}
// AddTasks updateTask    gettasks  delTasks   getTaskID
row(event){
  if(event.target){
    var tr = $(event.currentTarget).closest('tr')
        this.empid = tr.find(".case").text(); 
        let data={
          "casenum":this.empid
        }
        console.log("caseeeeeeeeeeee",data)
        localStorage.setItem("caseno1_e",this.empid);
        this.router.navigate(["Admin/empedittasks"])
  
    }
}

getDataIndividual(){

  var id= localStorage.getItem("Email_ID")
  let data={
    "email":id
  }
  this.web3.getTaskEmail(data).subscribe((res)=>{
  //  this.DataById=res[0].email;
  this.sats=res
   
    // console.log(res[0])
   

  })
}

}
