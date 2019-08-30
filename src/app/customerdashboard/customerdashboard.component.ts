import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {  Accounts } from '../models/CustomerAccounts';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';


@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

accounts:Accounts[]
idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  private subscription:Subscription;
  constructor(private router: Router,private listaccountsservice:CustomerService
    ,private idle: Idle, private keepalive: Keepalive) { 

      idle.setIdle(150);
      // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
      idle.setTimeout(30);
      // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
  
      idle.onIdleEnd.subscribe(() => this.idleState = '');
      idle.onTimeout.subscribe(() => {2
        this.idleState = 'Timed out!';
        this.timedOut = true;
        this.logout();
      });
      idle.onIdleStart.subscribe(() => this.idleState = '');
      idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'Your session will time out in ' + countdown + ' seconds!');
  
      // sets the ping interval to 15 seconds
      keepalive.interval(15);
  
      keepalive.onPing.subscribe(() => this.lastPing = new Date());
  
      this.reset();
    }
   
  logout() {
localStorage.clear();
this.router.navigateByUrl('');
  }

  reset() {
    this.idle.watch();
    this.idleState = '';
    this.timedOut = false;
  }

  ngOnInit() {
    this.subscription = this.listaccountsservice
    .listAccounts()
    .subscribe(response => {
      this.accounts = response;
    })
    
}
}