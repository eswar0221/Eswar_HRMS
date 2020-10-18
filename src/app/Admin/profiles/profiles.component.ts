import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(private router:Router,private web3:Web3Service) { }


  ngOnInit() {
    this.getDataIndividual()
  }

  editprofile(){
    this.router.navigate(['Admin/editprofiles'])

  }
  // localStorage.setItem("Email_ID",user.email)

  profile:any;
  getDataIndividual(){

    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.web3.getEmpByname(data).subscribe((res)=>{
    //  this.DataById=res[0].email;
   console.log("profile emp data",res);
this.profile=res

   
   
     
  
    })
  }
}

