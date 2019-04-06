import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

value;
balance;

  constructor(private bankService: BankService) {}
  
  onClick() {
    console.log(this.value)
  }
  

let withdraw = {
    if (this.value <= this.balance){ 
      return (this.value - this.balance)
    } else {
          return alert("Nice Try!")
    }
  }
 
 
 
}