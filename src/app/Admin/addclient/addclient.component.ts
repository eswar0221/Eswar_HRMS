import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  file: File;
  ServiceData = {
    firstname : "",
    company_name : "",
    password : "",
    clientid : "",
    
    phone : "",
    lastname : "",
    email : "",
    cpassword : "",
    designation : "",
    // file:"",
    pread:false,
        pwrite:false,
         pcreate:false,
         pdelete:false,

        tread:false,
        twrite:false,
        tcreate:false,
        tdelete:false,
  
        cread:false,
        cwrite:false,
        ccreate:false,
        cdelete:false,



        eread:false,
        ewrite:false,
        ecreate:false,
        edelete:false,


        iread:false,
        iwrite:false,
        icreate:false,
        idelete:false,

        tsread:false,
        tswrite:false,
        tscreate:false,
        tsdelete:false,


  }

  back(){
    this.router.navigate(['Admin/clients'])
  }
  constructor(private router:Router,private web3:Web3Service) { }

  ngOnInit() {
  }
  incomingFile(event){
    console.log(event);
this.file=(event.target.files[0]);
  }


  register(ServiceData){
    // if(ServiceData.pread==""){  
    //   ServiceData.pread=false} 
    // if( ServiceData.pwrite==""){
    //   ServiceData.pwrite=false}
    //   if(ServiceData.pcreate==""){
    //   ServiceData.pcreate=false}
    //   if(ServiceData.pdelete==""){
    //       ServiceData.pdelete=false}

// tasks
// if( ServiceData.tread==""){
// ServiceData.tread=false}
// if(ServiceData.twrite==""){
// ServiceData.twrite=false}
// if(ServiceData.tcreate==""){
// ServiceData.tcreate=false}
// if( ServiceData.tdelete=="" ){  
// ServiceData.tdelete=false}


// // chat
// if(ServiceData.cread==""){
// ServiceData.cread=false}
// if(ServiceData.cwrite==""){
// ServiceData.cwrite=false}
// if(ServiceData.ccreate==""){
// ServiceData.ccreate=false}
// if(ServiceData.cdelete=="" ){
// ServiceData.cdelete=false}

// // Estimates
// if(  ServiceData.eread==""){
//   ServiceData.eread=false}
// if(ServiceData.ewrite==""){
// ServiceData.ewrite=false}
// if(ServiceData.ecreate==""){
// ServiceData.ecreate=false}
// if(ServiceData.edelete==""){
// ServiceData.edelete=false}

// // Invoices
// if(ServiceData.iread==""){
// ServiceData.iread=false}
// if(ServiceData.iwrite=="" ){
// ServiceData.iwrite=false}
// if(ServiceData.icreate==""){
// ServiceData.icreate=false}
// if(ServiceData.idelete==""){
// ServiceData.idelete=false}



// // Timing Sheets
// if(ServiceData.tsread=="" ){
// ServiceData.tsread=false}
// if(ServiceData.tswrite==""){
// ServiceData.tswrite=false}
// if( ServiceData.tscreate==""){
// ServiceData.tscreate=false}
// if(ServiceData.tsdelete == ""){
// ServiceData.tsdelete=false
//     }

    


    console.log("data is",ServiceData);

    this.web3.clientregi(ServiceData).subscribe((res)=>{
      console.log("client respon",res)


      Swal.fire({
        text: 'Client Added',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      this.router.navigate(['Admin/clients'])



    })

  }
  
}