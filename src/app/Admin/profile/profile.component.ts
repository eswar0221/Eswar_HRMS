import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  lpass:string="John Doe"
phone:any=9876543210
email:any="johndoe@example.com"
address="1861 Bayonne Ave, Manchester Township, NJ, 08759"
  designation:string="Web Designer"
  gender:any="Male"
  institution:any="International College of Arts and Science (UG)"
  jdate:any=2008;
  rdate:any=2013;
  cource:any="Bsc Computer Science"
  jposition:any="Web Devloper"
  comname:any="Zen Corporation"
  periodfrom:any="Jan 2013"

  periodto:any="Mar 2016"

z=1;
tmp:boolean=false

file: File;



ServiceData = {
  firstname : "",
  username : "",
  password : "",
  employeeid : "",
  company : "",
  phone : "",
  lastname : "",
  email : "",
  cpassword : "",
  designation : "",

}
constructor(private router:Router,private web3:Web3Service) { }

  editprofile1(){
    
  this.tmp=true;
  
  }
  editprofile(){
    this.router.navigate(['Admin/editprofile'])

  }
  viewprofile(){
    this.tmp=false
  }
  ngOnInit() {
  }

}
