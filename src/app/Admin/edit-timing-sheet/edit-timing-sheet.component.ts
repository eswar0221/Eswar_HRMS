import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-timing-sheet',
  templateUrl: './edit-timing-sheet.component.html',
  styleUrls: ['./edit-timing-sheet.component.css']
})
export class EditTimingSheetComponent implements OnInit {

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { 
  }

  ngOnInit() {
    this.getDataIndividual()

  }

  back(){
    localStorage.removeItem("Projec")
    this.router.navigate(['Admin/timingsheet'])
  }
  ServiceData:any={
    // Project:"",
    // Deadline:"",
    // Hours:"",
    // Description:""
  }
  Project:any;
getDataIndividual(){

  this.Project= localStorage.getItem("Project")
  let data={
    "first_Name":this.Project
  }
  console.log(data);
  
  this.web3.getaddtimingsID(data).subscribe((res)=>{
 console.log(res);
 
  this.ServiceData=res[0]
   
    console.log(res[0])
  })
}



edit(data){
console.log(data)
  
this.web3.updateaddtimings(data).subscribe((res)=>{
  console.log(res)
  Swal.fire({
    text: 'Work Sheet Updated',
    icon: 'success',
    confirmButtonText: 'OK',
// import Swal from 'sweetalert2';
    
  });
  localStorage.removeItem("Projec")

  this.router.navigate(['Admin/timingsheet'])


})
  

}



// addtimingreg
// updateaddtimings
// deladdtimings
// getaddtimingsID
// getaddtimings



}
