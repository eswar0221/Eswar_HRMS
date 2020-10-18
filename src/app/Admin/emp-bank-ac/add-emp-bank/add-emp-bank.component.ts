import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-add-emp-bank',
  templateUrl: './add-emp-bank.component.html',
  styleUrls: ['./add-emp-bank.component.css']
})
export class AddEmpBankComponent implements OnInit {
  // getempbankId delempbank updateempbank  getempbank  Addempbank   getempbankemail getempbankName
  ServiceData:any={}
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
this.getData()

  }
  back(){
    this.router.navigate(['Admin/empbank'])

  }
  empid:any;
  getData(){
    this.web3.empregdata().subscribe((res)=>{
      this.empid=res;      
    })
  }
  eid:any;
  onChange(event){
    console.log("data is",event.target.value);
    this.eid=event.target.value
      let data={
        "firstname":this.eid
      }
      this.web3.getEmpname(data).subscribe((res)=>{
    console.log("fghjkl@@@@@@@@@",res);
    
      this.ServiceData=res[0]
      // this.ServiceData.email=res[0].email
     
        // console.log(res[0].firstname)       
    
      })
    
    
      }

  sendbankdata(data){
console.log("pfv fa ad",data);
this.web3.Addempbank(data).subscribe(res=>{
  if(res.status == "false"){
    Swal.fire({
      text: res.message,
      icon: 'error',
      confirmButtonText: 'OK',
      
    });
  }
  else{
// console.log("res is ",res);
Swal.fire({
  text: 'Emp Bank Added',
  icon: 'success',
  confirmButtonText: 'OK',
  
});}
// import Swal from 'sweetalert2';
this.router.navigate(['Admin/empregall'])

})
  }

}
