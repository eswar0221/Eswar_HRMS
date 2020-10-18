import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
                  import Swal from 'sweetalert2';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  constructor(private router:Router,private formBuilder:FormBuilder,private modalService : NgbModal, private web3: Web3Service) { }

  selectForm:any;
  ngOnInit() {
this.getData()
this.selectForm = this.formBuilder.group({
  Status: new FormControl(),    
});

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
    
            Item_Name_id:any;
            viewbill(event){
              var tr = $(event.currentTarget).closest('tr')
              this.Item_Name_id = tr.find(".caseid").text(); 
              localStorage.setItem("Item_Name_id",this.Item_Name_id);

              this.router.navigate(['Admin/viewexpbill'])
          
            }
            viewbill1(event){
              var tr = $(event.currentTarget).closest('tr')
              this.Item_Name_id = tr.find(".caseid").text(); 
              localStorage.setItem("expinvoice_id",this.Item_Name_id);

              this.router.navigate(['Admin/expinvoice'])
          
            }
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

            // getExpenses_ID
 
            onchange(event){
              var option=event.target.value; 
              var tr = $(event.currentTarget).closest('tr')
                    var inv = tr.find(".caseid").text(); 
                    console.log("hgjk",inv);
                    let data={
                      // "Expensives_ID":inv,
                      "Expensives_ID":inv,
                      "Status":option

                     }
                     this.web3.updateExpenses(data).subscribe(res=>{
                      console.log("res",res);
                    });
            }




}
