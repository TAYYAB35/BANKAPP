import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-telecome-service',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NzTabsModule],
  templateUrl: './telecome-service.component.html',
  styles: ``
})
export class TelecomeServiceComponent {

  activeTab: string = 'topUp'; // Default active tab

  topForm: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder) {
    this.topForm = this.fb.group({
      number: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  get f() {
    return this.topForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.topForm.invalid) {
      return;
    }
    console.log('Form Data:', this.topForm.value);
  }

  providers = [
    { name: 'MTN', label: 'MTN TopUp', color: 'bg-yellow-400', src: '../../../../assets/images/icons/image.svg', active: true },
    { name: 'SD', label: 'Sudani Services', color: 'bg-blue-100', src: '../../../../assets/images/icons/image(1).svg', active: false },
    { name: 'ZS', label: 'Zain Services', color: 'bg-purple-100', src: '../../../../assets/images/icons/Frame 2617.svg', active: false }
  ];

  toggleProvider(selectedProvider: any) {
    this.providers.forEach(provider => {
      provider.active = provider === selectedProvider;
    });
  }

  tabs = [
    { id: 'topUp', label: 'Top Up' },
    { id: 'billInquiry', label: 'Bill Inquiry' },
    { id: 'scratches', label: 'Scratches' }
  ];

  phoneNumber: string = '+249455678876';
  amount: string = 'Ahmed';

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

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
