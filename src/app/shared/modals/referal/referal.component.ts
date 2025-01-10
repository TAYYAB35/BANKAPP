import { Component, inject, Input } from '@angular/core';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-referal',
  standalone: true,
  imports: [],
  templateUrl: './referal.component.html',
  styles: ``
})
export class ReferalComponent {

  readonly nzModalData: any = inject(NZ_MODAL_DATA);
}
