import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableComponent } from '../table/table.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NzTabsModule,NzTableModule,TableComponent,HeaderComponent],
  templateUrl: './welcome.component.html',
  styles: ``
})
export class WelcomeComponent {


}
