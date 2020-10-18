import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-assets',
  templateUrl: './edit-assets.component.html',
  styleUrls: ['./edit-assets.component.css']
})
export class EditAssetsComponent implements OnInit {


  constructor(private router:Router,private web3:Web3Service) { }
  addassets(){
    this.router.navigate(['Admin/addassets'])
  }

  ServiceData:any={

  }
  Update(ServiceData){
    console.log(ServiceData);
    
    this.web3.updateAssets(ServiceData).subscribe((res)=>{
      console.log("up date ghn updateAssets",res)


      

      Swal.fire({
        text: 'Assets Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      this.router.navigate(['Admin/assets'])
      // import Swal from 'sweetalert2';


    })


  }
back(){
  this.router.navigate(['Admin/assets'])


}

  getDataIndividual(){

    var Assetid= localStorage.getItem("Assetid")
    let data={
      "Assetid":Assetid
    }
    this.web3.getAssetsno(data).subscribe((res)=>{
      console.log("Assetid res",res);
      
    //  this.DataById=res[0].email;
    // if(res[0].project[0].pread==false){
    //   this.ServiceData.pread==true
    //   console.log("dsfgh 84",this.ServiceData.pread);
    
    //   }
    
    this.ServiceData=res[0]
    // console.log("rdtfgbuhjn80",res[0].project[0].pread);
    
  
      console.log("Assetid ",res[0])

     
  
    })
  }
  ngOnInit() {

    this.getDataIndividual()
  }

}
