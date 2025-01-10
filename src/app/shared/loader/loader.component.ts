import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="Loader-wrapper" *ngIf="isLoading | async" > 
    <img src="../assets/images/logo/Image.png" alt="" class="tw-h-[100px] -tw-mt-2">
      <div class="loader"></div>
    </div>
  `,
  styles: ``
})
export class LoaderComponent {

  isLoading!: any;
 
}
