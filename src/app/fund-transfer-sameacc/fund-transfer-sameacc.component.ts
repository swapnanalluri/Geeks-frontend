import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {  Accounts } from '../models/CustomerAccounts';
import {Subscription} from 'rxjs';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-fund-transfer-sameacc',
  templateUrl: './fund-transfer-sameacc.component.html',
  styleUrls: ['./fund-transfer-sameacc.component.css']
})
export class FundTransferSameaccComponent implements OnInit {

  accounts:Accounts[]
  dropDownAccounts:Accounts[]
  private subscription:Subscription;
  message="";

  constructor(private listaccountsservice:CustomerService,
    private transactionservice:TransactionService,
    private router: Router,
    private toasterService: ToastrService) { }

  ngOnInit() {
    
    this.subscription = this.listaccountsservice
                              .listAccounts()
                              .subscribe(response => {
                                this.accounts = response;
                              })
    this.dropDownAccounts=this.accounts;

  }


  
  
  makeTransaction(formData)
  {
    
    //console.log(formData.value);
    this.transactionservice.savetransaction(formData.value).subscribe(Response=>{
    console.log(Response);
    localStorage.setItem('status',Response.status);
    if( Response.status === 'Success')  
    this.toasterService.success('Success', "Money Transfered");
  else if( Response.status === 'Pending')  
  this.toasterService.info('Pending', "Pending");
  else
    this.toasterService.error("Failure", "Transaction Failed");  
}, (error) => {

});
this.router.navigateByUrl('customerdashboard/custfundtransfer');
}
  fromSelected(from){

    this.dropDownAccounts=this.accounts;
    this.dropDownAccounts = this.dropDownAccounts.filter(function(res){
       if (res.acnumber != from ){
        // console.log("Hii");
         return res;
       }
    });
    console.log(this.dropDownAccounts);
  }
}
