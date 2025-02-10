import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { OptComponent } from '../opt/opt.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';

@Component({
  selector: 'app-electric-data',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NzTabsModule, NzSelectModule, OptComponent, PaymentDetailsComponent],
  templateUrl: './electric-data.component.html',
  styles: ``
})
export class ElectricDataComponent {
  activeTab: string = 'electricity';
  selectedIndex: number = 0;
  stepIndex: number = 0;
  topForm: FormGroup;
  BillForm: FormGroup;
  submitted = false;
  Billsubmitted = false;
  isFirstFormValid = false;
  listOfOption = ['Option 01', 'Option 02'];
  selectedValue = 'Option 01';

  constructor(private fb: FormBuilder) {
    this.topForm = this.fb.group({
      number: ['', Validators.required],
    });

    this.BillForm = this.fb.group({
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

    this.isFirstFormValid = true; // Enable the second form
    this.selectedIndex = 1; // Move to next tab

    // Activate the second provider when moving to the next form
    this.providers.forEach(provider => {
      provider.active = provider.id === 1;
    });
  }

  onBillSubmit() {
    this.Billsubmitted = true;

    if (this.stepIndex === 0 && this.g['fournumber'].invalid) {
      return;
    }

    if (this.stepIndex === 0) {
      this.stepIndex++;
    } else {
      console.log('Final Form Data:', this.BillForm.value);
    }
  }

  providers = [
    {
      id: 0,
      name: 'MTN',
      label: 'Electricity Services',
      color: 'bg-yellow-400',
      src: '../../../../assets/images/icons/flash_on (1).svg',
      active: true
    },
    {
      id: 1,
      name: 'SD',
      label: 'MTN Bill Inquiry',
      color: 'bg-blue-100',
      src: '../../../../assets/images/icons/flash_on (1).svg',
      active: false
    }
  ];

  toggleProvider(selectedProvider: any) {
    if (selectedProvider.id === 1 && !this.isFirstFormValid) {
      return;
    }

    this.providers.forEach(provider => {
      provider.active = provider.id === selectedProvider.id;
    });

    this.selectedIndex = selectedProvider.id;
  }

  goToPreviousStep() {
    if (this.stepIndex > 0) {
      this.stepIndex--;
    } else {
      this.selectedIndex = 0;
    }
  }

  onNext() {
    if (this.stepIndex < 1) {
      this.stepIndex++;
    }
  }
}
