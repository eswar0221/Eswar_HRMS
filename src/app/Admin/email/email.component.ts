import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private web3:Web3Service,private router:Router) { }


  ngOnInit() {
  }
viewmail(){

  this.router.navigate(['Admin/viewemail'])

}


}
