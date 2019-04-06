import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import { BankService } from './bank.service';
import { router } from './app.router';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    TellerComponent,
    NavComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    router
  ],
  providers: [BankService],  //I fixed this.  Services is not a property on NgModule.  Any service should be listed in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
