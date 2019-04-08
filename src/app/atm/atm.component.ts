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
  
  
  withdraw(){
    this.bankService.withdraw(this.value)
    // if (this.value <= this.account.balance){ 
    //   this.account.balance = this.account.balance - this.value
    //   this.bankService.updateBalance(this.account.balance)
    //   return (this.account.balance), alert("Success! $" + this.value + " has been withdrawn.")    
    //   } else if (this.value > this.account.balance){
    //   return alert(`WARNING: Insufficient funds
    //   Please check current balance.`)
    // }else {
    //   return alert(`Please enter a number.`)
    // }
  }
  
  deposit(){
    this.bankService.deposit(this.value)
    // this.account.balance += this.value
    // this.bankService.updateBalance(this.account.balance)
    // return (this.account.balance), alert("Success! $" + this.value + " has been deposited.")
  }
  
  balanceInquiry(){
    this.bankService.balanceInquiry(this.value)
  //   alert(`Current balance: $` + this.account.balance + ` Click OK to continue.`)
  }
}