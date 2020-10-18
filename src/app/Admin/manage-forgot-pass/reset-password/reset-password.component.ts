import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  constructor(private router:Router,private web3:Web3Service,private https:HttpService) { }
  user:any={

  }
  manemail:any;
  alldata:any;
 
  logs(){

    this.router.navigate(['Admin/manlogin'])

  }
  ngOnInit() {
    this.manemail=localStorage.getItem("manemail")
console.log(this.manemail);
this.getdata()
this.dataget()
  }
  ServiceData:any={
    email:localStorage.getItem("manemail"),
  }
  getdata(){
    this.web3.getmemployees().subscribe((res)=>{
      this.alldata=res;
      console.log(res);
      
    })
      }
      getuser:any;cpass:any;
      dataget(){
this.getuser=localStorage.getItem("manemail")
      
          let data={
            "email":this.getuser
          }
      
          this.web3.gethmByname(data).subscribe((res)=>{
            // this.ServiceData=res[0];
            this.cpass=res[0].cpassword
            localStorage.setItem("Emp_id",res[0].employeeid)
            console.log(res);
          })
     
      }


// modifydata  getmempbyname delmemployee getmempbyid Manregister Mlogin getmemployees updatemreg
updatepass(ServiceData){
  console.log(ServiceData);
  if(ServiceData.Old_Password == this.cpass){
let data = {
  email : ServiceData.email  ,
  cpassword :ServiceData.password 
}
    this.web3.updatehrpass(data).subscribe((res)=>{
      console.log("up date ghn tick",res)
     var Emp_ids= localStorage.getItem("Emp_id")
      let user = {
        email: ServiceData.email,
        // name: result[1],
        id: Emp_ids,
        pass:ServiceData.cpassword,
        }
        console.log("this is from user",user);
        
            this.https.sendEmail("http://103.67.238.176:8000/sendmail", user).subscribe(
        data => {
          let res:any = data; 
          console.log(
          `👏 > 👏 > 👏 > 👏 ${user.email} is successfully register and mail has been sent and the message id is ${res.messageId}`
          );
        },
        err => {
          console.log(err);
        },() => {
        }
        );

      

      Swal.fire({
        text: 'Password Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
    this.router.navigate(['Admin/hrmanDashboard'])
    // import Swal from 'sweetalert2';

    })

  }

  else{
    alert("old password wroung")
  }
}
}
