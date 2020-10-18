import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  abc:any;
  abcd:any;
  abc1:string;
  abcd1:string;
 hrdata: any;
 Empdata: any;
 taskdata:  any;
 emp_tot: number;
 abcf:number;
 cccc:number;
 tttt:number
  constructor(private router:Router,private web3:Web3Service,private https:HttpService) { }
  sats:any;


  ngOnInit() {
    this.getEmpData();
       this.getProData();
       this.getclientData();
       this.gethrEmpData();
       this.gettasksData();
       
  //  this.emp_tot=parseInt( this.Empdata.length) + parseInt(this.hrdata.length);
  //  console.log(this.Empdata.length);
  //  console.log(this.hrdata.length);
   
     }
  getProData(){
    this.web3.getProjectData().subscribe((res)=>{

      this.sats=res;
      this.abcf=this.sats.length

      // console.log(res)
    })
  }
  clients:any;

  getclientData(){
    this.web3.getclients().subscribe((res)=>{
  
      this.clients=res;
      this.cccc=this.clients.length

    })
  }
  gethrEmpData(){
    this.web3.gethrman().subscribe((res)=>{

      this.hrdata=res;
      this.abc=this.hrdata.length
      // console.log( this.abc)
      // this.abc1=this.hrdata.length;
      localStorage.setItem("tot",this.abc)
    })
  }
  getEmpData(){
    this.web3.empregdata().subscribe((res)=>{
      // this.gethrEmpData()
      this.Empdata=res;
     this.abcd=(this.Empdata.length)
     this.abcd1=this.Empdata.length;
    //  console.log( this.abcd)

    //  console.log( this.abc)
     this.abc1=localStorage.getItem("tot")

      // this.emp_tot=(( this.abc)+ this.abcd)
      // console.log(parseInt(this.abcd) + parseInt(this.abc1));
     this.emp_tot=(parseInt(this.abcd) + parseInt(this.abc1))

      // console.log((this.abcd) + (this.abc1));
      // console.log((this.abc1) + (this.abcd1));
      // console.log(parseInt(this.abc1) + parseInt(this.abcd1));
      
    })
  }
  gettasksData(){
    this.web3.gettasks().subscribe((res)=>{

      this.taskdata=res;
      this.tttt=this.taskdata.length

    })
  }






}
