import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addhrsalary',
  templateUrl: './addhrsalary.component.html',
  styleUrls: ['./addhrsalary.component.css']
})
export class AddhrsalaryComponent implements OnInit {
  empid:any;



  constructor(private router : Router, private web3: Web3Service) { }
  ServiceData:any={



  }
  add(ServiceData) {
   
    ServiceData.DA = Math.round((parseInt( ServiceData.Basic) *0.07) / 100);
    ServiceData.HRA = Math.round((parseInt( ServiceData.Basic) * 0.1)/ 100);
    // ServiceData.Conveyance = Math.round((parseInt( ServiceData.Basic) *0.2 ) / 100);
    ServiceData.Allowance = Math.round((parseInt( ServiceData.Basic) *0.3) / 100);
    ServiceData.Medical_Allowance = Math.round((parseInt( ServiceData.Basic) *0.4) / 100);
    ServiceData.Earnings_Others=Math.round( (parseInt( ServiceData.Basic) *0.08) / 100);
  
  
  
    ServiceData.TDS = Math.round( (parseInt( ServiceData.Basic) *0.02) / 100);
    ServiceData.ESI = Math.round((parseInt( ServiceData.Basic) *0.34) / 100);
    ServiceData.PF =Math.round( (parseInt( ServiceData.Basic) *0.04) / 100);
    // ServiceData.Leave =Math.round( (parseInt( ServiceData.Basic) *0.6) / 100);
    // ServiceData.Prof_Tax = Math.round((parseInt( ServiceData.Basic) *0.4) / 100);
    // ServiceData.Labour_Welfare =Math.round( (parseInt( ServiceData.Basic) *0.03) / 100);
    // ServiceData.Fund = Math.round((parseInt( ServiceData.Basic) *0.09) / 100);
    // ServiceData.Loan = Math.round((parseInt( ServiceData.Basic) *0.06) / 100);
    // ServiceData.Deductions_Others = Math.round((parseInt( ServiceData.Basic) *0.07) / 100);
    // ServiceData.Total_Earnings= (ServiceData.Basic + ServiceData.DA + ServiceData.HRA + ServiceData.Conveyance + ServiceData.Allowance + ServiceData.Medical_Allowance + ServiceData.Earnings_Others);
    // ServiceData.Total_Deductions=  ServiceData.TDS + ServiceData.ESI + ServiceData.PF + ServiceData.Leave + ServiceData.Prof_Tax + ServiceData.Labour_Welfare + ServiceData.Fund + ServiceData.Loan + ServiceData.Deductions_Others;
    ServiceData.Total_Earnings=(ServiceData.Basic + ServiceData.DA + ServiceData.HRA +  ServiceData.Allowance + ServiceData.Medical_Allowance + ServiceData.Earnings_Others);
    ServiceData.Total_Deductions= ( ServiceData.TDS + ServiceData.ESI + ServiceData.PF)
    ServiceData.Net_Salary = (ServiceData.Total_Earnings) - (ServiceData.Total_Deductions);

    // ServiceData.Net_Salary =  (ServiceData.DA + ServiceData.HRA + ServiceData.Conveyance + ServiceData.Allowance + ServiceData.Medical_Allowance + ServiceData.Earnings_Others + ServiceData.Basic) -( 
    //   ServiceData.TDS + ServiceData.ESI + ServiceData.PF + ServiceData.Leave + ServiceData.Prof_Tax + ServiceData.Labour_Welfare + ServiceData.Fund + ServiceData.Loan + ServiceData.Deductions_Others);
  
  
  
  
  }
  // minus() {this.ans = this.val1 - this.val2; }
  // multiply() {this.ans = this.val1 * this.val2; }
  // divide() {this.ans = this.val1 / this.val2; }


  ngOnInit() {

    this.getData()

  }
  eid:any;ctc:any;
  onChange(event){
    this.eid=event.target.value
    
    let data={
      "employeeid":this.eid
    }
    console.log(data);
    
    this.web3.getEmpById(data).subscribe((res)=>{
      console.log("res is",res);
      
  this.ServiceData=res[0]
      
//   this.ServiceData.employeename=res[0].firstname
// this.ServiceData.designation=res[0].designation
// this.ServiceData.totalleaves=res[0].noofleaves
this.ctc=(res[0].ctc)
// ServiceData.Basic



    })
  }
allemps:Array<any>=[];
allemps1:Array<any>=[];

sats:any;
  // getData(){
  //   this.web3.empregdata().subscribe((rese)=>{

  //     this.empid=rese;
    
  // })
  // }
  // empid:any;
  getData(){
    this.web3.gethrman().subscribe((res)=>{
      this.empid=res;      
    })
  }
  // eid:any;
  onChange1(event){
    console.log("data is",event.target.value);
    this.eid=event.target.value
      
    let data={
      "employeeid":this.eid
    }
      this.web3.gethmbyid(data).subscribe((res)=>{
    console.log("fghjkl@@@@@@@@@",res);
    
      this.ServiceData=res[0]
      // this.ServiceData.email=res[0].email
     
        // console.log(res[0].firstname)
       
    
      })
    
    
      }
  




  addsal(ServiceData){
    console.log("salary",ServiceData);
    this.web3.Addempsal(ServiceData).subscribe((res)=>{
      console.log("Emp sal respon",res)


      Swal.fire({
        text: 'Salary Added',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      this.router.navigate(['Admin/hrsalary'])
  })

}
back(){
  this.router.navigate(['Admin/hrsalary'])

}
}

