import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
  import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-designations',
  templateUrl: './add-designations.component.html',
  styleUrls: ['./add-designations.component.css']
})
export class AddDesignationsComponent implements OnInit {

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }

  ServiceData:any={

  }

  back(){
    this.router.navigate(['Admin/designations'])

  }
  ngOnInit() {
  }
//   
register(ServiceData){
  console.log("add regDepartment",ServiceData);


  this.web3.RegDesignations(ServiceData).subscribe((res)=>{
    console.log("regDepartment respon",res)

   
    Swal.fire({
      text: 'designations Added',
      icon: 'success',
      confirmButtonText: 'OK',
    });
     this.router.navigate(['Admin/designations'])

    // import Swal from 'sweetalert2';
  })

}













}
