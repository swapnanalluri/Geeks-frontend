import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAuthGuard implements CanActivate {
  constructor(private router:Router ){}
  canActivate():boolean {
    if(localStorage.getItem('userType')==='banker')
      return true;
    else{
      this.router.navigate(['']);
      alert("Please Login as Bank!");
      return false;
    }
  }
}
