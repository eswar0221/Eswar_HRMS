import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  file: File;
  ServiceData = {
    firstname : "",
    company_name : "",
    password : "",
    Employeeid : "",
    
    phone : "",
    lastname : "",
    email : "",
    cpassword : "",
    role : "",
    // file:"",
       eread:false,
        ewrite:false,
         ecreate:false,
         edelete:false,

        hread:false,
        hwrite:false,
        hcreate:false,
        hdelete:false,
  
        lrread:false,
        lrwrite:false,
        lrcreate:false,
        lrdelete:false,



        evread:false,
        evwrite:false,
        evcreate:false,
        evdelete:false,


        // iread:false,
        // iwrite:false,
        // icreate:false,
        // idelete:false,

        // tsread:false,
        // tswrite:false,
        // tscreate:false,
        // tsdelete:false,


  }



  constructor(private router:Router,private web3:Web3Service) { }
  back(){
    this.router.navigate(['Admin/users'])
  }

  register(ServiceData){
    console.log("add useer",ServiceData);


    this.web3.userregi(ServiceData).subscribe((res)=>{
      console.log("client respon",res)


      Swal.fire({
        text: 'User Added',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      this.router.navigate(['Admin/users'])

      // import Swal from 'sweetalert2';


    })



    
  }


  ngOnInit() {
  }

}
