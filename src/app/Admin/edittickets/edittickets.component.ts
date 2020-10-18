import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edittickets',
  templateUrl: './edittickets.component.html',
  styleUrls: ['./edittickets.component.css']
})
export class EditticketsComponent implements OnInit {
  file: File;
  DataById: any;
  data: any;
  name: any;
  // Admin/addclient
  constructor(private router : Router, private web3: Web3Service) { }

  ServiceData = {
    TicketSubject : "",
    AssignStaff : "",
    TicketId : "",
    file: "",
    Priority : "",
    Description : "",
    // lastname : "",
    // email : "",
    // cpassword : "",
    // designation : "",
  
  }

  back(){
    this.router.navigate(['Admin/tickets'])
  }
  incomingFile(event){
    console.log(event);
this.file=(event.target.files[0]);
  }

  getDataIndividual(){

    var TicketId= localStorage.getItem("TicketId")
    let data={
      "TicketId":TicketId
    }
    this.web3.getTicketId(data).subscribe((res)=>{
      console.log(res);
      
    //  this.DataById=res[0].email;
    this.ServiceData=res[0]
      // this.ServiceData.TicketSubject=res[0].TicketSubject
      // this.ServiceData.AssignStaff=res[0].AssignStaff
      // this.ServiceData.TicketId=res[0].TicketId
      // this.ServiceData.Priority=res[0].Priority
      // this.ServiceData.Description=res[0].Description
      // this.ServiceData.file=res[0].file
      // this.ServiceData.email=res[0].email
      // this.ServiceData.cpassword=res[0].cpassword
      // this.ServiceData.designation=res[0].designation
      // this.ServiceData.company=res[0].company
      console.log(res[0])
     
  
    })
  }
  edit(data){
    console.log(data)
        var formData= new FormData()
    
        formData.append("TicketSubject", data.TicketSubject)
        formData.append("email", data.email)
       
        formData.append("TicketId", data.TicketId)
        formData.append("Priority", data.Priority)
        formData.append("Description", data.Description)
        // formData.append("file",this.file,this.file.name)
        formData.append("status",  data.status)

        // formData.append("email", ServiceData.email)
        // formData.append("cpassword", ServiceData.cpassword)
        // formData.append("designation", ServiceData.designation)
        // formData.append("file", this.file,this.file.name)
        // formData.append("password", ServiceData.password)
        // console.log("formdata",formData);
        
    this.web3.editticketdata(data).subscribe((res)=>{
      console.log("up date ghn tick",res)


      

      Swal.fire({
        text: 'Ticket Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
    // this.router.navigate(['Admin/tickets'])

    })
    
    }



  ngOnInit() {
   this.getDataIndividual()
  }

}
