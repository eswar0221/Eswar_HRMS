import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tableSEcond_tab:Boolean;
  constructor(private modalService : NgbModal, private web3: Web3Service,private router:Router) {


  }
  ngOnInit() {
    this.getData();

    $('.tabs a').on('click', function(){
      $('.tabs .active').removeClass('active');
      $(this).addClass('active');
    });
    this.tableSEcond_tab = true;
   
 
   
  }
  sats:any;
  getData(){
    this.web3.gettasks().subscribe((res)=>{

      this.sats=res;
      console.log(res)
    })
  }
  empid:any;
navigate(){
  this.router.navigate(["Admin/addtasks"])
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
      localStorage.setItem("caseno1",this.empid);
      this.router.navigate(["Admin/edittasks"])

  }
}

deleteRow(event){
  if(event.target){
    var tr = $(event.currentTarget).closest('tr')
        this.empid = tr.find(".case").text(); 
        console.log("wsdftghjuk 222222",this.empid);
        
  var rv=window.confirm("You want to delete?")
  if(rv)
  {
    let data={
      "Employeeid":this.empid
    }
   console.log("data   ",data);
   
    this.web3.delTasks(data).subscribe(res=>{
      // alert(dt.msg)
      console.log("dell data",res);
      
      this.getData()
    })
  }
}
}

}
