import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-edit-profiles',
  templateUrl: './edit-profiles.component.html',
  styleUrls: ['./edit-profiles.component.css']
})
export class EditProfilesComponent implements OnInit {

  constructor(private router:Router,private web3:Web3Service) { }


  ngOnInit() {
  }

}
