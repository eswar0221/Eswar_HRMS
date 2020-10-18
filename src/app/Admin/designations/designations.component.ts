import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css']
})
export class DesignationsComponent implements OnInit {

  searchText:any;
  ngOnInit() {
    this.getData()
  }


  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }
  back(){
    this.router.navigate(['Admin/adddesignations'])
  }
  sats:any;
  getData(){
    this.web3.getDesignationsdata().subscribe((res)=>{
  
      this.sats=res;
      console.log(res)
    })
  }
  
  
  design:any;
  row(event){
    if(event.target){
    var tr = $(event.currentTarget).closest('tr')
        this.design = tr.find(".case").text(); 
        console.log("wsdftghjuk 222222",this.design);
        
        let data={
          "Departments":this.design
        }
        console.log("TicketId        sssssssss",data)
        localStorage.setItem("Departments",this.design);
        this.router.navigate(['Admin/editdesignations'])
    }
  }
  
  
  
  deleteRow(event){
    if(event.target){
      var tr = $(event.currentTarget).closest('tr')
          this.design = tr.find(".case").text(); 
          console.log("wsdftghjuk 222222",this.design);
          
    var rv=window.confirm("You want to delete?")
    if(rv)
    {
      let data={
        "Departments":this.design
      }
     console.log("data   ",data);
     
      this.web3.delDesignations(data).subscribe(res=>{
        // alert(dt.msg)
        console.log("dell data",res);
        Swal.fire({
          text: 'Designations Deleted',
          icon: 'success',
          confirmButtonText: 'OK',
    // import Swal from 'sweetalert2';
    // 
          
        });
        this.getData()
      })
    }
  }
  }


// 
// 






































}















