import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {  Accounts } from '../models/CustomerAccounts';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-custlistofaccs',
  templateUrl: './custlistofaccs.component.html',
  styleUrls: ['./custlistofaccs.component.css']
})
export class CustlistofaccsComponent implements OnInit {

  accounts:Accounts[]
  pan
  phoneNo
  private subscription:Subscription;

  constructor(private listaccountsservice:CustomerService) { 
    this.pan=localStorage.getItem('pan');
    this.phoneNo=localStorage.getItem('phoneNo');

  }

  ngOnInit() {
    
    this.subscription = this.listaccountsservice
                              .listAccounts()
                              .subscribe(response => {
                                this.accounts = response;
                              })

  }

   
}
