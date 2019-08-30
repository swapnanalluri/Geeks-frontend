import { Injectable } from '@angular/core';
import {Transactions} from '../models/Transactions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransacdetailsService {
  
  private Last_10Transac_URL ="http://localhost:8087/api/v3/Last-ten-transactions/";
  
  
  last10trans:any[]=[];
  constructor(private httpClient:HttpClient) { }

  listlast10trans(acnum):Observable<Transactions[]>{
    //this.Last_10Transac_URL+=anum;

    return this.httpClient.get<Transactions[]>(this.Last_10Transac_URL + acnum);
   
  }
}
