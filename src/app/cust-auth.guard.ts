

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustAuthGuard implements CanActivate {
  constructor(private router:Router ){}
  canActivate():boolean {
    if(localStorage.getItem('userType')==='customer')
      return true;
    else{
      this.router.navigate(['']);
      alert("Please Login as Customer!");
      return false;
    }
  }
}