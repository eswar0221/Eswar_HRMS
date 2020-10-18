import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  searchText:any;
  tableSEcond_tab: boolean;
  secondTable: boolean;
  constructor( private router:Router,private web3:Web3Service) { }
  ngOnInit() { 
    this.getDataq()
    this.getData();
    this.getempData();
  this.tableSEcond_tab = true;

  }
  addcontact(){
    this.router.navigate(['Admin/addcontact'])
  }


  SecondLogo(){
    this.secondTable = false;
    this.tableSEcond_tab = true;
  }
  
  FirstLogo(){
    this.tableSEcond_tab = false;
    this.secondTable = true;
   
  }
  
  cons:any;
  getData(){
    this.web3.getcontactdata().subscribe((res)=>{
  
      // this.cons=res;
      console.log("contact data",res)
    })
  }
  getempData(){
    this.web3.empregdata().subscribe((res)=>{

      this.cons=res;
      console.log(res)
    })
  }
  hrmandata:any;
  getDataq(){
    this.web3.gethrman().subscribe((res)=>{

      this.hrmandata=res;
      console.log(res)
    })
  }
  empid:any;
  row(Phone){
 
  console.log("contgyidycucu",Phone);
  localStorage.setItem("Phone",Phone);
      this.router.navigate(['Admin/editcontact'])
  }
  
  
  ph:any;
  deleteRow(Phone){
  localStorage.setItem("Ph",Phone);
  this.ph=localStorage.getItem("Ph");

    // if(event.target){
    //   var tr = $(event.currentTarget).closest('tr')
    //       this.empid = tr.find(".case").text(); 
    //       console.log("wsdftghjuk 222222",this.empid);
          
    var rv=window.confirm("You want to delete?")
    if(rv)
    {
      let data={
        "Phone":this.ph
      }
     console.log("data   ",data);
     
      this.web3.delphone(data).subscribe(res=>{
        // alert(dt.msg)
        console.log("dell data",res);
        Swal.fire({
          text: 'Contact Deleted',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        this.getData()
      })
    }
  
  }
  
  
  
  
  
  
  
  
  
  
  
  


}
