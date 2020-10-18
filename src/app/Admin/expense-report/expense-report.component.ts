import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
                  import Swal from 'sweetalert2';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.css']
})
export class ExpenseReportComponent implements OnInit {


  searchText:any;
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
this.getData()

  }
  addcontact(){
    this.router.navigate(['Admin/addexpenses'])

  }

  Esti:any;
  getData(){
    this.web3.getExpenses().subscribe((res)=>{
      this.Esti=res;
      console.log(res);
      
    })
      }
      Item_Name:any;
      row(event){
      
        if(event.target){
          var tr = $(event.currentTarget).closest('tr')
              this.Item_Name = tr.find(".case").text(); 
              console.log("wsdftghjuk 222222",this.Item_Name);
              
              let data={
                "Item_Name":this.Item_Name
              }
      
              console.log("Item_Name   sssssssss",data)
              localStorage.setItem("Item_Name",this.Item_Name);
              // alert("hi")
              this.router.navigate(['Admin/editexpenses'])
            }}
    


            del(Item_Name){
              localStorage.setItem("Item_Name",Item_Name)
              this.Item_Name=localStorage.getItem("Item_Name")
              var rv=window.confirm("You want to delete?")
              if(rv)
              {
                let data={
                  "Item_Name":this.Item_Name
                }
               console.log("data   ",data);
               
                this.web3.delExpenses(data).subscribe(res=>{
                  // alert(dt.msg)
                  console.log("dell data",res);
                  localStorage.removeItem("Item_Name")
                  Swal.fire({
                    text: 'Expenses Deleted',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    
                  });
                  // import Swal from 'sweetalert2';
                  this.getData();
            
                })
              }
            
            }


}
