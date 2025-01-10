import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import intlTelInput from 'intl-tel-input';

@Directive({
  selector: '[appIntlTelInput]',
  standalone: true,
})
export class IntlTelInputDirective {
  private iti: any;

  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const phoneInput = this.elementRef.nativeElement;
      this.iti = intlTelInput(phoneInput, {
        allowDropdown: true,
        countryOrder: [],
        excludeCountries: ['us'],
        fixDropdownWidth: true,
        formatAsYouType: true,
        formatOnDisplay: true,
        // i18n:"us",
        initialCountry: 'sa',
        nationalMode: true,
        // onlyCountries: ['us', 'gb'],
        placeholderNumberType: 'MOBILE',
        showFlags: true,
        separateDialCode: false,
        strictMode: true,
        useFullscreenPopup: false,
        validationNumberType: 'MOBILE',
        autoPlaceholder: 'polite',
        dropdownContainer: document.body,
        hiddenInput: (telInputName: string) => {
          return {
            phone: telInputName,
            country: 'us',
          };
        },
        geoIpLookup: (callback) => {
          fetch('https://ipapi.co/json')
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback('us'));
        },
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js',
      });
    }
  }
  getNumberLength() {
    const exampleNumber = this.iti.getNumber();
    const numberLength = exampleNumber.length;
    const countryNumberLength = this.iti.maxCoreNumberLength;
    const selectedCountryData = this.iti.selectedCountryData;
    return { exampleNumber, numberLength, countryNumberLength, selectedCountryData };
  }
}
