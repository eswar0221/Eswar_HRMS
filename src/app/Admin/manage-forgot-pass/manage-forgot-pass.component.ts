import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-manage-forgot-pass',
  templateUrl: './manage-forgot-pass.component.html',
  styleUrls: ['./manage-forgot-pass.component.css']
})
export class ManageForgotPassComponent implements OnInit {

  constructor(private router:Router,private web3:Web3Service) { }
user:any={
  
}
  ngOnInit() {
    this.user.email=localStorage.getItem("Email_ID")
  }
  logs(){
    this.router.navigate(['Admin/manlogin'])
    
  } 
  resetpass(){
    // alert("hi")
  }
  manemail:any;
// modifydata  getmempbyname delmemployee getmempbyid Manregister Mlogin getmemployees updatemreg
onSubmit(email){
  console.log(email);  
    let data={
      "email":email
    }
    this.web3.gethmByname(data).subscribe((res)=>{
      // this.ServiceData=res[0];
      this.manemail=res[0].email
      console.log(res);
      
      console.log("manemail",res[0].email);
// localStorage.setItem("emails",email)
      if(res.length > 0){
      localStorage.setItem("manemail",res[0].email)
    this.router.navigate(['Admin/resetpass'])
     
      }

    })
  

}









}

