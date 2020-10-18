import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
    import Swal from 'sweetalert2';

@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.component.html',
  styleUrls: ['./addassets.component.css']
})
export class AddassetsComponent implements OnInit {

  constructor(private router:Router,private web3:Web3Service) { }
  back(){
    this.router.navigate(['Admin/assets'])
  }
  ServiceData:any={

  }
  register(ServiceData){
    console.log("add RegAssets",ServiceData);
  
  
    this.web3.RegAssets(ServiceData).subscribe((res)=>{
      console.log("RegAssets respon",res)
  
     
      Swal.fire({
        text: 'Assets Added',
        icon: 'success',
        confirmButtonText: 'OK',
      });
       this.router.navigate(['Admin/assets'])
  
      // import Swal from 'sweetalert2';
  
  
  
    })
  
  }
  
  ngOnInit() {
  }

}
