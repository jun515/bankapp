import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  
  account: any = {
    fname: 'Oscar',
    lname: 'Reyes',
    age: 28,
    address: {
      street: '1234 street st',
      city: 'city',
      state: 'state',
      zip: 12345,
      country: 'USA'
    },
    balance: 1000.00,
    currency: 'usd',
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ]
  };

  constructor() {}
  
    getAccount(){
      return this.account
    }
    
    updateBalance(newBalance){
      this.account.balance = newBalance;
    }
    
    withdraw(value){
    if (value <= this.account.balance){ 
      this.account.balance = this.account.balance - value
      this.updateBalance(this.account.balance)
      return (this.account.balance), alert("Success! $" + value + " has been withdrawn.")    
      } else if (value > this.account.balance){
      return alert(`WARNING: Insufficient funds
      Please check current balance.`)
    }else {
      return alert(`Please enter a number.`)
    }
    }
    
    deposit(value){
      this.account.balance += value
      return (this.account.balance), alert("Success! $" + value + " has been deposited.")
  }
    
    balanceInquiry(value){
    alert(`Current balance: $` + this.account.balance + ` Click OK to continue.`)
  }
    // updateTrans(newTrans){
    //   this.account.transactions = newTrans;
    // }
    


}
