import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  tmp:boolean=true;
  myform: FormGroup;
  
  searchText:any;
  constructor(private router:Router,private web3:Web3Service) { }
  addclient(){
    this.router.navigate(['Admin/addclient'])
  }
  clients:any;

  getData(){
    this.web3.getclients().subscribe((res)=>{
  
      this.clients=res;
      console.log(res)
    })
  }
  



  ngOnInit() {
    this.getData()

  }


  clientid:any;
  row(event){
    if(event.target){
    var tr = $(event.currentTarget).closest('tr')
        this.clientid = tr.find(".case").text(); 
        console.log("wsdftghjuk 222222",this.clientid);
        
        let data={
          "clientid":this.clientid
        }

        console.log("clientid   sssssssss",data)
        localStorage.setItem("clientid",this.clientid);
        // alert("hi")
        this.router.navigate(['Admin/editclient'])
      }
  }
  cliid:any;
  deleteRow(event){
    if(event.target){
      var tr = $(event.currentTarget).closest('tr')
          this.cliid = tr.find(".case").text(); 
          console.log("wsdftghjuk 222222",this.cliid);
          
    var rv=window.confirm("You want to delete?")
    if(rv)
    {
      let data={
        "clientid":this.cliid
      }
     console.log("data   ",data);
     
      this.web3.delclientid(data).subscribe(res=>{
        // alert(dt.msg)
        console.log("dell data",res);
        
        this.getData()
      })
    }
  }
  }
















  // back(){
  //   this.router.navigate(['Admin/editclient'])
  // }
  tmpe1(){
    this.tmp=true
  }

  tmpe(){
  
    this.tmp=false
  }

  

}
