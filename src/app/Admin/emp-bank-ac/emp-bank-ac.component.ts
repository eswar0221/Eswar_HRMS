import { Component, OnInit } from '@angular/core';
        import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-emp-bank-ac',
  templateUrl: './emp-bank-ac.component.html',
  styleUrls: ['./emp-bank-ac.component.css']
})
export class EmpBankAcComponent implements OnInit {
  // getempbankId delempbank updateempbank  getempbank  Addempbank   getempbankemail

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
this.getData()


  }
  addcontact(){
    this.router.navigate(['Admin/addempbank'])

  }
  pf:Array<any>=[];
  getData(){
    this.web3.getempbank().subscribe((res)=>{
      for (let  ht = 0;  ht < res.length;  ht++) {
        if(res[ht].designation !== "HR"){
          this.pf.push(res[ht])
        }
        
      }
    })
  }
  // getPFId delPF updatePF  getPF  AddPF
  pfid:any
  edit(event){
    if(event.target){
    var tr = $(event.currentTarget).closest('tr')
        this.pfid = tr.find(".case").text(); 
        // let data={
        //   "casenum":this.taxid
        // }
        console.log("caseeeeeeeeeeee",this.pfid)
        localStorage.setItem("PF",this.pfid);
  
    this.router.navigate(["Admin/editempbank"])
  
    }
  }
  
  deleteRow(employeeid){
    localStorage.setItem("EmpBAnk",employeeid)
    this.pfid=localStorage.getItem("PF")
    var rv=window.confirm("You want to delete?")
    if(rv)
    {
      let data={
        "employeeid":this.pfid
      }
    //  console.log("data   ",data);
     
      this.web3.delempbank(data).subscribe(res=>{
        // alert(dt.msg)
        // console.log("dell data",res);
        localStorage.removeItem("EmpBAnk")
        Swal.fire({
          text: 'PF Deleted',
          icon: 'success',
          confirmButtonText: 'OK',
          
        });
        // import Swal from 'sweetalert2';
        this.getData();
  
      })
    }
  }



}
