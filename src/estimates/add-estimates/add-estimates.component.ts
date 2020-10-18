import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-estimates',
  templateUrl: './add-estimates.component.html',
  styleUrls: ['./add-estimates.component.css']
})
export class AddEstimatesComponent implements OnInit {

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service,public formBuilder: FormBuilder,) { 
  }

  // ngOnInit() {
  //   // this.getDataIndividual()

  // }
  ServiceData:any={

  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      subtotal: new FormControl(),    
      vatper:new FormControl(),
      total:new FormControl(),
      products : this.formBuilder.array
      ([

      ])
    });
    this.loadProducts()
  }

  products = [
    {
      itemname:'',
      itemcost:'',
      itemquan:'',
      price:'',
    }]
    profileForm: any;

  loadProducts() {
    const control = <FormArray>this.profileForm.get('products');
    for (const product of this.products) {
      const grp = this.formBuilder.group({   
        itemname: [product.itemname],
        itemcost: [product.itemcost],
        itemquan: [product.itemquan],
        price: [product.price],
      });
      control.push(grp);
    }
  }

  initiatProduct(): FormGroup {
    return this.formBuilder.group({
      itemname: [''],
      itemcost: [''],
      itemquan: [''],
      price: ['']
    });
  }
  
  get getFormData(): FormArray {
    return <FormArray>this.profileForm.get('products');
  }
  
  addProduct() {
    const control = <FormArray>this.profileForm.get('products');
      control.push(this.initiatProduct());
  }
  
  remove(i)  {
    const control = <FormArray>this.profileForm.get('products');
      control.removeAt(i+0);
    }


    funprint(){
      console.log(this.profileForm.value)
    }
    getName(i) {
      var arrayControl = this.profileForm.get('products') as FormArray;
      var item = arrayControl.value;
 
    const controlArray = <FormArray> this.profileForm.get('products');
    var itemcosts =  this.getControls()[i].value.itemcost;
    console.log("cost",itemcosts); 
    var itemquan = this.getControls()[i].value.itemquan;
    var prices=Math.round( (itemcosts * itemquan));
    controlArray.controls[i].get('price').setValue(prices);
  //
    var grand =  this.getControls()[i].value.price;
    //adding all total amount for grand total
    this.profileForm.get('products').valueChanges
    .subscribe((newVal) => {
      // newVal contains the whole array
    
      // We're patching the value of total control
      this.profileForm.controls['subtotal'].patchValue(
        // Use the newVal array to calculate the sum using reduce
        newVal.reduce((acc, curr) => {
          // interpret curr.value as a number using (+x) operator
          return acc + (+curr.price);
        }, 0)
      )
    });

   var subtot=this.profileForm.controls['subtotal'].value
   
   var vats=this.ServiceData.vat
   var vattot=Math.round( (+vats/100) * (subtot));
   var subtots=this.profileForm.controls['vatper'].setValue(vattot)
    var finaltotal=subtot+vattot
    // console.log("gfhjk",finaltotal);
    
   var tot=this.profileForm.controls['total'].setValue(finaltotal)

    }
    getControls() {
      return (<FormArray>this.profileForm.get('products')).controls;
    }

    // public asset: any = () => {
    //   let data = this.profileForm.value
      
    //   var arrayControl = this.profileForm.get('products') as FormArray;
    //   var item = arrayControl.value;
    //   var dict = [];
    //   for(var i = 0; i < item.length; i++) 
    //   { 
    //     dict.push({
    //       Estimate_ID:this.ServiceData.Estimate_ID,
    //       Client:this.ServiceData.Client,
    //       Project:this.ServiceData.Project,
    //       Client_Address:this.ServiceData.Client_Address, 
    //       Billing_Address:this.ServiceData.Billing_Address, 
    //       Estimate_Date:this.ServiceData.Estimate_Date,
    //       Expiry_Date:this.ServiceData.Expiry_Date,
    //       email:this.ServiceData.email,
    //       vat:this.ServiceData.vat, 

    //       itemname: item[i].itemname,
    //       itemquan: item[i].itemquan,
    //       itemcost: item[i].itemcost,
    //       price: item[i].price,

    //       subtotal:this.profileForm.controls['subtotal'].value,
    //       vatper:this.profileForm.controls['vatper'].value,
    //       total:this.profileForm.controls['total'].value,
        
           
    
    //   })
    //   console.log(dict);

    // }
    //   console.log(dict);
    //   for(var j = 0; j < dict.length; j++) 
    //   { 
    //     var datain=dict[j]
    //     console.log(dict[j]);
    //     this.web3.RegEstimates(datain).subscribe(res=>{
    //       console.log("res",res);

    //       Swal.fire({
    //         icon:'success',
    //        title: this.ServiceData.title,
    //        text:"data saved successfully",
    //        confirmButtonText: 'OK'
    //        });
    // // this.router.navigate(['Admin/addestimates'])
           
    //     })
    //   }
     
     
    asset(data) {

      console.log("asdfghjk",data);
      // regdsalary
     
      this.web3.RegEstimates(data).subscribe((res)=>{
        console.log("regdsalary respon",res)
    
       
        Swal.fire({
          text: 'Dummy Added',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        //  this.router.navigate(['Admin/dummy'])
    
        // import Swal from 'sweetalert2';
    
    
    
      })
    
    
    }
    
    }
    




