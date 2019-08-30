import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {  Accounts } from '../models/CustomerAccounts';
import {Subscription} from 'rxjs';
import { Router } from '@angular/router';
import { TransacdetailsService } from '../services/transacdetails.service';
import { Transactions } from '../models/Transactions';

@Component({
  selector: 'app-custtranshistory',
  templateUrl: './custtranshistory.component.html',
  styleUrls: ['./custtranshistory.component.css']
})
export class CusttranshistoryComponent implements OnInit {

  last10trans:Transactions[];
  accounts:Accounts[];
  anum:number;
  private subscription:Subscription;

  constructor(private listaccountsservice:CustomerService,
    private router: Router,
    private transactionservice:TransacdetailsService) { }

  ngOnInit() {
    
    this.subscription = this.listaccountsservice
                              .listAccounts()
                              .subscribe(response => {
                                this.accounts = response;
                              })

  }
  getAccNum(acnum){
    console.log("Display clicked",acnum);
    this.anum = acnum;
    localStorage.setItem('acnum',acnum);
    this.router.navigateByUrl('customerdashboard/custtranshistory');
    
  }
  
}
