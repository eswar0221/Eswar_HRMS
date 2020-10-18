import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee-salary',
  templateUrl: './edit-employee-salary.component.html',
  styleUrls: ['./edit-employee-salary.component.css']
})
export class EditEmployeeSalaryComponent implements OnInit {


  // getempsalId
// updateempsal
constructor(private router : Router, private web3: Web3Service) { }
ngOnInit() {

  this.getDataIndividual()

}
back(){
  this.router.navigate(['Admin/empviewall'])
  localStorage.removeItem("empsalid")
}
ServiceData:any={

}
clear(ServiceData){
  ServiceData.firstname = "",
ServiceData.username = "",
ServiceData.password = "",
ServiceData.employeeid = "",  
ServiceData.company = "",
ServiceData.phone = "",
ServiceData.lastname = "",
ServiceData.email = "",
ServiceData.cpassword = "",
ServiceData.designation = ""
   
}
public error_message;
public show : boolean = false;

//getting data by id

getDataIndividual(){

var id= localStorage.getItem("empsalid")
let data={
  "employeeid":id
}
this.web3.getempsalId(data).subscribe((res)=>{
//  this.DataById=res[0].email;
this.ServiceData=res[0]
 
  console.log(res[0])
 

})
}

// get(){
//   this.empRegistrationForm.controls['email'].setValue(this.DataById)
// }
add(ServiceData) {
   
  ServiceData.DA = Math.round((parseInt( ServiceData.Basic) *0.07) / 100);
  ServiceData.HRA = Math.round((parseInt( ServiceData.Basic) * 0.1)/ 100);
  ServiceData.Conveyance = Math.round((parseInt( ServiceData.Basic) *0.2 ) / 100);
  ServiceData.Allowance = Math.round((parseInt( ServiceData.Basic) *0.3) / 100);
  ServiceData.Medical_Allowance = Math.round((parseInt( ServiceData.Basic) *0.4) / 100);
  ServiceData.Earnings_Others=Math.round( (parseInt( ServiceData.Basic) *0.08) / 100);



  ServiceData.TDS = Math.round( (parseInt( ServiceData.Basic) *0.02) / 100);
  ServiceData.ESI = Math.round((parseInt( ServiceData.Basic) *0.34) / 100);
  ServiceData.PF =Math.round( (parseInt( ServiceData.Basic) *0.04) / 100);
  ServiceData.Leave =Math.round( (parseInt( ServiceData.Basic) *0.6) / 100);
  ServiceData.Prof_Tax = Math.round((parseInt( ServiceData.Basic) *0.4) / 100);
  ServiceData.Labour_Welfare =Math.round( (parseInt( ServiceData.Basic) *0.03) / 100);
  ServiceData.Fund = Math.round((parseInt( ServiceData.Basic) *0.09) / 100);
  ServiceData.Loan = Math.round((parseInt( ServiceData.Basic) *0.06) / 100);
  ServiceData.Deductions_Others = Math.round((parseInt( ServiceData.Basic) *0.07) / 100);
  ServiceData.Total_Earnings= (ServiceData.Basic + ServiceData.DA + ServiceData.HRA + ServiceData.Conveyance + ServiceData.Allowance + ServiceData.Medical_Allowance + ServiceData.Earnings_Others);
  ServiceData.Total_Deductions=  ServiceData.TDS + ServiceData.ESI + ServiceData.PF + ServiceData.Leave + ServiceData.Prof_Tax + ServiceData.Labour_Welfare + ServiceData.Fund + ServiceData.Loan + ServiceData.Deductions_Others;
 
  ServiceData.Net_Salary = (ServiceData.Total_Earnings) - (ServiceData.Total_Deductions);
  // ServiceData.Net_Salary =  (ServiceData.DA + ServiceData.HRA + ServiceData.Conveyance + ServiceData.Allowance + ServiceData.Medical_Allowance + ServiceData.Earnings_Others + ServiceData.Basic) -( 
  //   ServiceData.TDS + ServiceData.ESI + ServiceData.PF + ServiceData.Leave + ServiceData.Prof_Tax + ServiceData.Labour_Welfare + ServiceData.Fund + ServiceData.Loan + ServiceData.Deductions_Others);




}

update(data){
console.log(data)
  // var formData= new FormData()

 
this.web3.updateempsal(data).subscribe((res)=>{
console.log(res)
Swal.fire({
  text: 'Employee Salary Updated',
  icon: 'success',
  confirmButtonText: 'OK',
  
});
this.router.navigate(['Admin/empsal'])
localStorage.removeItem("empsalid")
})


}






}
