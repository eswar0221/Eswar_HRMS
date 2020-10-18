import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  tmp:boolean=true;
  myform: FormGroup;
  
 

  constructor(private router:Router,private web3:Web3Service) { }
  addclient(){
    this.router.navigate(['Admin/adduser'])
  }
  ngOnInit() {

this.getData()

  }
  upda(){
    this.router.navigate(['Admin/editusers'])
  }
  tmpe1(){
    this.tmp=true
  }

  tmpe(){
    this.tmp=false
  }
data:any;
getData(){
  this.web3.getuser().subscribe((res)=>{

    this.data=res;
    console.log(res)
  })
}
empid:any;
row(event){
  if(event.target){
    var tr = $(event.currentTarget).closest('tr')
        this.empid = tr.find(".case").text(); 
        console.log("wsdftghjuk 222222",this.empid);
        
        let data={
          "Employeeid":this.empid
        }
        console.log("Employeeid        sssssssss",data)
        localStorage.setItem("Employeeid",this.empid);
        this.router.navigate(['Admin/editusers'])
    }
    

}

del(event){
  if(event.target){
    var tr = $(event.currentTarget).closest('tr')
        this.empid = tr.find(".case").text(); 
        console.log("wsdftghjuk 222222",this.empid);
        
  var rv=window.confirm("You want to delete?")
  if(rv)
  {
    let data={
      "Employeeid":this.empid
    }
   console.log("data   ",data);
   
    this.web3.deluserid(data).subscribe(res=>{
      // alert(dt.msg)
      console.log("dell data",res);
      Swal.fire({
        text: 'User Deleteds',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      this.getData()
    })
  }
}
      

}














  
}
