import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
import { NgpSortModule } from "ngp-sort-pipe";

@Component({
  selector: 'app-hr-leaves',
  templateUrl: './hr-leaves.component.html',
  styleUrls: ['./hr-leaves.component.css']
})
export class HrLeavesComponent implements OnInit {

  sats:Array<any>=[];
tableSEcond_tab: boolean;
  secondTable: boolean;
  constructor(private web3:Web3Service,private router:Router) { }

  ngOnInit() {
    $('.tabs a').on('click', function(){
      $('.tabs .active').removeClass('active');
      $(this).addClass('active');
    });
   
    this.tableSEcond_tab = true;
    this.getDataIndividual1()
    this.getLeaveData()

  }
  
  navigate(){
 this.router.navigate(['Admin/addhrleaves'])


}

SecondLogo(){
  this.secondTable = false;
  this.tableSEcond_tab = true;
}

FirstLogo(){
  this.tableSEcond_tab = false;
  this.secondTable = true;
 
}
row(leaveid){
   
   
  // console.log("wsdftghjuk 222222",leaveid);
  


  // console.log("Department   sssssssss",data)
  localStorage.setItem("employeename",leaveid);
  // alert("hi")
  this.router.navigate(['Admin/editleaves'])

}



employeename:any;
Delete(leaveid){
  localStorage.setItem("leaveid",leaveid)
  this.employeename=localStorage.getItem("leaveid")
  var rv=window.confirm("You want to delete?")
  if(rv)
  {
    let data={
      "leaveid":this.employeename
    }
   console.log("data   ",data);
   
    this.web3.delleaveid(data).subscribe(res=>{
      // alert(dt.msg)
      console.log("dell data",res);
      localStorage.removeItem("employeename")
      this.getLeaveData()
    })
  }

}

  getLeaveData(){
this.web3.getLeaveData().subscribe((res)=>{
  for (let hj = 0; hj < res.length; hj++) {
    const element = res[hj];
    if(res[hj].designation !=="HR" ){
      this.sats.push(res[hj]);
console.log(this.sats);

    }
  }
 
  
})
  }
  profile:any;
  getDataIndividual1(){

    var id= localStorage.getItem("Email_ID")
    let data={
      "email":id
    }
    this.web3.getEmpByname(data).subscribe((res)=>{
    //  this.DataById=res[0].email;
   console.log("profile emp data",res);
this.profile=res

   
   
     
  
    })
  }

}
