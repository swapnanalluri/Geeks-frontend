import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bankaccount } from '../models/bankaccount';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private LIST_CUSTOMERS_URL ="http://localhost:8087/api/v2/customers/";
  private LIST_ACCOUNTS_URL = "http://localhost:8087/api/v1/customer/"; 

  constructor(private httpClient:HttpClient) { }

  form: FormGroup = new FormGroup({
    cid: new FormControl(null),
    name: new FormControl('',[Validators.required]),
    userName: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    pan: new FormControl('',[Validators.required, Validators.minLength(10),, Validators.maxLength(10)]),
    phoneNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl('')
   });

  initializeFormGroup() {
    this.form.setValue({
      cid : '',
      name : '',
      userName : '',
      password : '',
      pan : '',
      phoneNo : '',
      address: '',
      city: '',
      state: '',
      zip:''
    });
  }

  populateForm(customer) {
    this.form.setValue({
      cid : customer.cid,
      name : customer.name,
      userName : customer.userName,
      password : customer.password,
      pan : customer.pan,
      phoneNo : customer.phoneNo,
      address: customer.address,
      city: customer.city,
      state: customer.state,
      zip:customer.zip
    }
    );
  }

  accountForm: FormGroup = new FormGroup({
    aid: new FormControl(null),
    acnumber: new FormControl(''),
    balance: new FormControl('', [Validators.required, Validators.min(5000)]),
    branch: new FormControl(''),
    ifsc: new FormControl('')
  });

  initializeFormAccountGroup() {
    this.accountForm.setValue({
      aid : '',
      acnumber : '',
      balance : '',
      branch : '',
      ifsc : ''
    });
  }

  listCustomers():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.LIST_CUSTOMERS_URL + 'listAll')   
  }

  insertCustomer(customer){
    return this.httpClient.post(this.LIST_CUSTOMERS_URL + 'create', customer);
  }


  updateCustomer(id, customer) {
    return this.httpClient.put(this.LIST_CUSTOMERS_URL + 'update/' + id, (customer));
  }
  
  deleteCustomer(cid:number):Observable<any>{
    return this.httpClient.delete(this.LIST_CUSTOMERS_URL + 'delete/' + cid);
  }

  /// Methods for bank accounts component

  listAllAccounts(cid):Observable<Bankaccount[]> {
    return this.httpClient.get<Bankaccount[]>(this.LIST_ACCOUNTS_URL + cid + '/accounts');
  }

  deleteAccount(aid:number):Observable<any> {
    return this.httpClient.delete(this.LIST_CUSTOMERS_URL + 'close/' + aid);
  }

  createAccount(cid, account){
    return this.httpClient.post(this.LIST_CUSTOMERS_URL + 'accounts/' + cid , account);
  }

}
