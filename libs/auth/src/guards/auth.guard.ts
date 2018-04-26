import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private authSrv: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    //return this.authSrv.isAuthenticated;
    if (this.authSrv.isAuthenticated) {
      return true;
    } else {
      if (localStorage.getItem('auth')) {
        return (this.authSrv.isAuthenticated = true);
      }
      this.router.navigate([`/auth/login`]);
      return false;
    }
  }
}
