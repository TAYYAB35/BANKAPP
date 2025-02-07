import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableComponent } from '../table/table.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NzTabsModule,NzTableModule,TableComponent,FormsModule],
  templateUrl: './welcome.component.html',
  styles: ``
})
export class WelcomeComponent {
  selectedTimeFrame: string = "This Week";


}
