import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-provident-fund',
  templateUrl: './add-provident-fund.component.html',
  styleUrls: ['./add-provident-fund.component.css']
})
export class AddProvidentFundComponent implements OnInit {
  ServiceData:any={}
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
this.getData()

  }
  back(){
    this.router.navigate(['Admin/pf'])

  }
  empid:any;
  getData(){
    this.web3.empregdata().subscribe((res)=>{

      this.empid=res;
      // console.log(res.employeeid)
      console.log(res);
      
    })
  }

  // getPFId delPF updatePF  getPF  AddPF

  sendpfdata(data){
console.log("pfv fa ad",data);
this.web3.AddPF(data).subscribe(res=>{
console.log("res is ",res);
Swal.fire({
  text: 'PF Added',
  icon: 'success',
  confirmButtonText: 'OK',
  
});
// import Swal from 'sweetalert2';
this.router.navigate(['Admin/pf'])

})
  }
}
