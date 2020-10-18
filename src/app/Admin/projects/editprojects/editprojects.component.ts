import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
    import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprojects',
  templateUrl: './editprojects.component.html',
  styleUrls: ['./editprojects.component.css']
})
export class EditprojectsComponent implements OnInit {


  file:File;
  constructor(private http:Web3Service,private router:Router) { }

  ngOnInit() {
this.getProjectData()
  }
  back(){
    this.router.navigate(['Admin/projects'])
  }

  ServiceData:any = {
    projectname : "",
    startdate :"",
    rate : "",
    time : "",  
    projectleader : "",
    addteam : "",
    client :"",
    to : "",
    priority : "",
    description : "",
    file : ""
  
    

  
  }

  incomingFile(imagedata){
    console.log(imagedata);
this.file=(imagedata.target.files[0]);

  }

  clear(ServiceData){
    ServiceData.projectname = "",
  ServiceData.startdate = "",
  ServiceData.rate = "",
  ServiceData.time = "",  
  ServiceData.projectleader = "",
  ServiceData.addteam = "",
  ServiceData.client = "",
  ServiceData.to = "",
  ServiceData.priority = "",
  ServiceData.description = ""
  ServiceData.file = ""

     
  }

  sendProjectData(projectData){
    console.log(projectData);

    var formData= new FormData();
    formData.append("projectname",projectData.projectname)
    formData.append("startdate",projectData.startdate)
    formData.append("projectid",projectData.projectid)
    // formData.append("time",projectData.time)
    formData.append("projectleader",projectData.projectleader)
    formData.append("addteam",projectData.addteam)
    formData.append("client",projectData.client)
    formData.append("to",projectData.to)
    formData.append("priority",projectData.priority)
    formData.append("description",projectData.description)
    formData.append("status",projectData.status)
    formData.append("file",this.file,this.file.name)
    
    this.http.updateproject(formData).subscribe((res)=>{
      console.log(res);
      Swal.fire({
        text: 'Project Updated',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      localStorage.removeItem("caseno")

      this.router.navigate(['Admin/projects'])
      // import Swal from 'sweetalert2';
      
    })


  }
  proje:any;
  getProjectData(){
    this.proje=localStorage.getItem("caseno")

    let data={
      "projectid":this.proje
    }

    this.http.getprojecid(data).subscribe((res)=>{
      this.ServiceData=res[0];
     



    })
  }








  // getprojecid
  // updateproject


}
