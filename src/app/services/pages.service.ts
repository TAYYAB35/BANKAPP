import { Injectable } from '@angular/core';
import { PublicApi } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AppResponse } from '../constants/ApiResponse';

// Define a type for the keys of PublicApi
type PublicApiKeys = keyof typeof PublicApi;

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }

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

  update(endpoint: PublicApiKeys, model: any): Observable<AppResponse> {
    const apiUrl = PublicApi[endpoint];
    return this.http.post<AppResponse>(apiUrl, model).pipe(catchError(this.handleError));
  }

  updateWithId(endpoint: PublicApiKeys, model: any, id: any): Observable<AppResponse> {
    const apiUrl = PublicApi[endpoint];
    return this.http.post<AppResponse>(`${apiUrl}?email=${id}`, model).pipe(catchError(this.handleError));
  }

  getById(endpoint: PublicApiKeys, id: any): Observable<AppResponse> {
    // Use endpoint to access PublicApi dynamically
    const apiUrl = `${PublicApi[endpoint]}/${id}`;
    return this.http.get<AppResponse>(apiUrl).pipe(catchError(this.handleError));
  }

  getByCustomName(endpoint: PublicApiKeys, customName: string, id: any): Observable<AppResponse> {
    // Use endpoint to access PublicApi dynamically
    const apiUrl = `${PublicApi[endpoint]}?${customName}=${id}`;
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

}
