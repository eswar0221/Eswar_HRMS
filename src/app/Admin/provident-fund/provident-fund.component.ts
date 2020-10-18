import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
        import Swal from 'sweetalert2';

@Component({
  selector: 'app-provident-fund',
  templateUrl: './provident-fund.component.html',
  styleUrls: ['./provident-fund.component.css']
})
export class ProvidentFundComponent implements OnInit {

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
this.getData()


  }
  addcontact(){
    this.router.navigate(['Admin/addpf'])

  }
  pf:any;
  getData(){
    this.web3.getPF().subscribe((res)=>{

      this.pf=res;
      // console.log(res.employeeid)
      console.log("sxedcfvgbhjn pf",res);
      
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
  
    this.router.navigate(["Admin/editpf"])
  
    }
  }
  
  deleteRow(Employee_Name){
    localStorage.setItem("PF",Employee_Name)
    this.pfid=localStorage.getItem("PF")
    var rv=window.confirm("You want to delete?")
    if(rv)
    {
      let data={
        "Employee_Name":this.pfid
      }
     console.log("data   ",data);
     
      this.web3.delPF(data).subscribe(res=>{
        // alert(dt.msg)
        console.log("dell data",res);
        localStorage.removeItem("PF")
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
