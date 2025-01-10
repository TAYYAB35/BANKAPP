import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { OtpModalComponent } from '../otp-modal/otp-modal.component';
import { CommonModule } from '@angular/common';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { TaxiDetailModalComponent } from '../taxi-detail-modal/taxi-detail-modal.component';

@Component({
  selector: 'app-taxi-modal',
  standalone: true,
  imports: [NzRadioModule,CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './taxi-modal.component.html',
  styles: ``
})
export class TaxiModalComponent {

  teleForm!: FormGroup;
  fb = inject(FormBuilder)

  ngOnInit() {
    this.initlizeForms();

  }

  initlizeForms() {
    this.teleForm = this.fb.group({
      service: [''],
      beneficiary: [''],
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
    const modal = this.modal.create<TaxiDetailModalComponent>({
      nzContent: TaxiDetailModalComponent,
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
