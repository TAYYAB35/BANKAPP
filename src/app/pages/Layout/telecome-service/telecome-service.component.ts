import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ProviderComponent } from 'src/app/components/provider/provider.component';

@Component({
  selector: 'app-telecome-service',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NzTabsModule,ProviderComponent],
  templateUrl: './telecome-service.component.html',
  styles: ``
})
export class TelecomeServiceComponent {

  transactions = [
    {
      type: 'Top Up',
      phoneNumber: '+249123434556',
      date: '22-4-2025',
      amount: 'SDG 1,720.87',
    },
    {
      type: 'Scratch',
      date: '22-4-2025',
      amount: 'SDG 1,000',
    },
    {
      type: 'Scratch',
      date: '22-4-2025',
      amount: 'SDG 1,000',
    }
  ];

  getHighlightClass(type: string): string {
    if (type === 'Top Up') {
      return 'bg-emerald-500'; // Assuming "amein-500" is a valid class
    } else if (type === 'Scratch') {
      return 'bg-Highlight'; // Assuming "highlth" is a valid class
    }
    return 'bg-gray-500'; // Default color if type doesn't match
  }



}
