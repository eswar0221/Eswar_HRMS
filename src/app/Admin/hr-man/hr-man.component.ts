import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-man',
  templateUrl: './hr-man.component.html',
  styleUrls: ['./hr-man.component.css']
})
export class HrManComponent implements OnInit {

  sats: any;
  tableSEcond_tab: boolean;
  secondTable: boolean;
  empid: any;

  constructor(private modalService : NgbModal, private web3: Web3Service,private router:Router) {


  }
  ngOnInit() {
    $('.tabs a').on('click', function(){
      $('.tabs .active').removeClass('active');
      $(this).addClass('active');
    });
   
    this.tableSEcond_tab = true;
    // var token = localStorage.getItem("token");
    // var decoded = jwt_decode(token); 
    // console.log(decoded.iat); 
    // var d=new Date(decoded.iat)
    console.log('time111111111111');
    this.getData();
   
  }

  getData(){
    this.web3.gethrman().subscribe((res)=>{

      this.sats=res;
      console.log(res)
    })
  }

navigate(){
  this.router.navigate(["Admin/addhrman"])
}

SecondLogo(){
  this.secondTable = false;
  this.tableSEcond_tab = true;
}

FirstLogo(){
  this.tableSEcond_tab = false;
  this.secondTable = true;
 
}

row(event){
  if(event.target){
  var tr = $(event.currentTarget).closest('tr')
      this.empid = tr.find(".case").text(); 
      let data={
        "casenum":this.empid
      }
      console.log("caseeeeeeeeeeee",data)
      localStorage.setItem("caseno",this.empid);
      this.router.navigate(["Admin/edithrman"])

  }
}

deleteRow(event){
  if(event.target){
    var tr = $(event.currentTarget).closest('tr')
        this.empid = tr.find(".case").text(); 
        console.log("wsdftghjuk 222222",this.empid);
        
  var rv=window.confirm("You want to delete?")
  if(rv)
  {
    let data={
      "employeeid":this.empid
    }
   console.log("data   ",data);
   
    this.web3.delhremployee(data).subscribe(res=>{
      // alert(dt.msg)
      console.log("dell data",res);
      
      this.getData()
    })
  }
}
}

// hrmanreg  hrlogin  gethrman  gethmbyid gethmByname  delhremployee  updatehrman



}
