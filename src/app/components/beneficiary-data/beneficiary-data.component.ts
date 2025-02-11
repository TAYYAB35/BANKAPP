import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { OptComponent } from '../opt/opt.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';

@Component({
  selector: 'app-beneficiary-data',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NzTabsModule, NzSelectModule, OptComponent, PaymentDetailsComponent],
  templateUrl: './beneficiary-data.component.html',
  styles: `
    .select-number {
      .ant-select-selector {
        height: 48px !important;
      }
    }
  `
})
export class BeneficiaryDataComponent {
  activeTab: string = 'account';
  selectedIndex: number = 0;
  @Input() currentStep: number = 0;
  @Output() confirmClicked = new EventEmitter<void>();
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  firstsubmitted = false;
  secondsubmitted = false;
  thirdsubmitted = false;
  listOfOption = ['Option 01', 'Option 02'];
  selectedValue = 'Option 01';

  constructor(private fb: FormBuilder) {
    this.firstForm = this.fb.group({
      anumber: ['', Validators.required],
      cif: ['', Validators.required],
      benefiter: ['', Validators.required]
    });
    this.secondForm = this.fb.group({
      name: ['', Validators.required],
      mnumber: ['', Validators.required],
    });
    this.thirdForm = this.fb.group({
      metername: ['', Validators.required],
      meternumber: ['', Validators.required],
    });
  }

  get f() {
    return this.firstForm.controls;
  }

  get g() {
    return this.secondForm.controls;
  }

  get h() {
    return this.thirdForm.controls;
  }

  firstonSubmit() {
    this.firstsubmitted = true;
    if (this.firstForm.invalid) return;

    console.log('Form Data:', this.firstForm.value);
    this.selectedIndex = 1;
  }

  secondonSubmit() {
    this.secondsubmitted = true;
    if (this.secondForm.invalid) return;

    console.log('Form Data:', this.secondForm.value);
    this.selectedIndex = 2;
  }

  thirdSubmit() {
    this.thirdsubmitted = true;

    if (this.thirdForm.invalid) {
      return;
    }

    if (this.currentStep < 2) {
      this.currentStep++;
    } else {
      console.log('Final Form Data:', this.thirdForm.value);
    }
  }

  goToPreviousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.selectedIndex = 0;
    }
  }

  onTabClick(index: number) {
    if (index <= this.selectedIndex) {
      this.selectedIndex = index;
    }
  }

  confirmOtp() {
    this.currentStep = 2;
  }

  providers = [
    { name: 'Benefiters', label: 'Add New Benefiters', color: 'bg-yellow-400', src: '../../../../assets/images/icons/beneficiary.svg', active: true },
  ];

  tabs = [
    { id: 'account', label: 'Bank Account' },
    { id: 'number', label: 'Mobile Number' },
    { id: 'meter', label: 'Meter' }
  ];

  phoneNumber: string = '+249455678876';
  amount: string = 'Ahmed';

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
