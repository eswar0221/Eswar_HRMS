import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  sats: any;
  tableSEcond_tab: boolean;
  secondTable: boolean;
  empid: any;
  searchText:any;
  constructor(private modalService : NgbModal, private web3: Web3Service,private router:Router) {


  }



  ngOnInit() {
    $('.tabs a').on('click', function(){
      $('.tabs .active').removeClass('active');
      $(this).addClass('active');
    });
   
    this.tableSEcond_tab = true;
    // var token = localStorage.getItem("token");
    // var decoded = jwt_decode(token); 
    // console.log(decoded.iat); 
    // var d=new Date(decoded.iat)
    console.log('time111111111111');
    this.getProData();
   
  }

  getProData(){
    this.web3.getProjectData().subscribe((res)=>{

      this.sats=res;
      console.log(res)
    })
  }

  navigate(){
  this.router.navigate(["Admin/addprojects"])
}

SecondLogo(){
  this.secondTable = false;
  this.tableSEcond_tab = true;
}

FirstLogo(){
  this.tableSEcond_tab = false;
  this.secondTable = true;
 
}

edit(event){
  if(event.target){
  var tr = $(event.currentTarget).closest('tr')
      this.empid = tr.find(".case").text(); 
      let data={
        "casenum":this.empid
      }
      console.log("caseeeeeeeeeeee",data)
      localStorage.setItem("caseno",this.empid);

  this.router.navigate(["Admin/editprojects"])

  }
}
projectid:any;
del(projectid){
  localStorage.setItem("projectid",projectid)
  this.projectid=localStorage.getItem("projectid")
  var rv=window.confirm("You want to delete?")
  if(rv)
  {
    let data={
      "projectid":this.projectid
    }
   console.log("data   ",data);
   
    this.web3.delproject(data).subscribe(res=>{
      // alert(dt.msg)
      console.log("dell data",res);
      localStorage.removeItem("projectid")
      Swal.fire({
        text: 'Project Deleted',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      // import Swal from 'sweetalert2';
      this.getProData();

    })
  }

}





}
