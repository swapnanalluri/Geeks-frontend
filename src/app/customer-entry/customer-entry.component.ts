import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.css']
})
export class CustomerEntryComponent implements OnInit {

  constructor(private dataService : DataService,
              private notificationService : NotificationService,
              private dialogRef: MatDialogRef<CustomerEntryComponent>)
            { }

  ngOnInit() {
  }

  onClear() {
    this.dataService.form.reset();
    this.dataService.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.dataService.form.valid) {
      if(!this.dataService.form.value.cid)
      { //console.log("========="+ this.dataService.form.value)
        this.dataService.insertCustomer(this.dataService.form.value).subscribe(res =>
        { 
          if (res["cid"] == 0)
          { 
            this.onClose();
            this.notificationService.warn(':: Username already exists, Please try again with another username');
          }
          else {
            this.onClose();
            this.notificationService.success(':: Customer added successfully');
          }
        });
        }
      
      else{
        this.dataService.updateCustomer(this.dataService.form.value.cid, this.dataService.form.value).subscribe(res =>
        {
          this.onClose();
          this.notificationService.success(':: Customer updated successfully');
        });
      } 
       
    }
  
  }   
  onClose() {
    this.dataService.form.reset();
    this.dataService.initializeFormGroup();
    this.dialogRef.close();
  }


}
