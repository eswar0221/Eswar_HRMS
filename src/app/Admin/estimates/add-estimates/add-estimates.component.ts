import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import { FormControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-estimates',
  templateUrl: './add-estimates.component.html',
  styleUrls: ['./add-estimates.component.css']
})
export class AddEstimatesComponent implements OnInit {

  // constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service,public formBuilder: FormBuilder,) { 
  // }
  tots:any;

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service,public _fb: FormBuilder,) { 
  }
  // ngOnInit() {
  //   // this.getDataIndividual()

  // }
  ServiceData:any={
    subtotal:this.tots,
  }
  tmpe1(){
    localStorage.removeItem("Estimate_ID")
    this.router.navigate(['Admin/estimates'])

  }
  iname:any;cost:any;icostname:any;iprice:any;quan:any;
  estimatesForm:any;
     // Estimate_ID  Client Project    // Client_Address:     // Billing_Address:     // Estimate_Date:     // Expiry_Date:    // email:     // vat:     // itemname: ""
    // itemquan: ""    // itemcost: ""    // price: ""    // subtotal: null    // vatper: null    // total: null    // payment    // status
  
    ngOnInit() {
      console.log(typeof uuid());
      // this.list.push(uuid());
      this.ServiceData.Estimate_ID=uuid();
// import { v4 as uuid } from 'uuid';

  //   this.estimatesForm = this._fb.group({
  //     Estimate_ID: ['', Validators.required],
  //     Client: ['', Validators.required],
  //     Project: ['', Validators.required],
  //     Client_Address: ['', Validators.required],
  //     Billing_Address: ['', Validators.required],

  //     Estimate_Date: ['', Validators.required],
  //     Expiry_Date: ['', Validators.required],
  //     email: ['', Validators.required],
  //     vat: ['', Validators.required],

  //     // Product: this._fb.array([this._fb.group({
  //       itemname: ['', Validators.required],
  //       itemcost: ['', Validators.required],
  //       itemquan: ['', Validators.required],
  //       price: ['', Validators.required],
  //     // })]),
      
  //     subtotal: ['', Validators.required],
  //     vatper: ['', Validators.required],
  //     total: ['', Validators.required],

  // });
  
}
  
    // public Product: any[] = [{
    //   itemname:'',
    //   itemcost:'',
    //   itemquan:'',
    //   price:'',
    // }];
    
    
  //   PRODUCT(formName) {
  //     return this[formName].get('Product') as FormArray;
  // }
  // addProduct1(formName) {
  //     this.PRODUCT(formName).push(this._fb.group({
  //       itemname: ['', Validators.required],
  //       itemcost: ['', Validators.required],
  //       itemquan: ['', Validators.required],
  //       price: [Number, Validators.required]

  //     }));
  //     this.calculateTotal(formName);
  // }
  // deleteLINES(index,formName) {
  //   this.PRODUCT(formName).removeAt(index);
  //   this.calculateTotal(formName);
  // }
    
  // getControls() {
  //   return (<FormArray>this.estimatesForm.get('Product')).controls;
  // }
  
  //     calculateTotal(formName) {
  //   }
  //   getName(index) {
  //     var arrayControl = this.estimatesForm.get('Product') as FormArray;
  //     var item = arrayControl.value;
 
  //   const controlArray = <FormArray> this.estimatesForm.get('Product');
  //   var itemcosts =  this.getControls()[index].value.itemcost;
  //   // console.log("cost",itemcosts); 
  //   var itemquan = this.getControls()[index].value.itemquan;
  //   var prices=Math.round( (itemcosts * itemquan));
  //   controlArray.controls[index].get('price').setValue(prices);
  // //
  //   var grand =  this.getControls()[index].value.price;
  //   //adding all total amount for grand total
  //   this.estimatesForm.get('Product').valueChanges
  //   .subscribe((newVal) => {
  //     // newVal contains the whole array
    
  //     // We're patching the value of total control
  //     this.estimatesForm.controls['subtotal'].patchValue(
  //       // Use the newVal array to calculate the sum using reduce
  //       newVal.reduce((acc, curr) => {
  //         // interpret curr.value as a number using (+x) operator
  //         return acc + (+curr.price);
  //       }, 0)
  //     )
  //   });

  //  var subtot=this.estimatesForm.controls['subtotal'].value
   
  //  var vats=this.estimatesForm.controls['vat'].value
  //  var vattot=Math.round( (+vats/100) * (subtot));
  //  var subtots=this.estimatesForm.controls['vatper'].setValue(vattot)
  //   var finaltotal=subtot+vattot
  //   // console.log("gfhjk",finaltotal);
    
  //  var tot=this.estimatesForm.controls['total'].setValue(finaltotal)

  //   }

// RegEstimates delEstimartes updateEstimartes getEstimartesID getEstimartes
getName(ServiceData){
  ServiceData.price= ServiceData.itemquan * ServiceData.itemcost;

}
cals(ServiceData){
  ServiceData.vatper =Math.round(  (ServiceData.vat / 100 ) *  ServiceData.price);
  //  var vattot=Math.round( (+vats/100) * (subtot));
  ServiceData.subtotal = ServiceData.price;
  ServiceData.total = ServiceData.vatper + ServiceData.subtotal;
} 


  asset(formData){
console.log(formData);
this.web3.RegEstimates(formData).subscribe(res=>{
  console.log("res",res);

  Swal.fire({
    icon:'success',
   title: this.ServiceData.title,
   text:"data saved successfully",
   confirmButtonText: 'OK'
   });
// this.router.navigate(['Admin/addestimates'])
   
})
  }


    
    }
    

  



