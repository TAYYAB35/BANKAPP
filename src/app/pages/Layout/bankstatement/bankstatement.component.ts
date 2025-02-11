import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { OptComponent } from 'src/app/components/opt/opt.component';
import { PaymentDetailsComponent } from 'src/app/components/payment-details/payment-details.component';

@Component({
  selector: 'app-bankstatement',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzSelectModule ,OptComponent,PaymentDetailsComponent],
  templateUrl: './bankstatement.component.html',
  styles: ``
})
export class BankstatementComponent {
  activeStep: number = 0;
  statementForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.statementForm = this.fb.group({
      TarrifNumber: [''],
      amount: [''],
    });
  }

  onSubmit() {
    console.log(this.statementForm.value);
    this.activeStep = 1;
  }

  listOfTarrif = [
    "Saving Account - CIF : 34y23523",
    "Current Account - CIF : 34y23523",
    "Saving Account 2 : CIF 94823529"
  ];

  confirm(){
    this.activeStep = 2;
  }

}
