import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authReq: any;

  constructor(private router: Router) {}
  // constructor() { }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      this.clearStorage();
      // this.envService.showWarning();
      this.router.navigateByUrl('/auth/login');
      return of(err.message);
    }
    return throwError(err);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('jwtToken')!;
    this.authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(this.authReq).pipe(catchError((x) => this.handleAuthError(x)));
  }

  clearStorage() {
    // localStorage.removeItem('authToken');
    localStorage.clear();
    sessionStorage.clear();
  }
}
