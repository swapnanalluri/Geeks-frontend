import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import {Transaction} from '../models/transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private TRANSACTION_URL='http://localhost:8087/api/v1/transactions';
  constructor(private httpClient:HttpClient) { }

  savetransaction(data)
  {
    console.log(data);
    return this.httpClient.post<Transaction>(this.TRANSACTION_URL,data);
    
  }
}
