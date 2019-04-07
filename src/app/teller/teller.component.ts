import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent {
  account;

  constructor(private bankService: BankService) {}
  
  ngOnInit() {
    this.account = this.bankService.getAccount();
  }

}
