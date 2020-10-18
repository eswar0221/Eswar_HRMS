import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-edit-hr-bank',
  templateUrl: './edit-hr-bank.component.html',
  styleUrls: ['./edit-hr-bank.component.css']
})
export class EditHrBankComponent implements OnInit {

  constructor(private router : Router, private web3: Web3Service) { }


  ngOnInit() {
  }

}
