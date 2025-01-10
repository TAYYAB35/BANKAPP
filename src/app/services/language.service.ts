import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en'); // default language
  currentLanguage$ = this.currentLanguage.asObservable();

  private isRtlSubject = new BehaviorSubject<boolean>(false);
  isRtl = new BehaviorSubject<boolean>(false);

  constructor(private translate: TranslateService, @Inject(DOCUMENT) private document: Document) {}

  checkLanguage() {
    return localStorage.getItem('lang');
  }

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    this.currentLanguage.next(lang);

    const isRtl = lang === 'ar'; // Arabic uses RTL
    this.isRtlSubject.next(isRtl); // Update RTL status

    this.updateDirection(isRtl);
  }

  private updateDirection(isRtl: boolean) {
    const dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.dir = dir; // Update <html> dir attribute
  }
}
