import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { environment } from '../../../../environments/environment';
import { PagesService } from '../../../services/pages.service';
import { SharedService } from '../../../services/shared.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateService } from '@ngx-translate/core';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'app-recharge',
  standalone: true,
  imports: [CommonModule, SharedModule, NzInputModule, NzButtonModule, NzInputNumberModule],
  templateUrl: './recharge.component.html',
  styleUrl: './recharge.component.scss',
})
export class RechargeComponent {
  isLoading = false;
  creditForm: FormGroup;
  currentUser: any;
  minAmount = 5;
  maxAmount = 5000;
  constructor(
    private modal: NzModalRef,
    private pagesService: PagesService,
    private sharedService: SharedService,
    private fb: FormBuilder,
    private translate: TranslateService,
  ) {
    this.currentUser = JSON.parse(localStorage['userDetails']);
    this.creditForm = this.fb.group({
      description: [''],
      amount: [null, [Validators.required, Validators.min(5), Validators.max(5000)]],
    });
  }

  isRequired(controlName: string): boolean {
    const control = this.creditForm.get(controlName);
    if (control) {
      return control.hasValidator(Validators.required);
    } else {
      return false;
    }
  }

  onCancel(): void {
    this.modal.destroy('cancel'); // Pass 'cancel' when closing the modal
  }

  onCreditSubmit() {
    const origin = window.location.origin;
    const path = window.location.pathname;
    if (this.creditForm.valid) {
      const obj = {
        id: '',
        amount: this.creditForm.value.amount,
        saveCard: false,
        statementDescriptor: this.creditForm.value.description,
        postUrl: `${origin}${path}`,
        redirectUrl: `${origin}${path}`,
      };
      this.isLoading = true;
      try {
        this.pagesService.update('CREATE_PAYMENT_CHARGES', obj).subscribe(
          (response) => {
            if (response.successFlag) {
              const responseObj = JSON.parse(response.data);
              // this.sharedService.createNotification("success", response.message);
              this.isLoading = false;
              if (responseObj.transaction.url) {
                window.location.href = responseObj.transaction.url;
              }
            } else {
              this.sharedService.createNotification('error', response?.message);
              this.isLoading = false;
            }
          },
          (error) => {
            console.error('failed', error);
            this.isLoading = false;
          },
        );
      } catch (error) {
        this.isLoading = false;
      }
    } else {
      this.creditForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[+-]/g, '');
    this.creditForm.controls['amount'].setValue(input.value);
  }
  validateNumericInput(event: KeyboardEvent): void {
    // Allow only numbers, backspace, and control keys
    if (!this.isAllowedKey(event)) {
      event.preventDefault(); // Prevent other inputs
    }
  }

  isAllowedKey(event: KeyboardEvent): boolean {
    // Allow numbers (0-9), backspace, delete, arrows, and tab
    return (
      (event.key >= '0' && event.key <= '9') ||
      ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key) ||
      event.ctrlKey || // Allow ctrl combinations
      event.metaKey // Allow cmd on MacOS
    );
  }
}
