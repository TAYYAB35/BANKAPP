import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ElectriServiceModalComponent } from '@shared/modals/electri-service-modal/electri-service-modal.component';
import { FuelModalComponent } from '@shared/modals/fuel-modal/fuel-modal.component';
import { TaxiModalComponent } from '@shared/modals/taxi-modal/taxi-modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-service-screen',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './service-screen.component.html',
  styles: `
  `
})
export class ServiceScreenComponent {
  sections = [
    {
      title: 'Utilities Payments',
      services: [
        { icon: './../../../../assets/images/icons/flash_on.svg', title: 'Electricity service',router : "" },
        { icon: './../../../../assets/images/icons/cell_wifi.svg', title: 'Internet Services',router : "" },
        { icon: './../../../../assets/images/icons/school.svg', title: 'Education Services',router : "" },
        { icon: './../../../../assets/images/icons/globe_location_pin.svg', title: 'International Services',router : "" },
        { icon: './../../../../assets/images/icons/add_to_home_screen.svg', title: 'Telecom Services',router : "telecom" }
      ]
    },
    {
      title: 'Bank Services',
      services: [
        { icon: './../../../../assets/images/icons/assured_workload.svg', title: 'Bank Transfer',router : ""},
        { icon: './../../../../assets/images/icons/universal_currency_alt.svg', title: 'Request Money',router : "" },
        { icon: './../../../../assets/images/icons/checkbook.svg', title: 'Check Book',router : ""},
        { icon: './../../../../assets/images/icons/table_chart_view.svg', title: 'Trade Finance',router : ""},
        { icon: './../../../../assets/images/icons/credit_card.svg', title: 'Card Request',router : ""},
        { icon: './../../../../assets/images/icons/group_add.svg', title: 'Sub Account',router : ""},
        { icon: './../../../../assets/images/icons/assured_workload(1).svg', title: 'Dispute',router : ""},
        { icon: './../../../../assets/images/icons/article_shortcut.svg', title: 'Bank Statement',router : "" }
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
