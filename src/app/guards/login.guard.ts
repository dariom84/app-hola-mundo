import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../shared-module/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router,
    private localStorageService: LocalStorageService){}

  canActivate(): boolean{
    console.log("Se llamo a LoginGuard");

    if(this.localStorageService.retrieve("user"))
    {
      return true;
    }
    else
    {
      this.router.navigateByUrl('/login');

      return false;
    }
  }
}
