import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-emp-bank',
  templateUrl: './edit-emp-bank.component.html',
  styleUrls: ['./edit-emp-bank.component.css']
})
export class EditEmpBankComponent implements OnInit {
  // getempbankId delempbank updateempbank  getempbank  Addempbank   getempbankemail

  ServiceData:any={}
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
this.getData()

  }
  back(){
    this.router.navigate(['Admin/empbank'])
    localStorage.removeItem("PF")

  }

  sendbankdata(ServiceData){
    console.log(ServiceData);
    this.web3.updateempbank(ServiceData).subscribe((res)=>{
      console.log(res);
      Swal.fire({
        text: 'Emp Bank  Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      localStorage.removeItem("PF")

      this.router.navigate(['Admin/empviewall'])
      // import Swal from 'sweetalert2';
      
    })


  }
  proje:any;
  getData(){
    this.proje=localStorage.getItem("PF")

    let data={
      "employeeid":this.proje
    }

    this.web3.getempbankId(data).subscribe((res)=>{
      this.ServiceData=res[0];
     console.log(res);
    })
  }


}
