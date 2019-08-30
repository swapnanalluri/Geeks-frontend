import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { TransacdetailsService } from '../services/transacdetails.service';
import { Transactions } from '../models/Transactions';

@Component({
  selector: 'app-last10trans',
  templateUrl: './last10trans.component.html',
  styleUrls: ['./last10trans.component.css']
})
export class Last10transComponent implements OnInit {
  private subscription:Subscription;
  last10trans:Transactions[];
  acnum;
  
  constructor(private transactionservice:TransacdetailsService) {
    console.log(this.acnum);
   }

  ngOnInit() {
    this.acnum=localStorage.getItem('acnum');
    console.log("next");
    console.log(this.acnum);
    this.transactionservice.listlast10trans(this.acnum).subscribe(res=>{
      
      this.last10trans=res});

  }
  }


