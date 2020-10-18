import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  ServiceData:any={

  }
  constructor(private web3:Web3Service,private router:Router) { }
back(){
  this.router.navigate(['Admin/users'])

}
  ngOnInit() {

    this.getData()
  }
  getData(){
    
    var Employeeid= localStorage.getItem("Employeeid")
    let data={
      "Employeeid":Employeeid
    }
    this.web3.getuserid(data).subscribe((res)=>{
  
      this.ServiceData=res[0];
      console.log(res)
    })
  }
  update(data){
    console.log("update user",data);
    
    this.web3.updateuser(data).subscribe((res)=>{
      console.log("up date ghn updateuser",res)


      

      Swal.fire({
        text: 'User Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      this.router.navigate(['Admin/users'])


    })
    
    }



}
