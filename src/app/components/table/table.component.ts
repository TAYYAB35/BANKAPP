import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CommonModule } from '@angular/common';

interface ItemData {
  amount: string;
  status: string;
  description: string;
  service: string;
  date: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NzTableModule, NzDropDownModule,CommonModule],
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent {

  listOfData: ItemData[] = [
    { amount: '23', status: 'Succeeded', description: "Invoice 6B1E73DA–0017", service: "telecom servers ", date: "Dec 30, 09:42 PM" },
    { amount: '23', status: 'Failed', description: "Invoice 6B1E73DA–0017", service: "telecom servers ", date: "Dec 30, 09:42 PM" },
    { amount: '23', status: 'Pending', description: "Invoice 6B1E73DA–0017", service: "telecom servers ", date: "Dec 30, 09:42 PM" },
    { amount: '23', status: 'Dispute', description: "Invoice 6B1E73DA–0017", service: "telecom servers ", date: "Dec 30, 09:42 PM" },
    { amount: '23', status: 'Invalid', description: "Invoice 6B1E73DA–0017", service: "telecom servers ", date: "Dec 30, 09:42 PM" },
    { amount: '23', status: 'Canceled', description: "Invoice 6B1E73DA–0017", service: "telecom servers ", date: "Dec 30, 09:42 PM" },
  ];

  statusBasedBg(status: string) {
    switch (status) {
      case 'Succeeded':
        return 'bg-success_lt text-success'; // Light green background, green text
      case 'Failed':
        return 'bg-failure_lt text-failure'; // Light red background, red text
      case 'Pending':
        return 'bg-blue-100 text-blue-600'; // Light yellow background, yellow text
      case 'Dispute':
        return 'bg-purple-100 text-purple-600'; // Light orange background, orange text
      case 'Invalid':
        return 'bg-orange-100 text-orange-600'; // Light gray background, gray text
      case 'Canceled':
        return 'bg-canceled_lt text-canceled'; // Light gray background, gray text
      default:
        return 'bg-gray-100 text-gray-600'; // Default background and text color
    }
  }
  statusBasedIcon(status: string) {
    switch (status) {
      case 'Succeeded':
        return 'fa-check'; // Light green background, green text
      case 'Failed':
        return 'fa-octagon-xmark'; // Light red background, red text
      case 'Pending':
        return 'fa-clock'; // Light yellow background, yellow text
      case 'Dispute':
        return 'fa-balance-scale'; // Light orange background, orange text
      case 'Invalid':
        return 'fa-exclamation-triangle'; // Light gray background, gray text
      case 'Canceled':
        return 'fa-ban'; // Light gray background, gray text
      default:
        return 'bg-default_lt text-default'; // Default background and text color
    }
  }


}
