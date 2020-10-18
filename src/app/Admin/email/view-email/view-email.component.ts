import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-email',
  templateUrl: './view-email.component.html',
  styleUrls: ['./view-email.component.css']
})
export class ViewEmailComponent implements OnInit {

  constructor(private web3:Web3Service,private router:Router) { }


  ngOnInit() {
  }
  back(){
  this.router.navigate(['Admin/email'])

  }
mail(){

  this.router.navigate(['Admin/email'])

}

}
