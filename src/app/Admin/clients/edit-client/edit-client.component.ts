import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  ServiceData:any = {
    // pread:true,

    // firstname : "",
    // company_name : "",
    // password : "",
    // clientid : "",
    
    // phone : "",
    // lastname : "",
    // email : "",
    // cpassword : "",
    // designation : "",
    // // file:"",
    //  pread:"",
    //     pwrite:"",
    //      pcreate:"",
    //      pdelete:"",

    //     tread:"",
    //     twrite:"",
    //     tcreate:"",
    //     tdelete:"",
  
    //     cread:"",
    //     cwrite:"",
    //     ccreate:"",
    //     cdelete:"",



    //     eread:"",
    //     ewrite:"",
    //     ecreate:"",
    //     edelete:"",


    //     iread:"",
    //     iwrite:"",
    //     icreate:"",
    //     idelete:"",

    //     tsread:"",
    //     tswrite:"",
    //     tscreate:"",
    //     tsdelete:"",


  }
  // ServiceData.pread:any;
  constructor(private router:Router,private web3:Web3Service) { }
  ngOnInit() {
    this.getDataIndividual()
  }


  back(){
    this.router.navigate(['Admin/clients'])
  }
  getDataIndividual(){

    var clientid= localStorage.getItem("clientid")
    let data={
      "clientid":clientid
    }
    this.web3.getClientId(data).subscribe((res)=>{
      console.log("wetfgvjhn74",res);
      
    //  this.DataById=res[0].email;
    // if(res[0].project[0].pread==false){
    //   this.ServiceData.pread==true
    //   console.log("dsfgh 84",this.ServiceData.pread);
    
    //   }
    
    this.ServiceData=res[0]
    // console.log("rdtfgbuhjn80",res[0].project[0].pread);
    
  
      console.log("edit_client",res[0])

     
  
    })
  }
  // updateclent
  update(data){
    console.log(data);
    
    this.web3.updateclent(data).subscribe((res)=>{
      console.log("up date ghn client",res)


      

      Swal.fire({
        text: 'client Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      this.router.navigate(['Admin/clients'])


    })
    
    }





  }
 


