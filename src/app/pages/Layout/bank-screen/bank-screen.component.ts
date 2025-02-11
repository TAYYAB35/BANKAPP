import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { OptComponent } from 'src/app/components/opt/opt.component';
import { PaymentDetailsComponent } from 'src/app/components/payment-details/payment-details.component';
import { ProviderComponent } from 'src/app/components/provider/provider.component';

@Component({
  selector: 'app-bank-screen',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzTabsModule, NzSelectModule, OptComponent, PaymentDetailsComponent, RouterLink],
  templateUrl: './bank-screen.component.html',
  styles: ``
})
export class BankScreenComponent {

  @Input() billselectedIndex: number = 0;
  selectedIndex = 0;
  ownStep: number = 0;

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

  onTabClick(index: number) {
    if (index <= this.selectedIndex) {
      this.selectedIndex = index;
    }
  }

  submitted = false;

  alkhaleejMainForm: FormGroup;
  alkhaleejTransferForm: FormGroup;
  alkhaleejStep: number = 0;
  subAccountMainForm: FormGroup;
  subAccountForm: FormGroup;
  subAccountStep: number = 0;
  bankCardForm: FormGroup;
  bankCardFormMain: FormGroup;
  bankCardStep: number = 0;

  constructor(private fb: FormBuilder) {
    this.alkhaleejMainForm = this.fb.group({
      cifNumber: [null],
      amount: [null]
    });
    this.alkhaleejTransferForm = this.fb.group({
      TarrifNumber: [null,],
    });

    this.subAccountMainForm = this.fb.group({
      thirdnumber: [null],
      amount: [null]
    });
    this.subAccountForm = this.fb.group({
      TarrifNumber: [null,],
    });

    this.bankCardFormMain = this.fb.group({
      cifNumber: [null],
      amount: [null]
    });

    this.bankCardForm = this.fb.group({
      TarrifNumber: [null],
    });
  }

  listOfTarrif = [
    "Saving Account - CIF : 34y23523",
    "Current Account - CIF : 34y23523",
    "Saving Account 2 : CIF 94823529"
  ];

  onAlkhaleejMainSubmit() {
    if (this.alkhaleejMainForm.valid) {
      console.log("Alkhaleej Form Submitted", this.alkhaleejMainForm.value);
      this.alkhaleejStep = 1;
    }
  }
  onAlkhaleejTransfer() {
    if (this.alkhaleejMainForm.valid) {
      console.log("Alkhaleej Form Submitted", this.alkhaleejMainForm.value);
      this.alkhaleejStep = 2;
    }
  }

  onSubAccountMain() {
    if (this.subAccountMainForm.valid) {
      console.log("Sub Account Form Submitted", this.subAccountMainForm.value);
      this.subAccountStep = 1;
    }
  }
  onSubAccount() {
    if (this.subAccountMainForm.valid) {
      console.log("Sub Account Form Submitted", this.subAccountMainForm.value);
      this.subAccountStep = 2;
    }
  }

  onBankCardMain() {
    if (this.bankCardFormMain.valid) {
      console.log("Bank Card Form Submitted", this.bankCardFormMain.value);
      this.bankCardStep = 1;
    }
  }
  onBankCardSubmit() {
    if (this.bankCardForm.valid) {
      console.log("Bank Card Form Submitted", this.bankCardForm.value);
      this.bankCardStep = 2;
    }
  }

  showTabs() {
    if (this.selectedIndex == 0) {
      return this.alkhaleejStep != 2
    } else if (this.selectedIndex == 1) {
      return this.subAccountStep != 2
    } else if (this.selectedIndex == 2) {
      return this.bankCardStep != 2
    } else {
      return false;
    }
  }

  showDetails() {
    if (this.selectedIndex == 0) {
      return this.alkhaleejStep == 2
    } else if (this.selectedIndex == 1) {
      return this.subAccountStep == 2
    } else if (this.selectedIndex == 2) {
      return this.bankCardStep == 2
    } else {
      return false;
    }
  }

  hideBackBtn(){
    if (this.selectedIndex == 0) {
      return this.alkhaleejStep == 2
    } else if (this.selectedIndex == 1) {
      return this.subAccountStep == 2
    } else if (this.selectedIndex == 2) {
      return this.bankCardStep == 2
    } else {
      return false;
    }
  }

}
