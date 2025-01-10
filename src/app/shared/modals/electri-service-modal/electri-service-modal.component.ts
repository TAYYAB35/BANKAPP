import { Component, inject } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { OtpModalComponent } from '../otp-modal/otp-modal.component';
import { DetailModalComponent } from '../detail-modal/detail-modal.component';

@Component({
  selector: 'app-electri-service-modal',
  standalone: true,
  imports: [],
  templateUrl: './electri-service-modal.component.html',
  styles: ``
})
export class ElectriServiceModalComponent {

  
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
        const modal = this.modal.create<DetailModalComponent>({
          nzContent: DetailModalComponent,
          nzMaskClosable: false,
          nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
          nzFooter: null,
          nzWrapClassName: 'detail-modal',
          nzWidth: 657,
          nzData: { modal: true },
          nzCentered: true
        });
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    
        modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
      }

}
