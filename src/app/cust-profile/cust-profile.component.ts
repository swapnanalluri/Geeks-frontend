import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-cust-profile',
  templateUrl: './cust-profile.component.html',
  styleUrls: ['./cust-profile.component.css']
})
export class CustProfileComponent implements OnInit {
  /* pan
  phoneNo
name
username */
customerDetails
  constructor(private customerservice:CustomerService) { 
    /* this.pan=localStorage.getItem('pan');
    this.phoneNo=localStorage.getItem('phoneNo');
    this.name=localStorage.getItem('name');
    this.username=localStorage.getItem('username') */

    
  }

  ngOnInit() {
    this.customerservice.findById(localStorage.getItem('cid')).subscribe(res => {
      this.customerDetails=res;
    });

}
}