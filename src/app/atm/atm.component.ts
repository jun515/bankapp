import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {
  account;
  value;

  constructor(private bankService: BankService) {}
  
  ngOnInit() {
    this.account = this.bankService.getAccount();
  }
  
  
  withdrawl(){
    if (this.value <= this.account.balance){ 
      this.account.balance = this.account.balance - this.value
      this.bankService.updateBalance(this.account.balance)
      return (this.account.balance)
    } else {
      return alert("Nice Try!")
    }
  }
  
  deposit(){
    this.account.balance += this.value
     this.bankService.updateBalance(this.account.balance)
    return (this.account.balance)
  }
}