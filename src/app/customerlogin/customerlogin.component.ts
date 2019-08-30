import { Component, OnInit } from '@angular/core';
import {CustomerdashboardComponent} from '../customerdashboard/customerdashboard.component';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent {

  constructor() { }
  custDash=false;

  handleFormData(formData){
     console.log("After Submit....");
     this.custDash=!this.custDash;
     if(this.custDash==true){
       return this.custDash;
     }
    
  }
}
