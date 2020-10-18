import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
      import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-provident-fund',
  templateUrl: './edit-provident-fund.component.html',
  styleUrls: ['./edit-provident-fund.component.css']
})
export class EditProvidentFundComponent implements OnInit {

  ServiceData:any={}
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
this.getData()

  }
  back(){
    this.router.navigate(['Admin/pf'])
    localStorage.removeItem("PF")

  }

  sendPfData(data){
    console.log(data);

   
    
    this.web3.updatEPF(data).subscribe((res)=>{
      console.log(res);
      Swal.fire({
        text: 'PF Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      localStorage.removeItem("PF")

      this.router.navigate(['Admin/pf'])
      // import Swal from 'sweetalert2';
      
    })


  }
  proje:any;
  getData(){
    this.proje=localStorage.getItem("PF")

    let data={
      "Employee_Name":this.proje
    }

    this.web3.getPFId(data).subscribe((res)=>{
      this.ServiceData=res[0];
     console.log(res);
     



    })
  }











}
