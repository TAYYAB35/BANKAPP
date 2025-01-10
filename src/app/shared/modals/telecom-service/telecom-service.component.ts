import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { OtpModalComponent } from '../otp-modal/otp-modal.component';

@Component({
  selector: 'app-telecom-service',
  standalone: true,
  imports: [NzRadioModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './telecom-service.component.html',
  styles: ``
})
export class TelecomServiceComponent {

  teleForm!: FormGroup;
  fb = inject(FormBuilder)

  ngOnInit() {
    this.initlizeForms();

  }

  initlizeForms() {
    this.teleForm = this.fb.group({
      bank: [''],
      service: [''],
      account: [''],
    });
  }

  modal = inject(NzModalService);
  modalRef = inject(NzModalRef);

  onSubmit() {
    this.otpModal();
    this.closeModal();
  }

  closeModal(): void {
    this.modalRef.close(); // Close the modal
  }

  otpModal(): void {
    const modal = this.modal.create<OtpModalComponent>({
      nzContent: OtpModalComponent,
      nzMaskClosable: false,
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: null,
      nzWrapClassName: 'opt-modal',
      nzWidth: 657,
      nzData: { modal: true },
      nzCentered: true
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }
}
