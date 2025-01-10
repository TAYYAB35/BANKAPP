import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TableComponent } from 'src/app/components';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [NzTabsModule, NzTableModule, TableComponent],
  templateUrl: './history.component.html',
  styles: ``
})
export class HistoryComponent {

}
