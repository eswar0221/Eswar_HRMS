import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-designations',
  templateUrl: './edit-designations.component.html',
  styleUrls: ['./edit-designations.component.css']
})
export class EditDesignationsComponent implements OnInit {

 constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }

 ServiceData:any={

  Designation_Name:'',
  Departments:''

}
// updateDesignations
// 

ngOnInit() {
  this.getDataIndividual()
}


back(){
  this.router.navigate(['Admin/designations'])
}
getDataIndividual(){

  var clientid= localStorage.getItem("Departments")
  let data={
    "Departments":clientid
  }
  this.web3.getDesignationsno(data).subscribe((res)=>{
    console.log("wetfgvjhn74",res);
    
  //  this.DataById=res[0].email;
  // if(res[0].project[0].pread==false){
  //   this.ServiceData.pread==true
  //   console.log("dsfgh 84",this.ServiceData.pread);
  
  //   }
  
  this.ServiceData=res[0]
  // console.log("rdtfgbuhjn80",res[0].project[0].pread);
  

    console.log("editDesignations",res[0])

   

  })
}
// updateclent
update(ServiceData){
  console.log(ServiceData);
  
  this.web3.updateDesignations(ServiceData).subscribe((res)=>{
    console.log("up date ghn client",res)


    

    Swal.fire({
      text: 'Designations Updated',
      icon: 'success',
      confirmButtonText: 'OK',
// import Swal from 'sweetalert2';
// 
      
    });
    this.router.navigate(['Admin/designations'])


  })
  
  }


}
