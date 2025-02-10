import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TableComponent } from 'src/app/components';

interface ItemData {
  Name: string;
  account_number: string;
}

@Component({
  selector: 'app-beneficiary',
  standalone: true,
  imports: [NzTabsModule, NzTableModule, TableComponent],
  templateUrl: './beneficiary.component.html',
  styles: ``
})
export class BeneficiaryComponent {
  listOfData: ItemData[] = [
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
    { Name: "ahmed omer", account_number: "329847259252626282826525" },
  ];
}
