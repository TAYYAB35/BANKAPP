import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CommonModule } from '@angular/common';

interface ItemData {
  Name: string;
  account_number: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NzTableModule, NzDropDownModule, CommonModule],
  templateUrl: './table.component.html',
  styles: ``
})
export class TableComponent {

  listOfData: ItemData[] = [
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
  ];

}
