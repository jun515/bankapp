import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent {

  constructor(private bankService: BankService) {}
  

    
 
}
