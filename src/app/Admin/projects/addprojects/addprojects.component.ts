import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';
 import Swal from 'sweetalert2';
//  import {NgSelectModule, NgOption} from '@ng-select/ng-select';
//  import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-addprojects',
  templateUrl: './addprojects.component.html',
  styleUrls: ['./addprojects.component.css']
})
export class AddprojectsComponent implements OnInit {
  list : string[];
  // list:  Array<any>=[];

  file:File;
  selectedCityIds: string[];

  checkedList : any[];
  currentSelected : {};
  constructor(private http:Web3Service,private router:Router) {
    
    // this.list = 
    // [
    //   {name :'India',checked : false},
    //   {name :'US',checked : false},
    //   {name :'China',checked : false},
    //   {name :'France',checked : false}
    // ]
  }
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  items = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];
  
  ngOnInit() {
    this.getclientData();
    this.getData();
    this.getempData()
    this.getclientData();
  }
  back(){
    this.router.navigate(['Admin/projects'])

  }

  ServiceData = {
 
  }
 empteml:  Array<any>=[];
  clients:any;
  getclientData(){
    this.http.getclients().subscribe((res)=>{
  
      this.clients=res;

      console.log(res)
    })
  }
  empdata:any;
  getempData(){
    this.http.empregdata().subscribe((resp)=>{

      this.empdata=resp;
      console.log(resp);
      
      for (let pr = 0; pr < resp.length; pr++) {
        if(resp[pr].designation !=="Devloper" && resp[pr].designation !=="Testing"){
          this.empteml.push(resp[pr].firstname)
          console.log("tema",this.empteml);
          
        }
        
      }
      console.log(resp)
    })
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
  getData(){
    this.http.empregdata().subscribe((res1)=>{

      this.list=res1;
      console.log(this.list)
    })
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
    formData.append("file",this.file,this.file.name)
    
    this.http.projectadd(formData).subscribe((res)=>{
      console.log(res);
      
      Swal.fire({
        text: 'Project Added',
        icon: 'success',
        confirmButtonText: 'OK',
        
      });
      this.router.navigate(['Admin/projects'])
      // import Swal from 'sweetalert2';


      
    })


  }
  // shareCheckedList(item:any[]){
  //   console.log(item);
  // }
  // shareIndividualCheckedList(item:{}){
  //   console.log(item);
  // }
}
