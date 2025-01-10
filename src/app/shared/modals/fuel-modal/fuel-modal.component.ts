import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { TaxiDetailModalComponent } from '../taxi-detail-modal/taxi-detail-modal.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { CommonModule } from '@angular/common';
import { AccountypeModalComponent } from '../accountype-modal/accountype-modal.component';

@Component({
  selector: 'app-fuel-modal',
  standalone: true,
  imports: [NzRadioModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './fuel-modal.component.html',
  styles: ``
})
export class FuelModalComponent {


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
