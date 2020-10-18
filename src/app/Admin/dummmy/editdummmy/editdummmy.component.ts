import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-editdummmy',
  templateUrl: './editdummmy.component.html',
  styleUrls: ['./editdummmy.component.css']
})
export class EditdummmyComponent implements OnInit {

  ngOnInit() {
    // this.getData()
  }


  constructor(private router:Router,private modalService : NgbModal, private web3: Web3Service) { }
  back(){
    this.router.navigate(['Admin/dummy'])
  }

}
