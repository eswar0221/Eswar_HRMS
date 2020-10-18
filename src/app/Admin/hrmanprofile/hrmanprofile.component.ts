import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-hrmanprofile',
  templateUrl: './hrmanprofile.component.html',
  styleUrls: ['./hrmanprofile.component.css']
})
export class HrmanprofileComponent implements OnInit {

  constructor(private router:Router,private web3:Web3Service) { }


  ngOnInit() {
    this.getDataIndividual()
  }

  profile:any;

  getDataIndividual(){

    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.web3.gethmByname(data).subscribe((res)=>{
    //  this.DataById=res[0].email;
    this.profile=res
    
      console.log(res)
     
  
    })
  }
}
