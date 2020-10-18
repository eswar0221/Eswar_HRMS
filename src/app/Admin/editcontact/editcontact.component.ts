import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  file: File;
  // ServiceData:any={
  //   email:"",
  //   employeeid:"",
  //   Phone:"",
  //   firstname:"",
  //   designation:"",
  //   status:""

  // }
  ServiceData:any={

  }
   constructor(private router:Router,private web3:Web3Service) { }
  incomingFile(event){
    console.log(event);
this.file=(event.target.files[0]);
  }
  
  back(){
    this.router.navigate(['Admin/contact'])

  }
  getDataIndividual(){

    var Phone= localStorage.getItem("Phone")
    let data={
      "Phone":Phone
    }
    this.web3.getcontactno(data).subscribe((res)=>{
      console.log(res);
      
    //  this.DataById=res[0].email;
    this.ServiceData=res[0]
     
      console.log(res[0])
     
  
    })
  }
  update(data){
    console.log("update send data",data)
        var formData= new FormData()

        formData.append("firstname", data.firstname)
        formData.append("designation",data.designation)
        formData.append("email", data.email)
        formData.append("employeeid", data.employeeid)       
        formData.append("Phone", data.Phone)
        formData.append("status",data.status)
       
        formData.append("file", this.file,this.file.name)
        console.log("form data",formData);
        
    this.web3.updatecontact(formData).subscribe((res)=>{
      console.log("up;date res ",res)


      Swal.fire({
        text: 'Contact Updated',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    
    this.router.navigate(['Admin/contact'])
      
    })
      




  }
  ngOnInit() {
    this.getDataIndividual()
  }

}
