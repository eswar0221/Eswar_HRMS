import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-manage-register',
  templateUrl: './manage-register.component.html',
  styleUrls: ['./manage-register.component.css']
})
export class ManageRegisterComponent implements OnInit {

  constructor(private router:Router,private web3:Web3Service,private https:HttpService) { }
  user:any={

  }
  ServiceData:any={

  }
  logs(){

    this.router.navigate(['Admin/manlogin'])

  }
  ngOnInit() {
  }
// modifydata  getmempbyname delmemployee getmempbyid Manregister Mlogin getmemployees updatemreg

  register(ServiceData){
    console.log("login regin",ServiceData);
 


  
  this.web3.Manregister(ServiceData).subscribe((res)=>{
    console.log(res)
    let user = {
      email: res.email,
      // name: result[1],
      // id: res.Email,
      pass:res.cpassword,
      }
      console.log("this is from user",user);
      
          this.https.sendEmail("http://103.67.238.176:8000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
        `👏 > 👏 > 👏 > 👏 ${user.email} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      },() => {
      }
      );
    Swal.fire({
      text: 'Management Register',
      icon: 'success',
      confirmButtonText: 'OK',
      
    });
    this.router.navigate(['Admin/manregister'])
// import Swal from 'sweetalert2';
  
  })
    
  
  }





}
