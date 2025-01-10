import { Component, inject } from '@angular/core';
import { MoneyDetailModalComponent } from '@shared/modals/money-detail-modal/money-detail-modal.component';
import { MoneyModalComponent } from '@shared/modals/money-modal/money-modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-money-transfer-screen',
  standalone: true,
  imports: [NzTableModule],
  templateUrl: './money-transfer-screen.component.html',
  styles: ``
})
export class MoneyTransferScreenComponent {

  modal = inject(NzModalService)

  teleServiceModal(): void {
    const modal = this.modal.create<MoneyModalComponent>({
      nzContent: MoneyModalComponent,
      nzMaskClosable: false,
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: null,
      nzWrapClassName: 'money-modal',
      nzWidth: 475,
      nzStyle: { 'top': '40px' },
      nzData: { modal: true },
      nzCentered: true
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }

  listOfData: any = [
    {
      name: 'ahmed omer khalid omer',
      accountNo: '121541231321135213212',
      action: ''
    },
    {
      name: 'ahmed omer khalid omer',
      accountNo: '121541231321135213212',
      action: ''
    },
    {
      name: 'ahmed omer khalid omer',
      accountNo: '121541231321135213212',
      action: ''
    },
    {
      name: 'ahmed omer khalid omer',
      accountNo: '121541231321135213212',
      action: ''
    },
    {
      name: 'ahmed omer khalid omer',
      accountNo: '121541231321135213212',
      action: ''
    },
  ];

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
