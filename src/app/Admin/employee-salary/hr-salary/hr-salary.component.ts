import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-salary',
  templateUrl: './hr-salary.component.html',
  styleUrls: ['./hr-salary.component.css']
})
export class HrSalaryComponent implements OnInit {
  searchText:any;
  sats:any;
  tableSEcond_tab: boolean;
    secondTable: boolean;
  constructor(private web3:Web3Service,private router:Router) { }


  ngOnInit() {
    this.getempsal()
  }



  navigate(){
    this.router.navigate(['Admin/addhrsalary'])
   
   
   }
   
   SecondLogo(){
     this.secondTable = false;
     this.tableSEcond_tab = true;
   }
   
   FirstLogo(){
     this.tableSEcond_tab = false;
     this.secondTable = true;
    
   }

   payslipa(){
    this.router.navigate(['Admin/hrpayslip'])

   }
   payslip(event){
    if(event.target){
      var tr = $(event.currentTarget).closest('tr')
          this.empsalid = tr.find(".empsalid").text(); 
          console.log("wsdftghjuk 222222",this.empsalid);
          
          let data={
            "employeeid":this.empsalid
          }
  
          console.log("empsalid   sssssssss",data)
          localStorage.setItem("empsalid",this.empsalid);
          // alert("hi")
          this.router.navigate(['Admin/hrpayslip'])
        }

   }
   row(event){
      
    if(event.target){
      var tr = $(event.currentTarget).closest('tr')
          this.empsalid = tr.find(".empsalid").text(); 
          console.log("wsdftghjuk 222222",this.empsalid);
          
          let data={
            "employeeid":this.empsalid
          }
  
          console.log("empsalid   sssssssss",data)
          localStorage.setItem("empsalid",this.empsalid);
          // alert("hi")
          this.router.navigate(['Admin/editempsal'])
        }




    //  console.log("wsdftghjuk 222222",empsalid);
     
   
   
    //  // console.log("Department   sssssssss",data)
    //  localStorage.setItem("empsalid",empsalid);
    //  // alert("hi")
    //  this.router.navigate(['Admin/editholidays'])
   
   }
   
   // getempsalId
// updateempsal
// getempsal
// Addempsal

   
   empsalid:any;
   Delete(employeeid){
     localStorage.setItem("empsalid",employeeid)
     this.empsalid=localStorage.getItem("empsalid")
     var rv=window.confirm("You want to delete?")
     if(rv)
     {
       let data={
         "employeeid":this.empsalid
       }
      console.log("data   ",data);
      
       this.web3.delempsal(data).subscribe(res=>{
         // alert(dt.msg)
         console.log("dell data",res);
         localStorage.removeItem("empsalid")
         this.getempsal()
       })
     }
   
   }
   sats_hr:Array<any>=[];
   getempsal(){
   this.web3.getempsal().subscribe((resk)=>{
     for (let ht = 0; ht < resk.length; ht++) {
       if(resk[ht].designation == "HR"){
        this.sats_hr.push(resk[ht])
       } ;
       
     }
    //  this.sats_hr=res;
    //  console.log(res);
     
   })
     }


}
