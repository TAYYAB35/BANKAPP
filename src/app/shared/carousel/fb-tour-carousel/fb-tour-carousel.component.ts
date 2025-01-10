import { CommonModule } from '@angular/common';
import { Component, inject, input, Input, OnInit, signal } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-fb-tour-carousel',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './fb-tour-carousel.component.html',
  styles: ``
})
export class FbTourCarouselComponent implements OnInit {

  platform = signal('');
  @Input()
  set currentPlatform(value: string) {
    this.platform.set(value);
  }

  modalRef = inject(NzModalRef);
  ngOnInit(): void {
    const carousel = document.getElementsByClassName('owl-carousel');

    if (carousel.length > 0) {
      carousel[0].classList.add('tw-bg-[#E6F3FC]', 'tw-rounded-[10px]', 'tw-p-2');
    }
    const nav = document.querySelector('.owl-nav') as HTMLElement;  // Cast the result to HTMLElement

    if (nav) {
      nav.style.setProperty('display', 'none', 'important');
    }
  }

  slidesStore = [
    {
      step: 'Step 1',
      heading: 'Check Your Facebook Notifications',
      detail: 'Look for a notification from Balke Tech on your Facebook account, requesting access to manage your page',
      img: '../assets/images/fbtour/1-Notification.png'
    },
    {
      step: 'Step 2',
      heading: 'Switch to Your Facebook Page and Access Settings',
      detail: 'Ensure you’ve switched to the correct Facebook Page. Then, go to Settings & Privacy and select Settings from the menu.',
      img: '../assets/images/fbtour/2-SwicthPageAndSettings.png'
    },
    {
      step: 'Step 3',
      heading: 'Access Page Setup and Permissions',
      detail: 'From the sidebar, select Page Setup then navigate to Page Access to manage permissions',
      img: '../assets/images/fbtour/3-PageSetup.png'
    },
    {
      step: 'Step 4',
      heading: 'Review Access Request',
      detail: 'Under the Partner with Access section, locate and open the Review Request from Balke Tech.',
      img: '../assets/images/fbtour/4-ReviewRequest.png'
    },
    {
      step: 'Step 5',
      heading: 'Review Balke Tech Partner Information',
      detail: 'Balke Tech is a verified partner. Feel free to review our details for your assurance.',
      img: '../assets/images/fbtour/5-PermissionPartner.png'
    },
    {
      step: 'Step 6',
      heading: 'Grant Ad Management Permissions',
      detail: 'Approve Balke Tech to manage your Ads, Insights, Content, and more.',
      img: '../assets/images/fbtour/6-PermissionAds.png'
    },
    {
      step: 'Step 7',
      heading: 'Almost Done! Re-enter Your Password',
      detail: 'For security purposes, please re-enter your Facebook password to confirm Balke Tech’s access to your page.',
      img: '../assets/images/fbtour/7-PermissionPassword.png'
    },
  ]
  // currentSlide = 0;
  customOptions: any = {
    loop: true,
    margin: 30,
    dots: true,
    nav: false,  // Keep nav as true initially to remove later
    items: 1,
  }
  onCancel(): void {
    this.modalRef.destroy(); // Close the modal when cancel is clicked
  }
}
