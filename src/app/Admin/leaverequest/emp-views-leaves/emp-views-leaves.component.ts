import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-emp-views-leaves',
  templateUrl: './emp-views-leaves.component.html',
  styleUrls: ['./emp-views-leaves.component.css']
})
export class EmpViewsLeavesComponent implements OnInit {

  sats:any;
  tableSEcond_tab: boolean;
    secondTable: boolean;
    constructor(private web3:Web3Service,private router:Router) { }
  
    ngOnInit() {
      $('.tabs a').on('click', function(){
        $('.tabs .active').removeClass('active');
        $(this).addClass('active');
      });
      this.getDataIndividual()
     
      this.tableSEcond_tab = true;
      
      // this.getLeaveData()
  
    }
    
    navigate(){
   this.router.navigate(['Admin/addleaverequest'])
  
  
  }
  
  SecondLogo(){
    this.secondTable = false;
    this.tableSEcond_tab = true;
  }
  
  FirstLogo(){
    this.tableSEcond_tab = false;
    this.secondTable = true;
   
  }
  row(employeename){
     
     
    console.log("wsdftghjuk 222222",employeename);
    
  
  
    // console.log("Department   sssssssss",data)
    localStorage.setItem("employeename",employeename);
    // alert("hi")
    this.router.navigate(['Admin/editleaves'])
  
  }
  
  
  
  employeename:any;
  Delete(employeename){
    localStorage.setItem("employeename",employeename)
    this.employeename=localStorage.getItem("employeename")
    var rv=window.confirm("You want to delete?")
    if(rv)
    {
      let data={
        "employeename":this.employeename
      }
     console.log("data   ",data);
     
      this.web3.delleaveid(data).subscribe(res=>{
        // alert(dt.msg)
        console.log("dell data",res);
        localStorage.removeItem("employeename")
        // this.getLeaveData()


      })
    }
  
  }
  
  //   getLeaveData(){
  // this.web3.getLeaveData().subscribe((res)=>{
  //   this.sats=res;
  //   console.log(res);
    
  // })
  //   }
    getDataIndividual(){

      var id= localStorage.getItem("Email_ID")
      let data={
        "email":id
      }
      this.web3.getleaveemail(data).subscribe((res)=>{
      //  this.DataById=res[0].email;
      this.sats=res
       
        // console.log(res[0])
       
    
      })
    }
}
