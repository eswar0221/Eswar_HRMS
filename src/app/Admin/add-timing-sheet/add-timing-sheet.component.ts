import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import { DatePipe } from '@angular/common';
   import Swal from 'sweetalert2';

// import { dateFilter } from "./date-filter.pipe";
@Component({
  selector: 'app-add-timing-sheet',
  templateUrl: './add-timing-sheet.component.html',
  styleUrls: ['./add-timing-sheet.component.css']
})
export class AddTimingSheetComponent implements OnInit {
  oday_Date:any;
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service,private datePipe: DatePipe) { 
  this.oday_Date =this.datePipe.transform( new Date(),'yyyy-MM-dd  h:mm:ss');
    console.log( this.oday_Date);
    
  }
  ServiceData:any={
today_Date: this.datePipe.transform( new Date(),'dd-MM-yyyy'),
Hours: this.datePipe.transform( new Date(),' hh'),
  }
  date = Date.now();
  ngOnInit() {
    this.getData();
    this. getProData()
  }

  sats:any;

  getData(){
    this.web3.empregdata().subscribe((res)=>{

      this.sats=res;
      console.log(res)
    })
  }
  projects:any;deadline:any;
  getProData(){
    this.web3.getProjectData().subscribe((res)=>{

      this.projects=res;
      // this.deadline=res.to 
      // console.log("asdfghjkl",this.deadline);
      
      console.log(res)
    })
  }



  back(){
    this.router.navigate(['Admin/timingsheet'])


  }
  register(ServiceData){
    console.log("add RegAssets",ServiceData);
  
  
    this.web3.addtimingreg(ServiceData).subscribe((res)=>{
      console.log("addtimingreg respon",res)
  
     
      Swal.fire({
        text: 'Timing Sheet Added',
        icon: 'success',
        confirmButtonText: 'OK',
      });
       this.router.navigate(['Admin/timingsheet'])
  
      // import Swal from 'sweetalert2';
  
  
  
    })
  
  }

// addtimingreg
// updateaddtimings
// deladdtimings
// getaddtimingsID
// getaddtimings




}
