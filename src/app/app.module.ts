import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CustlistofaccsComponent } from './custlistofaccs/custlistofaccs.component';
import { CustfundtransferComponent } from './custfundtransfer/custfundtransfer.component';
import { CusttranshistoryComponent } from './custtranshistory/custtranshistory.component';
import { FundTransferSameaccComponent } from './fund-transfer-sameacc/fund-transfer-sameacc.component';
import { FundTransferOtheraccComponent } from './fund-transfer-otheracc/fund-transfer-otheracc.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { CustProfileComponent } from './cust-profile/cust-profile.component';
import { BankerHomeComponent } from './banker-home/banker-home.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { AccountEntryComponent } from './account-entry/account-entry.component';
import { CustomerEntryComponent } from './customer-entry/customer-entry.component';
import { ToastrModule } from 'ngx-toastr';
import { CustAuthGuard } from './cust-auth.guard';
import{BankAuthGuard} from './bank-auth.guard';


import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup

import { MomentModule } from 'angular2-moment';
import { Last10transComponent } from './last10trans/last10trans.component'; // optional, provides moment-style pipes for date formatting
import { IndexpageComponent } from './indexpage/indexpage.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerloginComponent,
    EmployeeloginComponent,
    CustomerdashboardComponent,
    CustlistofaccsComponent,
    CustfundtransferComponent,
    CusttranshistoryComponent,
    FundTransferSameaccComponent,
    FundTransferOtheraccComponent,
    HomepageComponent,
    SidebarComponent,
    CustProfileComponent,
    BankerHomeComponent,
    CustomerEntryComponent,
    CustomerAccountsComponent,
    AccountEntryComponent,
    Last10transComponent,
    IndexpageComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:IndexpageComponent
      },
       {
         path:'homepage',
        component:HomepageComponent,
       },
       {
        path:'employeelogin',
        component:EmployeeloginComponent
      },
      {
        path:'customerdashboard',
        component:CustomerdashboardComponent,
        canActivate:[CustAuthGuard],
        children:[
          {
            path:'cust-profile',
            component:CustProfileComponent
          },
          {
            path:'custlistofaccs',
            component:CustlistofaccsComponent
          },
          {
            path:'custfundtransfer',
            component:CustfundtransferComponent,
            children:[
              
                {
                    path:'fund-transfer-sameacc',
                    component:FundTransferSameaccComponent
              },
             {
                    path:'fund-transfer-otheracc',
                   component:FundTransferOtheraccComponent
              }
            ]
              },
              {
                path:'custtranshistory',
                component:CusttranshistoryComponent,
                children:[
              
                {
                    path:'last10trans',
                    component:Last10transComponent
              }
            ]
                
              },
                              

            ]
      },

      {
        path:'banker',
        component: BankerHomeComponent,
        canActivate:[BankAuthGuard],
      },
        
      {
          path:'customers/:id',
          component:CustomerAccountsComponent,
          canActivate:[BankAuthGuard],
      },

     
       
       
      
    
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[BankerHomeComponent, CustomerEntryComponent, CustomerAccountsComponent, AccountEntryComponent]
})
export class AppModule {
  
  
}