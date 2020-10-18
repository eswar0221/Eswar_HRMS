import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  // styleUrls: ["../assets/css/semidark-style-1.min.css"] 
})
export class LoginComponent implements OnInit {
  array:Array<any>=[];
  array1:Array<any>=[];
  array2:Array<any>=[];
  occu:Array<any>=[];
  username: any;
  pass: any;
  username1: any;
  pass1: any;
  pass3: any;
  pass4: any;
  username_1:Array<any>=[];
  pass_1:Array<any>=[];
  pass_4:any;

  constructor(private router: Router, private _web3service : Web3Service) { }
//  8978972793 
  ngOnInit() {
    this.getData()
    this.gethrData()
    localStorage.clear();

     

  }

  user = {
    email : "",
    password : ""
  }
  public error_message;
  public show : boolean = false;
  // onSubmit(user){
  //      if (user.email == "admin" && user.password == "admin"){
  //       localStorage.setItem("openadmin", user.email);
  //       this.router.navigate(['Admin/admin-dashboard'], { replaceUrl: true });
  //     }
   
  //  }
  sats:any=[];
  getData(){
    this._web3service.empregdata().subscribe((res)=>{

      this.sats=res;
       for (let z = 0; z < this.sats.length; z++) {
        this.array= this.sats[z].email;
        // console.log(this.array);
        
        this.array1 = this.sats[z].cpassword;}
      // console.log(res)
    })
  }
  satshr:any=[];
  gethrData(){
    this._web3service.gethrman().subscribe((res)=>{
      this.satshr=res;

      for (let z = 0; z < this.satshr.length; z++) {
        this.array2 = this.sats[z].email;
        // console.log(this.array2);

        this.occu = this.sats[z].cpassword;}
      // console.log(res)
    })
  }
  toke:any;
   onSubmit1(user){
    this.getData()
    this.gethrData()
    if (user.email == "admin" && user.password == "admin"){
            localStorage.setItem("openadmin", user.email);
            this.router.navigate(['Admin/admin-dashboard'], { replaceUrl: true });
          }
          else{
            for (let i = 0; i < this.sats.length; i++) {
              const element = this.sats[i].email;
              const element1 = this.sats[i].cpassword;
              if (user.email == element && user.password == element1){
                var gmail= localStorage.setItem("openEmployee", user.email);
                localStorage.setItem("Email_ID",user.email)
              this.router.navigate(['Admin/admin-dashboard'], { replaceUrl: true });
            }
            }
                      
                        for (let z = 0; z < this.satshr.length; z++) {
                          const elemente = this.satshr[z].email;
                          const elements = this.satshr[z].cpassword;
                          if (user.email == elemente && user.password == elements){
                            localStorage.setItem("Managerlogin", user.email);
                localStorage.setItem("Email_ID",user.email)

                    this.router.navigate(['Admin/admin-dashboard'], { replaceUrl: true });
                        }
                        // if (user.email == elemente && user.password == elements){
                        }
            
                      }
               
                      }
   
