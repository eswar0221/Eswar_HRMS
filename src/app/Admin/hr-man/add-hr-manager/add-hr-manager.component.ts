import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import { HttpService } from 'src/app/http.service';
import * as jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-hr-manager',
  templateUrl: './add-hr-manager.component.html',
  styleUrls: ['./add-hr-manager.component.css']
})
export class AddHrManagerComponent implements OnInit {
  ServiceData = {
   Reporting_Manager:"Manager",

    // firstname : "",
    // username : "",
    // // password : "",
    // employeeid : "",
    // company : "",
    // phone : "",
    // lastname : "",
    // email : "",
    // // cpassword : "",
    // designation : "",
    // Joining_Date:""
  }
 
  file: File;

  constructor(private router : Router, private web3: Web3Service,private https:HttpService) { }
  universities: Array<any> = []

  ngOnInit() {
    var token = localStorage.getItem("token");
    var decoded = jwt_decode(token); 
    console.log(decoded.iat); 
    var d=new Date(decoded.iat)
    console.log('time111111111111'+d);
    
   
  }
  back(){
    this.router.navigate(['Admin/hrman'])
  }

  incomingFile(event){
    console.log(event);
this.file=(event.target.files[0]);
  }


  clear(ServiceData){
    ServiceData.firstname = "",
  ServiceData.username = "",
  // ServiceData.password = "",
  ServiceData.employeeid = "",  
  ServiceData.company = "",
  ServiceData.phone = "",
  ServiceData.lastname = "",
  ServiceData.email = "",
  // ServiceData.cpassword = "",
  ServiceData.designation = ""
     
  }
  public error_message;
  public show : boolean = false;

  register(ServiceData){
console.log(ServiceData)
    var formData= new FormData()

    formData.append("firstname", ServiceData.firstname)
    // formData.append("username", ServiceData.username)
   
    formData.append("employeeid", ServiceData.employeeid)
    formData.append("company", ServiceData.company)
    formData.append("phone", ServiceData.phone)
    formData.append("lastname", ServiceData.lastname)
    formData.append("email", ServiceData.email)
    // formData.append("cpassword", ServiceData.cpassword)
    formData.append("designation", ServiceData.designation)
    formData.append("file", this.file,this.file.name)
    formData.append("Reporting_Manager", ServiceData.Reporting_Manager)
    formData.append("Joining_Date", ServiceData.Joining_Date)
    formData.append("ctc", ServiceData.ctc)
    
    formData.append("Birthday", ServiceData.Birthday)
    formData.append("Gender", ServiceData.Gender)

this.web3.hrmanreg(formData).subscribe((res)=>{
// this.web3.sendToDB(formData).subscribe((res)=>{

  console.log(res)
  let user = {
    email: res.email,
    // name: result[1],
    id: res.employeeid,
    pass:res.cpassword,
    }
    console.log("this is from user",user);
    
        this.https.sendEmail("http://103.67.238.176:8000/sendmail", user).subscribe(
    data => {
      let res:any = data; 
      console.log(
      `👏 > 👏 > 👏 > 👏 ${user.id} is successfully register and mail has been sent and the message id is ${res.messageId}`
      );
    },
    err => {
      console.log(err);
    },() => {
    }
    );
  Swal.fire({
    text: 'Employee Added',
    icon: 'success',
    confirmButtonText: 'OK',
// import Swal from 'sweetalert2';
    
  });
  this.router.navigate(['Admin/hrman'])

})
  

}
// hrmanreg  hrlogin  gethrman  gethmbyid gethmByname  delhremployee  updatehrman

}
