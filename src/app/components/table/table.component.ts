import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

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
  imports: [NzTableModule,NzDropDownModule],
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent {

  listOfData: ItemData[] = [
    { amount: '23',status: 'succeeded',description : "Invoice 6B1E73DA–0017",service : "telecom servers ",date : "Dec 30, 09:42 PM" },
    { amount: '23',status: 'succeeded',description : "Invoice 6B1E73DA–0017",service : "telecom servers ",date : "Dec 30, 09:42 PM" },
    { amount: '23',status: 'succeeded',description : "Invoice 6B1E73DA–0017",service : "telecom servers ",date : "Dec 30, 09:42 PM" },
    { amount: '23',status: 'succeeded',description : "Invoice 6B1E73DA–0017",service : "telecom servers ",date : "Dec 30, 09:42 PM" },
    { amount: '23',status: 'succeeded',description : "Invoice 6B1E73DA–0017",service : "telecom servers ",date : "Dec 30, 09:42 PM" },
    { amount: '23',status: 'succeeded',description : "Invoice 6B1E73DA–0017",service : "telecom servers ",date : "Dec 30, 09:42 PM" },
    { amount: '23',status: 'succeeded',description : "Invoice 6B1E73DA–0017",service : "telecom servers ",date : "Dec 30, 09:42 PM" },
  ];

  ngOnInit(): void {

  }

}
