import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';
import { CustomerAccountsComponent } from '../customer-accounts/customer-accounts.component';

@Component({
  selector: 'app-account-entry',
  templateUrl: './account-entry.component.html',
  styleUrls: ['./account-entry.component.css']
})
export class AccountEntryComponent implements OnInit {

  custid:number;
  constructor(private dataService : DataService,
              private notificationService : NotificationService,
              private dialogRef: MatDialogRef<AccountEntryComponent>)
             { }

  ngOnInit() {
    
  }

  
  onClear() {
    this.dataService.accountForm.reset();
    this.dataService.initializeFormAccountGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  
  onSubmit() {
    if (this.dataService.accountForm.valid) {
      if(!this.dataService.accountForm.value.aid)
      { this.dataService.createAccount(this.custid, this.dataService.accountForm.value).subscribe(res =>
        { 
        this.onClose();
        this.notificationService.success(':: Account added successfully');
        });
      }    
    }
  }

  onClose() {
    this.dataService.accountForm.reset();
    this.dataService.initializeFormAccountGroup();
    this.dialogRef.close();
  }

}


