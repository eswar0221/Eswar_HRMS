import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-hr-apply-view-leaves',
  templateUrl: './hr-apply-view-leaves.component.html',
  styleUrls: ['./hr-apply-view-leaves.component.css']
})
export class HrApplyViewLeavesComponent implements OnInit {

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
       
        console.log("aszdxfcghjbnkftttt",res[0])
       
    
      })
    }
  //   satsd:Array<any>=[];
  //   getLeaveData(){
  // // var ffgg=localStorage.getItem("Pro_t_l")
  // // console.log(ffgg);
  
  // this.web3.getLeaveData().subscribe((res)=>{
  //   // this.sats=res;
  // console.log(res);
  
  //   for (let hj = 0; hj < res.length; hj++) {
  //     const element = res[hj];
  //     if(res[hj].Reporting_Manager == "Manager" ){
  //       this.satsd.push(res[hj]);
  // console.log(this.satsd);
  
  //     }
  //   }
   
    // console.log(res);
    
  // })
    // }

}
