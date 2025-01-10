import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { PublicApi } from '../constants';
import { AppResponse } from '../constants/ApiResponse';

type PublicApiKeys = keyof typeof PublicApi;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) { }

  login1(username: string, password: string): boolean {
    if (username === 'admin' && password === '123') {
      const token = 'fake-jwt-token'; // Normally you would get this from the server
      localStorage.setItem('authToken', token);
      localStorage.setItem('userRole', 'admin'); // Store user role for authorization
      return true;
    } else return false;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; // Check if the token exists and is valid
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  logout1(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  // Get user role for authorization
  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
  getAll(endpoint: PublicApiKeys): Observable<AppResponse> {
    // Use endpoint to access PublicApi dynamically
    const apiUrl = PublicApi[endpoint];
    return this.http.get<AppResponse>(apiUrl).pipe(catchError(this.handleError));
  }
  delete(endpoint: PublicApiKeys): Observable<AppResponse> {
    // Use endpoint to access PublicApi dynamically
    const apiUrl = PublicApi[endpoint];
    return this.http.delete<AppResponse>(apiUrl).pipe(catchError(this.handleError));
  }
  register(endpoint: PublicApiKeys, model: any): Observable<AppResponse> {
    // Use endpoint to access PublicApi dynamically
    const apiUrl = PublicApi[endpoint];
    return this.http.post<AppResponse>(apiUrl, model).pipe(catchError(this.handleError));
  }
  login(endpoint: PublicApiKeys, model: any): Observable<AppResponse> {
    // Use endpoint to access PublicApi dynamically
    const apiUrl = PublicApi[endpoint];
    return this.http.post<AppResponse>(apiUrl, model).pipe(catchError(this.handleError));
  }
  logout(endpoint: PublicApiKeys, model: any): Observable<AppResponse> {
    // Use endpoint to access PublicApi dynamically
    const apiUrl = PublicApi[endpoint];
    return this.http.post<AppResponse>(apiUrl, model).pipe(catchError(this.handleError));
  }

  getById(endpoint: PublicApiKeys, id: any): Observable<AppResponse> {
    // Use endpoint to access PublicApi dynamically
    const apiUrl = `${PublicApi[endpoint]}/${id}`;
    return this.http.get<AppResponse>(apiUrl).pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client-side error:', error.error.message);
    } else {
      // Server-side error
      console.error(`Server-side error: ${error.status} - ${error.message}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
  setToken(data: any) {
    localStorage.setItem('authToken', data.authToken);
    localStorage.setItem('jwtToken', data.authToken);
    sessionStorage.setItem('jwtToken', data.authToken);
    localStorage.setItem('userRole', data.role);
    this.setUserDetails(data);
  }
  setUserDetails(data: any) {
    localStorage.setItem('userDetails', JSON.stringify(data));
  }
 
}
