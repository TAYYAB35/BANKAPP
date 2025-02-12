import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { OptComponent } from 'src/app/components/opt/opt.component';
import { PaymentDetailsComponent } from 'src/app/components/payment-details/payment-details.component';
import { InputFieldComponent } from "../../../components/input-field/input-field.component";

@Component({
  selector: 'app-bankstatement',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzSelectModule, OptComponent, PaymentDetailsComponent, InputFieldComponent],
  templateUrl: './bankstatement.component.html',
  styles: ``
})
export class BankstatementComponent {
  activeStep: number = 0;
  statementForm: FormGroup
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.statementForm = this.fb.group({
      TarrifNumber: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  getstatementForm(controlName: string): FormControl {
    return this.statementForm.get(controlName) as FormControl;
  }

  onSubmit() {
    this.submitted = true;

    if (this.statementForm.invalid) {
      return;
    }
    console.log('Form Data:', this.statementForm.value);
    this.activeStep = 1;
  }

  listOfTarrif = [
    "Saving Account - CIF : 34y23523",
    "Current Account - CIF : 34y23523",
    "Saving Account 2 : CIF 94823529"
  ];

  confirm() {
    this.activeStep = 2;
  }

}
