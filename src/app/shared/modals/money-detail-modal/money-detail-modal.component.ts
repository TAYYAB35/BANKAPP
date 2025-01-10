import { Component, inject } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { AccountypeModalComponent } from '../accountype-modal/accountype-modal.component';
import { OtpModalComponent } from '../otp-modal/otp-modal.component';

@Component({
  selector: 'app-money-detail-modal',
  standalone: true,
  imports: [],
  templateUrl: './money-detail-modal.component.html',
  styles: ``
})
export class MoneyDetailModalComponent {

    modal = inject(NzModalService);
      modalRef = inject(NzModalRef);
    
      onSubmit() {
        this.openType();
        this.closeModal();
      }
    
      closeModal(): void {
        this.modalRef.close(); // Close the modal
      }

      openType(): void {
        const modal = this.modal.create<OtpModalComponent>({
          nzContent: OtpModalComponent,
          nzMaskClosable: false,
          nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
          nzFooter: null,
          nzWrapClassName: 'account-modal',
          nzWidth: 657,
          nzStyle: { 'top': '40px' },
          nzData: { modal: true },
          nzCentered: true
        });
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    
        modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
      }

}
