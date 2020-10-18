import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
  import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-new-jobs',
  templateUrl: './add-new-jobs.component.html',
  styleUrls: ['./add-new-jobs.component.css']
})
export class AddNewJobsComponent implements OnInit {

  constructor( private modalService : NgbModal,private router:Router, private web3: Web3Service) { }
  ServiceData:any={

  }

  back(){
    this.router.navigate(['Admin/managedjobs'])

  }
  apply(data){
    console.log(data);
    
    this.web3.jobsadd(data).subscribe((res)=>{
      console.log(res);
      Swal.fire({
        text: 'Jobs Added',
        icon: 'success',
        confirmButtonText: 'OK',
  // import Swal from 'sweetalert2';
      })
    this.router.navigate(['Admin/managedjobs'])

    })

  }




  ngOnInit() {
  }

}
