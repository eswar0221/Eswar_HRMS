import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-taxes',
  templateUrl: './edit-taxes.component.html',
  styleUrls: ['./edit-taxes.component.css']
})
export class EditTaxesComponent implements OnInit {
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
// this.getData()
this.gettaxData()
  }
  back(){
    this.router.navigate(['Admin/tax'])
localStorage.removeItem("TAX")
  }
  ServiceData:any={

  }
// Taxadd getTax  updateTaxl delTax getTaxlId

Update(ServiceData){
    console.log(ServiceData);

    
    this.web3.updateTaxl(ServiceData).subscribe((res)=>{
      console.log(res);
      Swal.fire({
        text: 'Tax Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      localStorage.removeItem("TAX")

      this.router.navigate(['Admin/tax'])
      // import Swal from 'sweetalert2';
      
    })


  }
  proje:any;
  gettaxData(){
    this.proje=localStorage.getItem("TAX")

    let data={
      "Tax_Name":this.proje
    }

    this.web3.getTaxlId(data).subscribe((res)=>{
      this.ServiceData=res[0];
     



    })
  }




}
