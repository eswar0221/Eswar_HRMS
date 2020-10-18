import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
    import Swal from 'sweetalert2';

@Component({
  selector: 'app-adddummmy',
  templateUrl: './adddummmy.component.html',
  styleUrls: ['./adddummmy.component.css']
})
export class AdddummmyComponent implements OnInit {


  members: any[];
    dataSource: MatTableDataSource<any>;
    myDocData;
    data;
    toggleField: string;
    state: string = '';
    savedChanges = false;
    error: boolean = false;
    errorMessage: String = "";
    dataLoading: boolean = false;
    private querySubscription;

    pCDs = ['Allowance', 'Deduction'];
    freqCDs = ['Bi-Weekly', 'Monthly', 'Yearly', 'One-time', 'OTHER'];
    total_amount = 0;
    addDataForm: FormGroup;
    editDataForm: FormGroup;

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service,private _fb: FormBuilder) { }
  tmpe(){
    this.router.navigate(['Admin/dummy'])
  }
 
 
  ngOnInit() {
    this.toggleField = "searchMode";
    this.error = false;
    this.errorMessage = "";
    this.dataSource = new MatTableDataSource(this.members);
    this.addDataForm = this._fb.group({
        code: ['', Validators.required],
        descr: ['', Validators.required],
        bsalary: ['', Validators.required],
        line: this._fb.array([this._fb.group({
            frequency: ['', Validators.required],
            ptype: ['', Validators.required],
            payval: ['', Validators.required],
            amount: ['', Validators.required]
        })]),
        gamount: ''
    });
    this.editDataForm = this._fb.group({
        _id: ['', Validators.required],
        code: ['', Validators.required],
        descr: ['', Validators.required],
        bsalary: ['', Validators.required],
        line: this._fb.array([]),
        gamount: ''
    });
}

LINES(formName) {
    return this[formName].get('line') as FormArray;
}
addLINES(formName) {
    this.LINES(formName).push(this._fb.group({
        frequency: ['', Validators.required],
        ptype: ['', Validators.required],
        payval: ['', Validators.required],
        amount: ['', Validators.required],

    }));
    this.calculateTotal(formName);
}
deleteLINES(index,formName) {
    this.LINES(formName).removeAt(index);
    this.calculateTotal(formName);
}
// Allowance
calculateTotal(formName) {
    this.total_amount = 0;
    for (let i = 0; i <= this[formName].value.line.length; i++) {
        if (this[formName].value.line[i]) {
            if (this[formName].value.line[i].ptype == 'Allowance') {
                this.total_amount += +this[formName].value.line[i].amount;
            } else {
                this.total_amount -= +this[formName].value.line[i].amount;
            }
        }
    }
    this.total_amount += parseFloat(this[formName].controls['bsalary'].value);
    this[formName].controls['gamount'].setValue(this.total_amount.toFixed(2));
}

toggle(filter?) {
    if (!filter) { filter = "searchMode" }
    else { filter = filter; }
    this.toggleField = filter;
}
setData(formData) {

  console.log("asdfghjk",formData);
  // regdsalary
  // this.dataLoading = true;
  // this.querySubscription = this.web3.setSalaryCode(formData).subscribe((res) => {
  //     if (res["data"]["setSalaryCode_M"].code !== "") {
  //         this.savedChanges = true;
  //         this.error = false;
  //         this.errorMessage = "";
  //     } else {
  //         this.error = true;
  //         this.errorMessage = res["data"]["setSalaryCode_M"].message;
  //     }
  // },
  //     (error) => {
  //         this.error = true;
  //         this.errorMessage = error.message;
  //         this.dataLoading = false;
  //     },
  //     () => {
  //         this.dataLoading = false;
  //     });
  this.web3.regdsalary(formData).subscribe((res)=>{
    console.log("regdsalary respon",res)

   
    Swal.fire({
      text: 'Dummy Added',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  //   //  this.router.navigate(['Admin/dummy'])

  //   // import Swal from 'sweetalert2';



  })


}




}
