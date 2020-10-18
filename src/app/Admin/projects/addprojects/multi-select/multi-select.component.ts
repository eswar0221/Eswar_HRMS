// import { Component, OnInit, Input, Output } from '@angular/core';
import {Component,Input,Output,EventEmitter, OnInit} from '@angular/core';
import { Web3Service } from 'src/app/web3.service';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  // list : any[];

  // // @Input() list:any[]; 
    
  //   @Output() shareCheckedList = new EventEmitter();
  //   @Output() shareIndividualCheckedList = new EventEmitter();
    
    
  //   checkedList : any[];
  //   currentSelected : {};

  // constructor(private web3:Web3Service) {
  //   this.checkedList = [];
  //  }
  //  getData(){
  //   this.web3.empregdata().subscribe((res1)=>{

  //     this.list=res1.firstname;
  //     console.log(res1)
  //   })
  // }
  //      getSelectedValue(status:Boolean,value:String){
  //       if(status){
  //         this.checkedList.push(value);  
  //       }else{
  //           var index = this.checkedList.indexOf(value);
  //           this.checkedList.splice(index,1);
  //       }
        
  //       this.currentSelected = {checked : status,name:value};

  //       //share checked list
  //       this.shareCheckedlist();
        
  //       //share individual selected item
  //       this.shareIndividualStatus();
  //   }
  //   shareCheckedlist(){
  //        this.shareCheckedList.emit(this.checkedList);
  //   }
  //   shareIndividualStatus(){
  //       this.shareIndividualCheckedList.emit(this.currentSelected);
  //   }

ngOnInit(){
  // this.getData()
}
constructor(private web3:Web3Service) {
  //   this.checkedList = [];
   }
}
