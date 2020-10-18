import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
            import Swal from 'sweetalert2';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.css']
})
export class EstimatesComponent implements OnInit {

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }
// RegEstimates delEstimartes updateEstimartes getEstimartesID getEstimartes


  ngOnInit() {
this.getEstimatesdata()
let data ={
  "Estimate_ID":"345678"
}
this.web3.findestimates(data).subscribe(res =>{
console.log("testing  estimates find by ",res);

})

  }
  addcontact(){
    this.router.navigate(['Admin/addestimates'])

  }
  Esti:any;
  getEstimatesdata(){
    this.web3.getEstimartes().subscribe((res)=>{
      this.Esti=res;
      console.log(res);
      
    })
      }
      Estimate_ID:any;
      row(event){
      
        if(event.target){
          var tr = $(event.currentTarget).closest('tr')
              this.Estimate_ID = tr.find(".case").text(); 
              console.log("wsdftghjuk 222222",this.Estimate_ID);
              
              let data={
                "Estimate_ID":this.Estimate_ID
              }
      
              console.log("Estimate_ID   sssssssss",data)
              localStorage.setItem("Estimate_ID",this.Estimate_ID);
              // alert("hi")
              this.router.navigate(['Admin/editestimates'])
            }
    
    
    
    
        //  console.log("wsdftghjuk 222222",Estimate_ID);
         
       
       
        //  // console.log("Department   sssssssss",data)
        //  localStorage.setItem("Estimate_ID",Estimate_ID);
        //  // alert("hi")
        //  this.router.navigate(['Admin/editholidays'])
       
       }

       del(Estimate_ID){
        localStorage.setItem("Estimate_ID",Estimate_ID)
        this.Estimate_ID=localStorage.getItem("Estimate_ID")
        var rv=window.confirm("You want to delete?")
        if(rv)
        {
          let data={
            "Estimate_ID":this.Estimate_ID
          }
         console.log("data   ",data);
         
          this.web3.delEstimartes(data).subscribe(res=>{
            // alert(dt.msg)
            console.log("dell data",res);
            localStorage.removeItem("Estimate_ID")
            Swal.fire({
              text: 'Estimates Deleted',
              icon: 'success',
              confirmButtonText: 'OK',
              
            });
            // import Swal from 'sweetalert2';
            this.getEstimatesdata();
      
          })
        }
      
      }
      
}
