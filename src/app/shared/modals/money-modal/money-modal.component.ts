import { Component, inject } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { MoneyDetailModalComponent } from '../money-detail-modal/money-detail-modal.component';

@Component({
  selector: 'app-money-modal',
  standalone: true,
  imports: [],
  templateUrl: './money-modal.component.html',
  styles: ``
})
export class MoneyModalComponent {
    modal = inject(NzModalService);
    modalRef = inject(NzModalRef);
  
    onSubmit() {
      this.opendDetail();
      this.closeModal();
    }
  
    closeModal(): void {
      this.modalRef.close(); // Close the modal
    }

    opendDetail(): void {
      const modal = this.modal.create<MoneyDetailModalComponent>({
        nzContent: MoneyDetailModalComponent,
        nzMaskClosable: false,
        nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
        nzFooter: null,
        nzWrapClassName: 'money-modal',
        nzWidth: 657,
        nzStyle: { 'top': '40px' },
        nzData: { modal: true },
        nzCentered: true
      });
      modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
  
      modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
    }

}
