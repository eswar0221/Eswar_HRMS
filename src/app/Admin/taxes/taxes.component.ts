import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
      import Swal from 'sweetalert2';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent implements OnInit {
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
this.getData()

  }
  addcontact(){
    this.router.navigate(['Admin/addtax'])

  }
  taxes:any;
  getData(){
    this.web3.getTax().subscribe((res)=>{

      this.taxes=res;
      console.log("taxes",res)
    })
  }

// Taxadd getTax  updateTaxl delTax getTaxlId


taxid:any
edit(event){
  if(event.target){
  var tr = $(event.currentTarget).closest('tr')
      this.taxid = tr.find(".case").text(); 
      // let data={
      //   "casenum":this.taxid
      // }
      console.log("caseeeeeeeeeeee",this.taxid)
      localStorage.setItem("TAX",this.taxid);

  this.router.navigate(["Admin/edittax"])

  }
}

del(Tax_Name){
  localStorage.setItem("TAX",Tax_Name)
  this.taxid=localStorage.getItem("TAX")
  var rv=window.confirm("You want to delete?")
  if(rv)
  {
    let data={
      "Tax_Name":this.taxid
    }
   console.log("data   ",data);
   
    this.web3.delTax(data).subscribe(res=>{
      // alert(dt.msg)
      console.log("dell data",res);
      localStorage.removeItem("taxid")
      Swal.fire({
        text: 'Tax Deleted',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      // import Swal from 'sweetalert2';
      this.getData();

    })
  }
}














}
