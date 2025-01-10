import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { AccountypeModalComponent } from '../accountype-modal/accountype-modal.component';

@Component({
  selector: 'app-otp-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './otp-modal.component.html',
  styles: ``
})
export class OtpModalComponent {

  modal = inject(NzModalService);
  modalRef = inject(NzModalRef);
  
  firstChar: any;
  secondChar: any;
  thirdChar: any;
  forthChar: any;
  fivthChar: any;

  onInput(event: KeyboardEvent, previousInput: HTMLInputElement | null, currentInput: HTMLInputElement, nextInput?: HTMLInputElement) {
    // Handle normal input (non-Backspace keys)
    if (event.key !== 'Backspace') {
      // Update the current input value
      currentInput.value = event.key;

      // If input has reached max length, focus on next input
      if (currentInput.value.length === currentInput.maxLength && nextInput) {
        nextInput.focus();
      }
    }

    // Handle Backspace key
    if (event.key === 'Backspace') {
      // Clear current input and move focus to the previous input if it exists
      currentInput.value = '';
      if (previousInput) {
        previousInput.focus();
      }
    }
  }

  cancel() {
    this.firstChar = '';
    this.secondChar = '';
    this.thirdChar = '';
    this.forthChar = '';
    this.fivthChar = '';

    this.modalRef.close();
  }

  resetForm() {
    this.firstChar = '';
    this.secondChar = '';
    this.thirdChar = '';
    this.forthChar = '';
    this.fivthChar = '';
  }

  onSubmit() {
    // this.otpModal();
    this.closeModal();
  }

  verify(){
    this.accountModal();
    this.closeModal();
  }

  closeModal(): void {
    this.modalRef.close(); // Close the modal
  }

  accountModal(): void {
    const modal = this.modal.create<AccountypeModalComponent>({
      nzContent: AccountypeModalComponent,
      nzMaskClosable: false,
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: null,
      nzWrapClassName: 'account-modal',
      nzWidth: 657,
      nzData: { modal: true },
      nzCentered: true
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }

}
