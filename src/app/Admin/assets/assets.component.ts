import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  myform: FormGroup;
  
  // data:any=[{AssetUser:"eswar",AssetId:12,AssetName:"xyz" ,Purchase:12/12/12,Warranty:"failed",Amount:1000 },
  // {AssetUser:"eswar",AssetId:12,AssetName:"xyz" ,Purchase:12/12/12,Warranty:"failed",Amount:1000 }
  // ]

data:any;
  constructor(private router:Router,private web3:Web3Service) { }
  addassets(){
    this.router.navigate(['Admin/addassets'])
  }
  getData(){
    this.web3.getAssetsdata().subscribe((res)=>{
  
      this.data=res;
      console.log(res)
    })
  }
  
  // delAssets
  // 
  // getAssetsno
  // getAssetsdata
  // 
  Assetid:any;
  row(event){
    if(event.target){
    var tr = $(event.currentTarget).closest('tr')
        this.Assetid = tr.find(".case").text(); 
        console.log("wsdftghjuk 222222",this.Assetid);
        
        let data={
          "Assetid":this.Assetid
        }

        console.log("Assetid   sssssssss",data)
        localStorage.setItem("Assetid",this.Assetid);
        // alert("hi")
        this.router.navigate(['Admin/editassets'])
      }
  }
  cliid:any;
  deleteRow(event){
    if(event.target){
      var tr = $(event.currentTarget).closest('tr')
          this.cliid = tr.find(".case").text(); 
          console.log("wsdftghjuk 222222",this.cliid);
          
    var rv=window.confirm("You want to delete?")
    if(rv)
    {
      let data={
        "Assetid":this.cliid
      }
     console.log("data   ",data);
     
      this.web3.delAssets(data).subscribe(res=>{
        // alert(dt.msg)
        console.log("dell data",res);
        
        this.getData()
      })
    }
  }
  }



  ngOnInit() {
    this.getData()

  }

}