                      onSubmit(user){
                        if (user.email == "admin" && user.password == "admin"){
                          localStorage.setItem("openadmin", user.email);
  localStorage.setItem("openAdmin",'true');
  // localStorage.setItem("EmailID",user.email)

                          this.router.navigate(['Admin/maindashboard'], { replaceUrl: true });
                        }
                        else{
                        let data={
                          "email":user.email,
                          "cpassword":user.password
                        }
                        this._web3service.hrlogin(data).subscribe((res)=>{
                                  console.log(res.message)                        
                                   
      for (let index = 0; index < res.length; index++) {

        this.username=res[index].email
        this.pass=res[index].cpassword
        // console.log(this.pass);
        
              if (user.email == this.username && user.password == this.pass){
                                
                                  localStorage.setItem("token",res.token);
                                  localStorage.setItem("Managerlogin", user.email);
                localStorage.setItem("Email_ID",user.email)

                                  this.router.navigate(['Admin/hrmanDashboard'], { replaceUrl: true });
              }
            }
            console.log("res.ms",res.message);
            
              if(res.message=="false"){

                this._web3service.login(data).subscribe((Emp)=>{
                
                console.log(Emp.message);
                for (let index = 0; index < Emp.length; index++) {
                  this.username1=Emp[index].email
                  this.pass1=Emp[index].cpassword
                  this.pass3=Emp[index].designation
                  if (this.pass3=="Team_Lead") {
                    
                  
              console.log("desi",this.pass3);
              
                  // console.log(this.pass);
                  
                        if (user.email == this.username1 && user.password == this.pass1 &&  this.pass3 == "Team_Lead" ){
                            var gmail= localStorage.setItem("openTeam_Lead", user.email);
                            localStorage.setItem("Email_ID",user.email)
                
                          this.router.navigate(['Admin/empDashboard'], { replaceUrl: true });
                        }
                      }
                      }
            
                console.log(this.pass3);
                
                              
                  if( this.pass3 !=="Team_Lead" && this.pass3 !=="HR" && this.pass3 !=="Accounting") {
this._web3service.login(data).subscribe((Emp)=>{
console.log(Emp.message);
for (let index = 0; index < Emp.length; index++) {
  this.username1=Emp[index].email
  this.pass1=Emp[index].cpassword
  this.pass4=Emp[index].designation

  // console.log("edr",this.pass1);
  // console.log("edr",this.pass4);
  
        if (user.email == this.username1 && user.password == this.pass1 && (this.pass4 !=="Team_Lead" &&  this.pass4 !=="HR")){
          // alert("hi")
          if( this.pass4 !=="Team_Lead"  &&  this.pass4 !=="HR"){
            var gmail= localStorage.setItem("openEmployee", user.email);
            localStorage.setItem("Email_ID",user.email)

          // this.router.navigate(['Admin/admin-dashboard'], { replaceUrl: true });
           this.router.navigate(['Admin/empDashboard'], { replaceUrl: true });
          }
          
        }
      }
})
                  }

if( this.pass3 == "HR"){
  this._web3service.login(data).subscribe((Emp)=>{
  
  console.log(Emp.message);
  for (let index = 0; index < Emp.length; index++) {
    this.username_1=Emp[index].email
    this.pass_1=Emp[index].cpassword
    this.pass_4=Emp[index].designation
  }
  if (this.pass_4 == "HR") {
    
  if (user.email == this.username_1 && user.password == this.pass_1 && this.pass_4 == "HR"  ){
                                
    // localStorage.setItem("token",res.token);
    localStorage.setItem("Managerlogin", user.email);
localStorage.setItem("Email_ID",user.email)
localStorage.setItem("Email_ID_8",this.pass_4)

    this.router.navigate(['Admin/hrmanDashboard'], { replaceUrl: true });
}
}



})
  }  

  
if( this.pass3 == "Accounting"){
  this._web3service.login(data).subscribe((Emp)=>{
  
  console.log(Emp.message);
  for (let index = 0; index < Emp.length; index++) {
    this.username_1=Emp[index].email
    this.pass_1=Emp[index].cpassword
    this.pass_4=Emp[index].designation
  }
  if (this.pass_4 == "Accounting") {
    
  if (user.email == this.username_1 && user.password == this.pass_1 && this.pass_4 == "Accounting"  ){
                                
    // localStorage.setItem("token",res.token);
    localStorage.setItem("Accounting_login", user.email);
localStorage.setItem("Email_ID",user.email)
localStorage.setItem("Email_ID_8",this.pass_4)

    this.router.navigate(['Admin/empDashboard'], { replaceUrl: true });
}
}



})
  }  

})
                }


  

                                })

                      }
                    }



     
// this._web3service.login(user).subscribe((res)=>{
//   console.log(res.message)
//   // this.toke=res
//   console.log(res.token)
//   console.log("dfghjk",res.payload);
// if(res.message=="invalid password") { Swal.fire({
//     text: res.message,
//     icon: 'error',
//     confirmButtonText: 'OK',
// // import Swal from 'sweetalert2';
    
//   });}
// // console.log("gmail",res.email);
// if(res.message !=="invalid password"){
//   localStorage.setItem("token",res.token);
//  var gmail= localStorage.setItem("openEmployee", user.email);
//   this.router.navigate(['Admin/admin-dashboard'], { replaceUrl: true });
// }
// else{
//   this._web3service.hrlogin(user).subscribe((res)=>{
//         console.log(res.message)
//         console.log(res.token)
//         console.log("dfghjk",res.payload);
        
      
//         localStorage.setItem("token",res.token);
//         localStorage.setItem("Managerlogin", user.email);
//         this.router.navigate(['Admin/admin-dashboard'], { replaceUrl: true });
      
//       })
// }
// })


// }

  // if(!this.toke){
  //   this._web3service.hrlogin(user).subscribe((res)=>{
  //     console.log(res)
  //     console.log(res.token)
    
  //     localStorage.setItem("token",res.token);
  //     localStorage.setItem("Managerlogin", user.email);
  //     this.router.navigate(['Admin/admin-dashboard'], { replaceUrl: true });
    
  //   })
  //   }


   


  
  // }













}
