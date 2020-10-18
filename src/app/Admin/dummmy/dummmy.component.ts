import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-dummmy',
  templateUrl: './dummmy.component.html',
  styleUrls: ['./dummmy.component.css']
})
export class DummmyComponent implements OnInit {
  sats:any;hrmandata:any;
  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }

  ngOnInit() {
    this.getData()
    this.getDataq()

  }

  getData(){
    this.web3.empregdata().subscribe((res)=>{

      this.sats=res;
      console.log(res)
    })
  }
  getDataq(){
    this.web3.gethrman().subscribe((res)=>{

      this.hrmandata=res;
      console.log(res)
    })
  }
  tmpe(){
    this.router.navigate(['Admin/adddummy'])
  }
}
