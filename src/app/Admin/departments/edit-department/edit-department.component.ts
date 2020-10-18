import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
   import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  ServiceData:any={

  }
  constructor( private web3:Web3Service,private router:Router) { }
  ngOnInit() {
    this.getDataIndividual()
  }


  tmpe1(){
    this.router.navigate(['Admin/department'])
  }
  getDataIndividual(){

    var Department= localStorage.getItem("Department")
    let data={
      "department":Department
    }
    this.web3.getDepartmentid(data).subscribe((res)=>{
      console.log("department data",res);
      
    //  this.DataById=res[0].email;
    // if(res[0].project[0].pread==false){
    //   this.ServiceData.pread==true
    //   console.log("dsfgh 84",this.ServiceData.pread);
    
    //   }
    
    this.ServiceData=res[0]
    // console.log("rdtfgbuhjn80",res[0].project[0].pread);
    
  
      console.log("department res",res[0])

     
  
    })
  }



  update(data){

    console.log(data);
    
    this.web3.updateDepartment(data).subscribe((res)=>{
      console.log("up date ghn department",res)


      

      Swal.fire({
        text: 'department Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      this.router.navigate(['Admin/department'])
      // import Swal from 'sweetalert2';


    })
    


  }



}
