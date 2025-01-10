import { Component, inject } from '@angular/core';
import { ElectriServiceModalComponent } from '@shared/modals/electri-service-modal/electri-service-modal.component';
import { FuelModalComponent } from '@shared/modals/fuel-modal/fuel-modal.component';
import { TelecomServiceComponent } from '@shared/modals/index';
import { TaxiModalComponent } from '@shared/modals/taxi-modal/taxi-modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-service-screen',
  standalone: true,
  imports: [],
  templateUrl: './service-screen.component.html',
  styles: `
  `
})
export class ServiceScreenComponent {

  modal = inject(NzModalService)

  teleServiceModal(): void {
    const modal = this.modal.create<TelecomServiceComponent>({
      nzContent: TelecomServiceComponent,
      nzMaskClosable: false,
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: null,
      nzWrapClassName: 'telecom-modal',
      nzWidth: 475,
      nzStyle: { 'top': '40px' },
      nzData: { modal: true },
      nzCentered: true
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }

  electricServiceModal(): void {
    const modal = this.modal.create<ElectriServiceModalComponent>({
      nzContent: ElectriServiceModalComponent,
      nzMaskClosable: false,
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: null,
      nzWrapClassName: 'telecom-modal',
      nzWidth: 475,
      nzStyle: { 'top': '40px' },
      nzData: { modal: true },
      nzCentered: true
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }
  taxiServiceModal(): void {
    const modal = this.modal.create<TaxiModalComponent>({
      nzContent: TaxiModalComponent,
      nzMaskClosable: false,
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: null,
      nzWrapClassName: 'taxi-modal',
      nzWidth: 475,
      nzStyle: { 'top': '40px' },
      nzData: { modal: true },
      nzCentered: true
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }

  fuelServiceModal(): void {
    const modal = this.modal.create<FuelModalComponent>({
      nzContent: FuelModalComponent,
      nzMaskClosable: false,
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: null,
      nzWrapClassName: 'fuel-modal',
      nzStyle: { 'top': '40px' },
      nzWidth: 475,
      nzData: { modal: true },
      nzCentered: true
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }

}
