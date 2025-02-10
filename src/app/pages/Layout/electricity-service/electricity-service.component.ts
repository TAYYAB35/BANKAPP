import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ElectricDataComponent } from "../../../components/electric-data/electric-data.component";

@Component({
  selector: 'app-electricity-service',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NzTabsModule, ElectricDataComponent],
  templateUrl: './electricity-service.component.html',
  styles: ``
})
export class ElectricityServiceComponent {
  @Input() stepIndex: number = 0;
}
