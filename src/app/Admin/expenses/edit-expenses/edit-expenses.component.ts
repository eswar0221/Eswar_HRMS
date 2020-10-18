import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
        import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-expenses',
  templateUrl: './edit-expenses.component.html',
  styleUrls: ['./edit-expenses.component.css']
})
export class EditExpensesComponent implements OnInit {

  file:File;

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }

  ServiceData:any={

  }
  ngOnInit() {
  this.getDataIndividual()

  }
  getDataIndividual(){
  
    var estim= localStorage.getItem("Item_Name")
    let data={
      "Item_Name":estim
    }
    this.web3.getExpensesno(data).subscribe((res)=>{
      console.log("Expenses_ID edit data",res);
      this.ServiceData=res[0]
    })}
    incomingFile(imagedata){
      console.log(imagedata);
  this.file=(imagedata.target.files[0]);
  
    }
    back(){
      localStorage.removeItem("Item_Name")
    this.router.navigate(['Admin/expenses'])

    }
    sendData(ServiceData){
      console.log(ServiceData);
      var formData= new FormData()
          //   Item_Name Purchase_Date Amount Status Purchase_From     Purchased_By    Paid_By
      
        formData.append("Item_Name", ServiceData.Item_Name)
              formData.append("Purchase_Date", ServiceData.Purchase_Date)       
              formData.append("Amount", ServiceData.Amount)
              formData.append("Status", ServiceData.Status)
              formData.append("Purchase_From",ServiceData.Purchase_From)
              formData.append("Purchased_By",ServiceData.Purchased_By)
              formData.append("Paid_By",ServiceData.Paid_By)
             
              formData.append("file", this.file,this.file.name)
          this.web3.updateExpenses(formData).subscribe((res)=>{
            console.log("Expenses res",res)
      
      
            Swal.fire({
              text: 'Expenses Updated',
              icon: 'success',
              confirmButtonText: 'OK',
            });
        // import Swal from 'sweetalert2';
    this.router.navigate(['Admin/expenses'])
          
            
          })
            
        }
        // getExpenses_ID
}
