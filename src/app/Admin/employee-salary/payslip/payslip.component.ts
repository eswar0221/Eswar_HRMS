import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';
import  html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { ModalDismissReasons, NgbModalOptions, NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  range = [];
  gtyu:Boolean;
  ghjklj:Boolean;
  mon:any;
  noofdays:any;

  syear:any;
  mon1:any;
  constructor(private router : Router, private web3: Web3Service, private modalService: NgbModal,public dialog: MatDialog)
    { 
     // this.oday_Date =this.datePipe.transform( new Date(),'yyyy-MM-dd  h:mm:ss');
     // console.log(this.oday_Date);
     var year = new Date().getFullYear();
     
     for (var i = 2015; i < year +1; i++) {
         this.range.push(i);
     }
     
     
  }
  months:Array<any> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  public Edata : Array<any> = [];cau_leaves:any;medi_leaves:any;cau_leaves1:any;medi_leaves2:any;
// Edata:any;
  ngOnInit() {
    this.getempdaid();

    this.gtyu=true;
    this.ghjklj=false;
    this.getempbanbkData();
    this.getDataIndividual();
  }
  ddfgf:Array<any>=[];
  nodaemp:Array<any>=[];
    getempdaid(){
      var ids= localStorage.getItem("empsalid")

      let data={
        "employeeid":ids
      }
      this.web3.getEmpById(data).subscribe((resl)=>{
     console.log("emp details",resl[0]);
     this.nodaemp.push(resl[0].noofleaves)
     this.cau_leaves1=resl[0].casual_lev
     this.medi_leaves2=resl[0].medical_lev
      this.ddfgf.push(resl[0])

    })
    }
  back(){
    this.router.navigate(['Admin/empsal'])
  }
  closing(){
    this.getindileavesdata();

    this.gtyu=false;
    this.ghjklj=true;
    if(this.mon =="January"){
      this.noofdays=31
    }
    if(this.mon =="February" && (this.mon1 % 4) !==0  ){   this.noofdays=28}
    if(this.mon =="February" && (this.mon1 % 4) ==0  ){   this.noofdays=29} if(this.mon =="March"){   this.noofdays=31 } if(this.mon =="April"){ this.noofdays=30 } 
    if(this.mon =="May"){   this.noofdays=31} if(this.mon =="June"){   this.noofdays=30 } if(this.mon =="July"){ this.noofdays=31 } 

    if(this.mon =="August"){this.noofdays=31 } if(this.mon =="September"){ this.noofdays=30}
    if(this.mon =="October"){this.noofdays=31 } if(this.mon =="November"){ this.noofdays=30}
if (this.mon== "December") {
  this.noofdays=31
}
    // this.modalReference.close();
   }
  getDataIndividual(){

    var id= localStorage.getItem("empsalid")
    let data1={
      "employeeid":id
    }
    this.web3.getempsalId(data1).subscribe((res)=>{
    //  this.DataById=res[0].email;
    this.Edata.push(res[0])
    localStorage.setItem("Ne_sa",res[0].Net_Salary)
    localStorage.setItem("Ne_det",res[0].Total_Deductions)
    //  this.Edata=res[0]
      console.log("sal",res[0])
         })
   
    }
    paiddays:any; daysnopay:any;availeaves:any;paidperiod:any;sickleaves:any;causuleave:any;availeaves1:any;
        approvedata:Array<any>=[];approvedatam:Array<any>=[]; approvedatac:Array<any>=[];
        getnetsal:any;netesal:any;perdatsal:any;Totalleve:any;salIDnet:any;Leave1:any; Leave2:any; Leave:any;net_detec:any;lospay:any;lospay1:any;lospay2:any;lospay3:any;
        Total_Deductions:any;eswa_cas:any;
    getindileavesdata(){
     
      let dataL={
        "employeeid":this.proje,     
      "fmonth": this.mon,
        "fyear": this.mon1
      }
      console.log("pay datasdfcvghbjnmk@@@@@@@",dataL);
     this.getnetsal =localStorage.getItem("Ne_sa")
  this.net_detec =localStorage.getItem("Ne_det")

      console.log("locs", this.getnetsal);
      console.log("locs", this.net_detec);
      
      this.web3.getMonYearLeav(dataL).subscribe((reshg)=>{
        console.log("lev data ", reshg);        
        if(reshg.length == 0){
          alert("This Month No Leaves Apply")
          this.paiddays  = this.noofdays
          this.paidperiod=this.noofdays
    // this.availeaves1= 0
    this.daysnopay=0
    this.causuleave=0
    this.sickleaves=0
    this.Leave=0
    this.lospay1=0

    this.Total_Deductions = this.net_detec

this.perdatsal=(this.getnetsal/this.noofdays )
console.log("per dat sal",this.perdatsal);

    this.netesal = this.getnetsal
    this.salIDnet = this.getnetsal
    // this.availeaves1=this.nodaemp
 this.cau_leaves = this.cau_leaves1
     this.medi_leaves =  this.medi_leaves2
          
        }
console.log("leave sadata leng",reshg.length);
for (let le = 0; le < reshg.length; le++) {
 if( (reshg[le].status == "Approved") &&  reshg[le].leavetype == "casual" && reshg[le].leavetype == "medical"   ){
  this.approvedata.push(reshg[le]);
  console.log("allada le",this.approvedata.length);

  console.log("Approve all data",this.approvedata);
 };
 if(reshg[le].status=="Approved" && ( reshg[le].leavetype == "casual" ) ){
  this.approvedatac.push(reshg[le]);
  console.log("Approve cas data",this.approvedatac);
 };
 if(reshg[le].status=="Approved" &&( reshg[le].leavetype == "medical" ) ){
  this.approvedatam.push(reshg[le]);
  console.log("Approve med data",this.approvedatam);
 };
}
for (let m_k = 0; m_k < this.approvedatac.length; m_k++) {
  const element = this.approvedatac[m_k];
  if (  (this.approvedatac[m_k].losofpay ==0 )   && (this.approvedatac[m_k].losofpay < 1)   ) {
    console.log("allada le",this.approvedata.length);
   if ( this.approvedatac[m_k].losofpay < 1) {
    console.log("lop 154",this.approvedatac[m_k].losofpay);
    this.Total_Deductions= this.net_detec    
    this.paiddays  = this.noofdays
    this.paidperiod=this.noofdays
    this.cau_leaves= this.approvedatac[m_k].casual_lev
    this.salIDnet=this.getnetsal
    this.perdatsal=(this.getnetsal/this.noofdays )
    console.log("log day ",this.perdatsal);
    this.Leave= 0    
    this.daysnopay=0
    // this.lospay1=0
  this.causuleave= this.approvedatac[m_k].No_Of_Days_Leave_Apply

   }
  
  }
  if ( (this.approvedatac[m_k].losofpay !== 0 ) && ( this.approvedatac[m_k].leavetype=="casual")  ) {
    console.log("allada le",this.approvedata.length);

    console.log("lop 165",this.approvedatac[m_k].losofpay);
    this.perdatsal=(this.getnetsal/this.noofdays )
console.log("per dat sal",this.perdatsal);
        if( this.approvedatac.length > 1 && this.approvedatac.length <=2 ){
    for (let index = 0; index < this.approvedatac.length; index++) { 
       this.causuleave= parseInt(this.approvedatac[0].No_Of_Days_Leave_Apply) + parseInt(this.approvedatac[1].No_Of_Days_Leave_Apply  )  
this.lospay= parseInt(this.approvedatac[0].losofpay) + parseInt(this.approvedatac[1].losofpay)

console.log("count",this.lospay);
    }
 
  }
  else{
    if( this.approvedatac.length ==3 && this.approvedatac.length > 2){
      this.causuleave= parseInt(this.approvedatac[0].No_Of_Days_Leave_Apply) + parseInt(this.approvedatac[1].No_Of_Days_Leave_Apply) + parseInt(this.approvedatac[2].No_Of_Days_Leave_Apply ) 
this.lospay= parseInt(this.approvedatac[0].losofpay) + parseInt(this.approvedatac[1].losofpay) + parseInt(this.approvedatac[2].losofpay)
console.log("count",this.lospay);

    }
    else{
  this.causuleave= this.approvedatac[m_k].No_Of_Days_Leave_Apply
this.lospay= this.approvedatac[m_k].losofpay
console.log("test lop 1 cas",this.lospay);


    }
  
  }

 
  // this.sickleaves = localStorage.getItem("sick")
console.log("get lops",localStorage.getItem("lopsm"));

    this.Totalleve = (this.causuleave +  this.sickleaves) 
    // this.Totalleve = (this.causuleave )

    this.Leave= Math.round(this.perdatsal * this.lospay )
    if (this.approvedatam.length == 0) {
      // localStorage.setItem("lops",this.lospay)
    
    
      this.Total_Deductions=  (parseInt(this.net_detec) + parseInt( this.Leave))
      this.salIDnet= Math.round(this.getnetsal-(this.perdatsal * this.lospay))
      this.medi_leaves = this.approvedatac[m_k].medical_lev

    this.paiddays  = this.noofdays - this.lospay
    this.paidperiod=this.noofdays - this.lospay
    this.daysnopay= this.lospay
    this.lospay1=this.lospay
  }
  else{
    if (this.approvedatam.length >=1) {
      localStorage.setItem("lops",this.lospay)
  // localStorage.setItem("cas",this.causuleave)
    
    }
  }

this.cau_leaves =0    

      }
    }
    for (let m_l = 0; m_l < this.approvedatam.length; m_l++) {   
    console.log("allada le",this.approvedata.length);
    
       if ( ( this.approvedatam[m_l].losofpay == 0) && (this.approvedatam[m_l].losofpay < 1) ) {
    console.log("lop medi no lop 146",this.approvedatam[m_l].losofpay);
    if ( this.approvedatam[m_l].losofpay < 1) {
    this.paiddays  = this.noofdays
    this.paidperiod=this.noofdays
    this.cau_leaves= this.approvedatam[m_l].casual_lev
    this.medi_leaves = this.approvedatam[m_l].medical_lev
    this.salIDnet=this.getnetsal
    this.Leave=0
    this.Total_Deductions= this.net_detec
    this.perdatsal=(this.getnetsal/this.noofdays )
    console.log("log day ",this.perdatsal);
    this.daysnopay=0
  this.sickleaves= this.approvedatam[m_l].No_Of_Days_Leave_Apply
    }
  }
        if ( (this.approvedatam[m_l].losofpay !== 0 ) && ( this.approvedatam[m_l].leavetype=="medical") ) {
    console.log("allada le",this.approvedata.length);

    console.log("lop 207",this.approvedatam[m_l].losofpay);
    this.perdatsal=(this.getnetsal/this.noofdays )
console.log("per dat sal",this.perdatsal);

    // if(this.approvedata[m_k].leavetype=="casual" && this.approvedata[m_k].leavetype !=="medical"){
      
  if( this.approvedatam.length > 1 && this.approvedatam.length <=2 ){
   
       this.sickleaves= parseInt(this.approvedatam[0].No_Of_Days_Leave_Apply) + parseInt(this.approvedatam[1].No_Of_Days_Leave_Apply   )
console.log("count sick leac",this.sickleaves);
this.lospay=parseInt( this.approvedatam[0].losofpay) +parseInt( this.approvedatam[1].losofpay)
console.log("count lop",this.lospay);

    }
  
  else{
    if( this.approvedatam.length ==3 && this.approvedatam.length > 2){
      this.sickleaves= parseInt(this.approvedatam[0].No_Of_Days_Leave_Apply) + parseInt(this.approvedatam[1].No_Of_Days_Leave_Apply) + parseInt(this.approvedatam[2].No_Of_Days_Leave_Apply)   
this.lospay= parseInt(this.approvedatam[0].losofpay) + parseInt( this.approvedatam[1].losofpay) + parseInt( this.approvedatam[2].losofpay)
console.log("count",this.lospay);

    }
    else{
  this.sickleaves= this.approvedatam[m_l].No_Of_Days_Leave_Apply
this.lospay= this.approvedatam[m_l].losofpay
console.log("test lop 1 sik",this.lospay);


    }
   
  }  
  localStorage.setItem("sick",this.sickleaves)
 
  // this.causuleave = localStorage.getItem("cas")
  this.eswa_cas=localStorage.getItem("lops")
console.log("get lops",this.eswa_cas);

    this.Totalleve = (this.causuleave +  this.sickleaves) 
    // this.Totalleve = (this.sickleaves )
    if (this.approvedatac.length == 0) {

    this.salIDnet= Math.round(this.getnetsal- (this.perdatsal  * this.lospay))
    this.Leave= Math.round(this.perdatsal * this.approvedatam[m_l].losofpay)
    this.Total_Deductions=  (parseInt(this.net_detec) + parseInt( this.Leave))
    this.lospay1=this.lospay
    this.paiddays  = this.noofdays - this.lospay
    this.paidperiod=this.noofdays - this.lospay
    this.daysnopay=this.lospay
this.medi_leaves = 0   
    this.cau_leaves= this.approvedatam[m_l].casual_lev
    }
    else{
      if (this.approvedatac.length >=1) {
        localStorage.setItem("lopsm",this.lospay)
      
      } 
      this.lospay1= parseInt(this.eswa_cas) + parseInt(this.lospay)
    this.salIDnet= Math.round(this.getnetsal- (this.perdatsal  * this.lospay1))
    this.Leave= Math.round(this.perdatsal * this.lospay1)
    this.Total_Deductions=  (parseInt(this.net_detec) + parseInt( this.Leave))
    this.paiddays  = this.noofdays - this.lospay1
    this.paidperiod=this.noofdays - this.lospay1
    this.daysnopay=this.lospay1

    }
      }
      // }       
            }
    })


    }

    proje:any;
    // gghjgjhj:any;
    gghjgjhj:Array<any>=[];
    getempbanbkData(){
      this.proje=localStorage.getItem("empsalid")
  
      let data2={
        "employeeid":this.proje
      }
  
      this.web3.getempbankId(data2).subscribe((resd)=>{
        this.gghjgjhj.push(resd[0]);
       console.log("bank deta",resd[0]);
      })
    }
    pdf() {
      var data = document.getElementById('pdff');
      html2canvas(data).then(canvas => {
        var imgWidth = 180; 
        var pageHeight = 180;  
        var imgHeight = canvas.height * imgWidth / canvas.width ;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jsPDF('p','mm','a4');
       
        pdf.addImage(contentDataURL, 'JPEG', 0, 0, 210,290)
        pdf.save('Payslip.pdf')
    });
     }
     modalReference: NgbModalRef;       // modal popup refrence variable
     closeResult: string;         // modal pop up close string
     openLargeModalPopup(content) {
    
       this.modalReference = this.modalService.open(content, { size: 'xl' });
       this.modalReference.result.then((result: any) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }
     openMediumModalPopup(content) {
       let ngbModalOptions: NgbModalOptions = {
         backdrop: 'static',
         keyboard: false,
       };
       this.modalReference = this.modalService.open(content, ngbModalOptions);
       this.modalReference.result.then((result: any) => {
         this.closeResult = `Closed with: ${result}`;
       }, (reason) => {
         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
       });
     }
     private getDismissReason(reason: any): string {
       if (reason === ModalDismissReasons.ESC) {
         return 'by pressing ESC';
       }
       else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
         return 'by clicking on a backdrop';
       } else {
         return `with: ${reason}`;
       }
     }
     value:any;amount:any;
     convertNumberToWords(salIDnet) {
      // debugger
       var words = new Array();
       words[0] = '';
       words[1] = 'One';
       words[2] = 'Two';
       words[3] = 'Three';
       words[4] = 'Four';
       words[5] = 'Five';
       words[6] = 'Six';
       words[7] = 'Seven';
       words[8] = 'Eight';
       words[9] = 'Nine';
       words[10] = 'Ten';
       words[11] = 'Eleven';
       words[12] = 'Twelve';
       words[13] = 'Thirteen';
       words[14] = 'Fourteen';
       words[15] = 'Fifteen';
       words[16] = 'Sixteen';
       words[17] = 'Seventeen';
       words[18] = 'Eighteen';
       words[19] = 'Nineteen';
       words[20] = 'Twenty';
       words[30] = 'Thirty';
       words[40] = 'Forty';
       words[50] = 'Fifty';
       words[60] = 'Sixty';
       words[70] = 'Seventy';
       words[80] = 'Eighty';
       words[90] = 'Ninety';
      //  this.amount = salIDnet;
      // var amount1 = this.amount.toString();
      //  var atemp = amount1.split(".");
      
      this.amount = salIDnet.toString();
      var atemp = this.amount.split(".");
      var number = atemp[0].split(",").join("");


      //  var number = salIDnet.split(",").join("");
       var n_length = number.length;
       var words_string = "";
              //  var value = "";
   
       if (n_length <= 9) {
           var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
           var received_n_array = new Array();
           for (var i = 0; i < n_length; i++) {
               received_n_array[i] = number.substr(i, 1);
           }
           for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
               n_array[i] = received_n_array[j];
           }
           for (var i = 0, j = 1; i < 9; i++, j++) {
               if (i == 0 || i == 2 || i == 4 || i == 7) {
                   if (n_array[i] == 1) {
                       n_array[j] = 10 + (n_array[j]);
                       n_array[i] = 0;
                   }
               }
           }
           for (var i = 0; i < 9; i++) {
               if (i == 0 || i == 2 || i == 4 || i == 7) {
                   this.value = n_array[i] * 10;
               } else {
                this.value = n_array[i];
               }
               if ( this.value != 0) {
                   words_string += words[ this.value] + " ";
               }
               if ((i == 1 &&  this.value != 0) || (i == 0 &&  this.value != 0 && n_array[i + 1] == 0)) {
                   words_string += "Crores ";
               }
               if ((i == 3 &&  this.value != 0) || (i == 2 &&  this.value != 0 && n_array[i + 1] == 0)) {
                   words_string += "Lakhs ";
               }
               if ((i == 5 &&  this.value != 0) || (i == 4 &&  this.value != 0 && n_array[i + 1] == 0)) {
                   words_string += "Thousand ";
               }
               if (i == 6 &&  this.value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                   words_string += "Hundred and ";
               } else if (i == 6 &&  this.value != 0) {
                   words_string += "Hundred ";
               }
           }
           words_string = words_string.split("  ").join(" ");
       }
       return words_string;
   }

}
