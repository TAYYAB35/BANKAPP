import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ElectriServiceModalComponent } from '@shared/modals/electri-service-modal/electri-service-modal.component';
import { FuelModalComponent } from '@shared/modals/fuel-modal/fuel-modal.component';
import { TelecomServiceComponent } from '@shared/modals/index';
import { TaxiModalComponent } from '@shared/modals/taxi-modal/taxi-modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-service-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-screen.component.html',
  styles: `
  `
})
export class ServiceScreenComponent {
  sections = [
    {
      title: 'Utilities Payments',
      services: [
        { icon: './../../../../assets/images/icons/flash_on.svg', title: 'Electricity service' },
        { icon: './../../../../assets/images/icons/cell_wifi.svg', title: 'Internet Services' },
        { icon: './../../../../assets/images/icons/school.svg', title: 'Education Services' },
        { icon: './../../../../assets/images/icons/globe_location_pin.svg', title: 'International Services' },
        { icon: './../../../../assets/images/icons/add_to_home_screen.svg', title: 'Telecom Services' }
      ]
    },
    {
      title: 'Bank Services',
      services: [
        { icon: './../../../../assets/images/icons/assured_workload.svg', title: 'Bank Transfer' },
        { icon: './../../../../assets/images/icons/universal_currency_alt.svg', title: 'Request Money' },
        { icon: './../../../../assets/images/icons/checkbook.svg', title: 'Check Book' },
        { icon: './../../../../assets/images/icons/table_chart_view.svg', title: 'Trade Finance' },
        { icon: './../../../../assets/images/icons/credit_card.svg', title: 'Card Request' },
        { icon: './../../../../assets/images/icons/group_add.svg', title: 'Sub Account' },
        { icon: './../../../../assets/images/icons/assured_workload(1).svg', title: 'Dispute' },
        { icon: './../../../../assets/images/icons/article_shortcut.svg', title: 'Bank Statement' }
      ]
    }
  ];

  beneficiaries = [
    { name: 'SAIF AHMED MOHAMMED',account : "Account Number", accountNumber: '1234567898975643' },
    { name: 'HUSSAM ALDEIN MOHAMED',account : "Account Number", accountNumber: '1234567898975643' },
    { name: 'OMER KHALID ALSHAFEE',account : "Account Number", accountNumber: '1234567898975643' },
    { name: 'MAI OMER IBRAHIM',account : "Account Number", accountNumber: '1234567898975643' }
  ];
}
