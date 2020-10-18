import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  constructor(private router:Router,private web3:Web3Service) { }

  back(){
    this.router.navigate(['Admin/clients'])
  }
  ServiceData:any={};
  getDataIndividual(){

    var clientid= localStorage.getItem("clientid")
    let data={ 
      "clientid":clientid
    }
    this.web3.getClientId(data).subscribe((res)=>{
      console.log(res);
      
    //  this.DataById=res[0].email;
    this.ServiceData=res[0]
    
      console.log(res[0])
     
  
    })
  }


  register(ServiceData){
    
  }










  ngOnInit() {

    this.getDataIndividual()
  }

}
