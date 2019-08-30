import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { Customer } from '../models/Customer';
import { Accounts } from '../models/CustomerAccounts';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private CUSTOMER_URL ="http://localhost:8087/api/v1/customer/";
  

  accounts:any[]=[];
  constructor(private httpClient:HttpClient ) { }

  findById(id):Observable<Customer>{
    return this.httpClient.get<Customer>(this.CUSTOMER_URL+"/"+id);
  }

  listAccounts():Observable<Accounts[]>{
    return this.httpClient.get<Accounts[]>(this.CUSTOMER_URL+ localStorage.getItem('cid') + "/accounts")   
  }
  findbyUsernameAndPasswordForCustomer(username,password):Observable<Customer>{
    return this.httpClient.get<Customer>(this.CUSTOMER_URL+username+'/'+password);  
}


}
