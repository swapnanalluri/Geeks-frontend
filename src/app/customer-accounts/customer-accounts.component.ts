import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';
import { Bankaccount } from '../models/bankaccount';
import { AccountEntryComponent } from '../account-entry/account-entry.component';


@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})

export class CustomerAccountsComponent implements OnInit {
  
  cid:number;
  accounts:Bankaccount[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['aid', 'acnumber', 'branch', 'ifsc', 'balance', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  constructor(route:ActivatedRoute, 
              private dataService: DataService,
              private notificationService: NotificationService,
              private dialog: MatDialog,
              private router: Router)
                {
                this.cid = route.snapshot.params.id;
                console.log(this.cid);
                }

  ngOnInit() {
    this.getAccounts();
  }

  

  getAccounts() {
    this.dataService.listAllAccounts(this.cid)
                    .subscribe(response => {
                    this.accounts = response;
                    this.listData = new MatTableDataSource(this.accounts);
                    this.listData.sort = this.sort;
                    this.listData.paginator = this.paginator;
    });
  }

  onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
      }
    
      applyFilter() {
        this.listData.filter = this.searchKey.trim().toLowerCase();
      }

  onDelete(aid){
        if(confirm('Are you sure to delete this record ?')){
        this.dataService.deleteAccount(aid).subscribe(res => this.getAccounts());
        this.notificationService.warn('! Deleted successfully');
        }
    
    }

   
  onCreate() {
      this.dataService.initializeFormAccountGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "40%";
      dialogConfig.height = "70%";
      let a = this.dialog.open(AccountEntryComponent, dialogConfig);
      a.componentInstance.custid = this.cid;
      a.afterClosed()
       .subscribe(res => {
        this.getAccounts();
      })
    
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
      }
      back() {
        
        this.router.navigateByUrl('banker');
          }
 
}
