import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
  sats:any;
  tableSEcond_tab: boolean;
    secondTable: boolean;
  constructor(private web3:Web3Service,private router:Router) { }


  ngOnInit() {
    this.getholidaydata()
  }



  navigate(){
    this.router.navigate(['Admin/addholidays'])
   
   
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
          this.Holiday_Name = tr.find(".sdf").text(); 
          console.log("wsdftghjuk 222222",this.Holiday_Name);
          
          let data={
            "Holiday_Name":this.Holiday_Name
          }
  
          console.log("Holiday_Name   sssssssss",data)
          localStorage.setItem("Holiday_Name",this.Holiday_Name);
          // alert("hi")
          this.router.navigate(['Admin/editholidays'])
        }




    //  console.log("wsdftghjuk 222222",Holiday_Name);
     
   
   
    //  // console.log("Department   sssssssss",data)
    //  localStorage.setItem("Holiday_Name",Holiday_Name);
    //  // alert("hi")
    //  this.router.navigate(['Admin/editholidays'])
   
   }
   
   
   
   Holiday_Name:any;
   Delete(Holiday_Name){
     localStorage.setItem("Holiday_Name",Holiday_Name)
     this.Holiday_Name=localStorage.getItem("Holiday_Name")
     var rv=window.confirm("You want to delete?")
     if(rv)
     {
       let data={
         "Holiday_Name":this.Holiday_Name
       }
      console.log("data   ",data);
      
       this.web3.delholidays(data).subscribe(res=>{
         // alert(dt.msg)
         console.log("dell data",res);
         localStorage.removeItem("Holiday_Name")
         this.getholidaydata()
       })
     }
   
   }
   
   getholidaydata(){
   this.web3.getholidaysdata().subscribe((res)=>{
     this.sats=res;
     console.log(res);
     
   })
     }






}
