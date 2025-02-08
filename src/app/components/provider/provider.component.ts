import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NzTabsModule, NzSelectModule],
  templateUrl: './provider.component.html',
  styles: `
    .select-number {
      .ant-select-selector {
        height: 48px !important;
      }
    }
  `
})
export class ProviderComponent {

  activeTab: string = 'topUp'; // Default active tab

  topForm: FormGroup;
  submitted = false;
  selectedIndex = 0;
  listOfOption = ['Option 01', 'Option 02'];
  selectedValue = 'Option 01'; // Set this to an existing option

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
    this.selectedIndex = 1;
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


}
