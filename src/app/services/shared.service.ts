import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private notification: NzNotificationService, private http: HttpClient) { }

  public updatedUserData: Subject<any> = new Subject();
  private breadcrumbSubject = new BehaviorSubject<any[]>([]);
  breadcrumb$ = this.breadcrumbSubject.asObservable();
  checkHomePage = true;
  setBreadcrumb(breadcrumb: any[]) {
    this.breadcrumbSubject.next(breadcrumb);
  }

  createNotification(type: string, message: string): void {
    this.notification.create(type, type.toUpperCase(), message);
  }

  getUserDetails() {
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      return JSON.parse(userDetails);
    }
    return null;
  }

  transformKeys(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(this.transformKeys.bind(this));
    } else if (obj !== null && obj.constructor === Object) {
      return Object.keys(obj).reduce((acc, key) => {
        const camelCaseKey = key.charAt(0).toLowerCase() + key.slice(1);
        acc[camelCaseKey] = this.transformKeys(obj[key]);
        return acc;
      }, {} as any);
    }
    return obj;
  }

  private platformSubject = new BehaviorSubject<string>('');
  currentPlatform$ = this.platformSubject.asObservable();

  setPlatform(platform: string): void {
    this.platformSubject.next(platform);
    localStorage.setItem('platform', platform);
  }

  getPlatform() {
    return localStorage.getItem('platform')?.toString();
  }

  private baseUrl = 'http://your-backend-url/upload'; // Replace with your backend URL

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders();
    // You can add custom headers if needed
    // headers = headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<any>(this.baseUrl, formData, {
      headers: headers,
      reportProgress: true,
      observe: 'events',
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                   Loader                                   */
  /* -------------------------------------------------------------------------- */
  private loaderSubject = new BehaviorSubject<boolean>(false);
  loaderState = this.loaderSubject.asObservable()

  showLoader() {
    this.loaderSubject.next(true);
  }

  hideLoader() {
    this.loaderSubject.next(false);
  }
  setCampaignLocal(value: any) {
    localStorage.setItem('campaignEdit', value);
  }
  getCampaignLocal() {
    const check =  localStorage.getItem('campaignEdit');
    if(check && check == 'true')
      return true;
    return false;
  }

}
