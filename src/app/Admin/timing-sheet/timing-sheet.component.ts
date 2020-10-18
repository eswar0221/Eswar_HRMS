import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-timing-sheet',
  templateUrl: './timing-sheet.component.html',
  styleUrls: ['./timing-sheet.component.css']
})
export class TimingSheetComponent implements OnInit {

  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }


  ngOnInit() {
this.getData()

  }
  addwork(){
    this.router.navigate(['Admin/addtimingsheet'])

  }
  saddSheets:any;
  getData(){
    this.web3.getaddtimings().subscribe((res)=>{

      this.saddSheets=res;
      console.log(res)
    })
  }
  // dfgh


  projs:any;
  row(event){
    if(event.target){
      var tr = $(event.currentTarget).closest('tr')
      this.projs = tr.find(".case").text(); 
      // let data={
      //   "casenum":this.projs
      // }
      // console.log("caseeeeeeeeeeee",data)
      //   console.log("Project        sssssssss",data)
        localStorage.setItem("Project",this.projs);
        this.router.navigate(['Admin/edittimingsheet'])
    }
  }
  
  projec:any;
  
  
  deleteRow(event){
    var tr = $(event.currentTarget).closest('tr')
    this.projec = tr.find(".case").text(); 
      var rv=window.confirm("You want to delete?")
      if(rv)
      {
        let data={
          "first_Name":this.projec
        }
       console.log("data  is ",data);
       
        this.web3.deladdtimings(data).subscribe(res=>{
          // alert(dt.msg)
          console.log("dell data",res);
          localStorage.removeItem("projec")
          Swal.fire({
            text: 'Project Deleted',
            icon: 'success',
            confirmButtonText: 'OK',
            
          });
          // import Swal from 'sweetalert2';
          // localStorage.removeItem("")
          this.getData()

    
        })
      }
    
    
  }
  








// addtimingreg
// updateaddtimings
// deladdtimings
// getaddtimingsID
// getaddtimings










}
