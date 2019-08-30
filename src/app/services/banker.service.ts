import { Injectable } from '@angular/core';
import { Banker } from '../models/Banker';
import {HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankerService {
  private Banker_URL ="http://localhost:8087/api/v2/login/";

 
  constructor(private httpClient:HttpClient) { }

  findbyUsernameAndPasswordForBank(username,password):Observable<Banker>{
    return this.httpClient.get<Banker>(this.Banker_URL+username+'/'+password);  
}
}
