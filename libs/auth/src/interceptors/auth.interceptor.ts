import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authSrv: AuthService;
  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.authSrv = this.injector.get(AuthService);
    const token = this.authSrv.getAuthVariables();

    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorisation', token)
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
