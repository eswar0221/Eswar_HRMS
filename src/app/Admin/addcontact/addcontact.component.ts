import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  file: File;

  constructor(private router:Router,private web3:Web3Service) { }
  incomingFile(event){
    console.log(event);
this.file=(event.target.files[0]);
  }
  ServiceData:any={

  }
  ngOnInit() {
  }
  back(){
    this.router.navigate(['Admin/contact'])
  }

  register(ServiceData){
    console.log(ServiceData)
        var formData= new FormData()
    
        formData.append("email", ServiceData.email)
        formData.append("employeeid", ServiceData.employeeid)       
        formData.append("Phone", ServiceData.Phone)
        formData.append("firstname", ServiceData.firstname)
        formData.append("designation",ServiceData.designation)
        formData.append("status",ServiceData.status)
       
        formData.append("file", this.file,this.file.name)
    this.web3.Regcontact(formData).subscribe((res)=>{
      console.log(res)


      Swal.fire({
        text: 'Contact Added',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    
      
    })
      
    
    }






}
