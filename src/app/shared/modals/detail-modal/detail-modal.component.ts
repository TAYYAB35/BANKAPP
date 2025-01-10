import { Component, inject } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { AccountypeModalComponent } from '../accountype-modal/accountype-modal.component';

@Component({
  selector: 'app-detail-modal',
  standalone: true,
  imports: [],
  templateUrl: './detail-modal.component.html',
  styles: ``
})
export class DetailModalComponent {

  
      modal = inject(NzModalService);
      modalRef = inject(NzModalRef);
    
      onSubmit() {
        // this.otpModal();
        this.closeModal();
      }
    
      closeModal(): void {
        this.modalRef.close(); // Close the modal
      }

      openType(): void {
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
