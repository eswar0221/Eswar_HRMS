import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
   import Swal from 'sweetalert2';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
tmp:boolean;
ServiceData:any={
  department:''
}
  constructor(private router:Router, private web3:Web3Service) { }
 
  ngOnInit() {
    this.getData()

  }
  tmpe1(){
    this.tmp=true
  }

  tmpe(){
    this.tmp=false
   

  }
  clear(ServiceData){
    ServiceData.department = ""
  }



  register(ServiceData){

    console.log("add regDepartment",ServiceData);


    this.web3.regDepartment(ServiceData).subscribe((res)=>{
      console.log("regDepartment respon",res)

     
      Swal.fire({
        text: 'Department Added',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      // this.router.navigate(['Admin/users'])

      // import Swal from 'sweetalert2';
      this.tmpe1()
     
      this.clear(ServiceData)


    })

  }
  Depar:any;
  getData(){
    this.web3.getDepartment().subscribe((res)=>{
  
      this.Depar=res;
      console.log("getDepartment",res)
    })
  }
  Department:any;
  
  row(department){
   
   
        console.log("wsdftghjuk 222222",department);
        
      

        // console.log("Department   sssssssss",data)
        localStorage.setItem("Department",department);
        // alert("hi")
        this.router.navigate(['Admin/editdepartment'])
      
  }



  Departme:any;
  deleteRow(department){
    localStorage.setItem("Department",department)
    this.Departme=localStorage.getItem("Department")
    var rv=window.confirm("You want to delete?")
    if(rv)
    {
      let data={
        "department":this.Departme
      }
     console.log("data   ",data);
     
      this.web3.delDepartment(data).subscribe(res=>{
        // alert(dt.msg)
        console.log("dell data",res);
        localStorage.removeItem("Department")
        this.getData()
      })
    }
  }
  












}
