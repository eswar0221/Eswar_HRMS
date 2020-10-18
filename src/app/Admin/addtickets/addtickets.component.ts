import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import { v4 as uuid } from 'uuid';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addtickets',
  templateUrl: './addtickets.component.html',
  styleUrls: ['./addtickets.component.css']
})
export class AddticketsComponent implements OnInit {
  file: File;
  list:any;
  emaitic:any;
  ServiceData:any={
  }
  constructor(private router:Router,private web3: Web3Service) { }


  ngOnInit() {
    this.ServiceData.email= localStorage.getItem("Email_ID")
    // email: localStorage.getItem("Email_ID")
   
      console.log(typeof uuid());
      // this.list.push(uuid());
      this.ServiceData.TicketId=uuid();
  
    
  }



  back(){
    this.router.navigate(['Admin/tickets'])
  }
    public birthdate: Date;
    public age: number;
    date = Date.now();
  
    public CalculateAge(): void {
      console.log("hi");
 console.log(new Date(this.birthdate));
 
    var timeDiff = Math.abs(Date.now() - new Date(this.birthdate).getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      
    }


  incomingFile(event){
    console.log(event);
this.file=(event.target.files[0]);
  }


  register(ServiceData){
    console.log(ServiceData)
        var formData= new FormData()
    
        formData.append("TicketSubject", ServiceData.TicketSubject)
        // formData.append("AssignStaff", ServiceData.AssignStaff)       
        formData.append("TicketId", ServiceData.TicketId)
        formData.append("Priority", ServiceData.Priority)
        formData.append("Description", ServiceData.Description)
        formData.append("status", "open")
        formData.append("email", ServiceData.email)
       
        formData.append("file", this.file,this.file.name)
    this.web3.sendToTicket(formData).subscribe((res)=>{
      console.log(res)


      Swal.fire({
        text: 'Ticket Added',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    
      
    })
      
    
    }







 
}
