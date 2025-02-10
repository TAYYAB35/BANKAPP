import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { OptComponent } from '../opt/opt.component';

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NzTabsModule, NzSelectModule, OptComponent],
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
  BillForm: FormGroup;
  submitted = false;
  Billsubmitted = false;
  selectedIndex = 0;
  billselectedIndex = 0;
  listOfOption = ['Option 01', 'Option 02'];
  selectedValue = 'Option 01'; // Set this to an existing option
  paymentDetails: any;

  constructor(private fb: FormBuilder) {
    this.topForm = this.fb.group({
      number: ['', Validators.required],
      amount: ['', Validators.required]
    });
    this.BillForm = this.fb.group({
      secondnumber: ['', Validators.required],
      thirdnumber: ['', Validators.required],
      fournumber: ['', Validators.required]
    });
  }

  get f() {
    return this.topForm.controls;
  }

  get g() {
    return this.BillForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.topForm.invalid) {
      return;
    }
    console.log('Form Data:', this.topForm.value);
    this.selectedIndex = 1;
  }

  onBillSubmit() {
    this.Billsubmitted = true;

    if (this.billselectedIndex === 0 && this.g['secondnumber'].invalid) {
      return;
    }

    if (this.billselectedIndex === 0) {
      this.billselectedIndex = 1;
      this.Billsubmitted = false;
      return;
    }

    if (this.billselectedIndex === 1) {
      this.billselectedIndex = 2;
      return;
    }

    if (this.billselectedIndex === 2) {
      this.billselectedIndex = 3;
      return;
    }

    if (this.billselectedIndex === 3) {
      console.log('Final Form Data:', this.BillForm.value);
      return;
    }
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
