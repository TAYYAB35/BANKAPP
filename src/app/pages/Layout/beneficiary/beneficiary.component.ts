import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TableComponent } from 'src/app/components';

@Component({
  selector: 'app-beneficiary',
  standalone: true,
  imports: [NzTabsModule, NzTableModule, TableComponent],
  templateUrl: './beneficiary.component.html',
  styles: ``
})
export class BeneficiaryComponent {

}
