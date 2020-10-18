import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
      import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-taxes',
  templateUrl: './add-taxes.component.html',
  styleUrls: ['./add-taxes.component.css']
})
export class AddTaxesComponent implements OnInit {

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
// this.getData()

  }
  back(){
    this.router.navigate(['Admin/tax'])

  }
  ServiceData:any={

  }
  register(ServiceData){
    console.log(ServiceData);

  
    
    this.web3.Taxadd(ServiceData).subscribe((res)=>{
      console.log(res);
      
      Swal.fire({
        text: 'Tax Added',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      this.router.navigate(['Admin/tax'])
      // import Swal from 'sweetalert2';


      
    })


  }







}
