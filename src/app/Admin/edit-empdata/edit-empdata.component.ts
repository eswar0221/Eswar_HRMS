import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-empdata',
  templateUrl: './edit-empdata.component.html',
  styleUrls: ['./edit-empdata.component.css']
})
export class EditEmpdataComponent implements OnInit {
  Tea:Boolean;
  hrs:Boolean;
 
  file: File;
  DataById: any;
  data: any;
  name: any;
  empRegistrationForm: any;

  constructor(private router : Router, private web3: Web3Service) { }
  universities: Array<any> = []

  ngOnInit() {

    this.getDataIndividual()
    this.getempData()
    this.gethrData()
    this.Tea=false;
    this.hrs=false;
    // var token = localStorage.getItem("token");
    // var decoded = jwt_decode(token); 
    // console.log(decoded.iat); 
    // var d=new Date(decoded.iat)
    // console.log('time111111111111'+d);
  
  //  this.get()
  }
  back(){
    this.router.navigate(['Admin/transaction-list'])
  localStorage.removeItem("caseno")

  }

  incomingFile(event){
    console.log(event);
this.file=(event.target.files[0]);
  }

  ServiceData = {
    // firstname : "",
    // username : "",
    // password : "",
    // employeeid : "",
    // company : "",
    // phone : "",
    // lastname : "",
    // email : "",
    // cpassword : "",
    // designation : "",
  
  }
  clear(ServiceData){
    ServiceData.firstname = "",
  ServiceData.username = "",
  ServiceData.password = "",
  ServiceData.employeeid = "",  
  ServiceData.company = "",
  ServiceData.phone = "",
  ServiceData.lastname = "",
  ServiceData.email = "",
  ServiceData.cpassword = "",
  ServiceData.designation = ""
     
  }
  public error_message;
  public show : boolean = false;
  eid:any; 
  onChange1(event){
    this.eid=event.target.value
if(this.eid =="Team_Lead"){
this.Tea=true;
this.hrs=false;
}
if(this.eid !== "Team_Lead" ){
  this.hrs=true
this.Tea=false;

}
  }
  hrdata:any;
  gethrData(){
    this.web3.gethrman().subscribe((res)=>{

      this.hrdata=res;
      console.log(res)
    })
  }
//getting data by id

getDataIndividual(){

  var id= localStorage.getItem("caseno")
  let data={
    "employeeid":id
  }
  this.web3.getEmpById(data).subscribe((res)=>{
  //  this.DataById=res[0].email;
  this.ServiceData=res[0]
    // this.ServiceData.firstname=res[0].firstname
    // this.ServiceData.username=res[0].username
    // this.ServiceData.password=res[0].password
    // this.ServiceData.employeeid=res[0].employeeid
    // this.ServiceData.phone=res[0].phone
    // this.ServiceData.lastname=res[0].lastname
    // this.ServiceData.email=res[0].email
    // this.ServiceData.cpassword=res[0].cpassword
    // this.ServiceData.designation=res[0].designation
    // this.ServiceData.company=res[0].company
    console.log(res[0])
   

  })
}

// get(){
//   this.empRegistrationForm.controls['email'].setValue(this.DataById)
// }
empteml:Array<any>=[];
  getempData(){
    this.web3.empregdata().subscribe((resp)=>{

      // this.empdata=resp;
      console.log(resp);
      
      for (let pr = 0; pr < resp.length; pr++) {
        if(resp[pr].designation !=="Devloper" && resp[pr].designation !=="Testing"){
          this.empteml.push(resp[pr].firstname)
          console.log("tema",this.empteml);
          
        }
        
      }
      console.log(resp)
    })
  }

edit(data){
console.log(data)
    // var formData= new FormData()

    // formData.append("firstname", ServiceData.firstname)
    // formData.append("username", ServiceData.username)
   
    // formData.append("employeeid", ServiceData.employeeid)
    // formData.append("company", ServiceData.company)
    // formData.append("phone", ServiceData.phone)
    // formData.append("lastname", ServiceData.lastname)
    // formData.append("email", ServiceData.email)
    // formData.append("cpassword", ServiceData.cpassword)
    // formData.append("designation", ServiceData.designation)
    // // formData.append("file", this.file,this.file.name)
    // formData.append("password", ServiceData.password)
this.web3.sendEditData(data).subscribe((res)=>{
  console.log(res)
  Swal.fire({
    text: 'Employee Updated',
    icon: 'success',
    confirmButtonText: 'OK',
// import Swal from 'sweetalert2';
    
  });
  this.router.navigate(['Admin/empviewall'])
  localStorage.removeItem("caseno")
})
  

}


}
