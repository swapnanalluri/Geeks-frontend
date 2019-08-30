import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';
import { Customer } from '../models/customer';
import { CustomerEntryComponent } from '../customer-entry/customer-entry.component';

@Component({
  selector: 'app-banker-home',
  templateUrl: './banker-home.component.html',
  styleUrls: ['./banker-home.component.css']
})
export class BankerHomeComponent implements OnInit {

  customers:Customer[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['cid', 'name', 'userName', 'pan', 'phoneNo', 'address', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  constructor(private dataService: DataService,
              private notificationService: NotificationService,
              private dialog: MatDialog,
              private router: Router)
            {}

  ngOnInit() { 
    this.getListCustomers();
  }
  
  getListCustomers() {
        this.dataService.listCustomers()
                        .subscribe(response => {
                          this.customers = response;
                          this.listData = new MatTableDataSource(this.customers);
                          this.listData.sort = this.sort;
                          this.listData.paginator = this.paginator;
                        })

   }
   onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onDelete(cid){
    if(confirm('Are you sure to delete this record ?')){
    this.dataService.deleteCustomer(cid).subscribe(res => this.getListCustomers());
    this.notificationService.warn('! Deleted successfully');
    }

  }

 onCreate() {
    this.dataService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    dialogConfig.height = "70%"
    this.dialog.open(CustomerEntryComponent,dialogConfig).afterClosed()
    .subscribe(res => {
      this.getListCustomers();
    })
    
  }

  onEdit(row){
  this.dataService.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "80%";
  dialogConfig.height = "70%"
  this.dialog.open(CustomerEntryComponent,dialogConfig).afterClosed()
  .subscribe(res => {
    this.getListCustomers();
  });
}
logout() {
  localStorage.clear();
  this.router.navigateByUrl('');
    }

}
