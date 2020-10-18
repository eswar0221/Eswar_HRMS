import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-manage-login',
  templateUrl: './manage-login.component.html',
  styleUrls: ['./manage-login.component.css']
})
export class ManageLoginComponent implements OnInit {
user:any={

}
  constructor(private router:Router,private web3:Web3Service) { }
  regi(){

    this.router.navigate(['Admin/manregister'])

  }
jobs(){
  this.router.navigate(['Admin/jobs'])


}
  forg(){
  
    this.router.navigate(['Admin/manpassword'])


  }
  ngOnInit() {
  }
  onSubmit(user){
  
this.web3.Mlogin(user).subscribe((res)=>{
  console.log(res)
  console.log("Login Succ",res.token)

  localStorage.setItem("MLogin_token",res.token);
  this.router.navigate(['Admin/jobs'])

  // localStorage.setItem("openadmin", user.email);
  // this.router.navigate(['Admin/admin-dashboard'], { replaceUrl: true });

})
   }









}
