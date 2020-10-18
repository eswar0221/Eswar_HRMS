import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Web3Service } from './web3.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {

  constructor(private web3Service:Web3Service,private router:Router){}
    canActivate(): boolean {
    if(this.web3Service.loggedIn())
    {
    return true;
    }
    else
    {
    this.router.navigate(['Admin/admin-dashboard']);
    return false;
    }
    }
}
