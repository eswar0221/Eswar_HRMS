import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-reg-all',
  templateUrl: './emp-reg-all.component.html',
  styleUrls: ['./emp-reg-all.component.css']
})
export class EmpRegAllComponent implements OnInit {
empreg:Boolean;
empsal:Boolean;
empbank:Boolean;
  constructor() { }

  ngOnInit() {
  }
  empregs(){
this.empreg=true;
this.empsal=false
this.empbank=false

}
empsals(){
  this.empreg=false;
  this.empsal=true
  this.empbank=false 
}
empbanks(){
  this.empreg=false;
this.empsal=false
this.empbank=true
}


}
