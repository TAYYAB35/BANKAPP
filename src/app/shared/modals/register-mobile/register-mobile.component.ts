import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-register-mobile',
  standalone: true,
  imports: [],
  templateUrl: './register-mobile.component.html',
  styles: ``
})
export class RegisterMobileComponent {

  router = inject(Router);
  ref = inject(NzModalRef);

  navigateToSetting() {
    this.ref.close(); // Close the modal
    this.router.navigate(['home/setting/general']);
  }
}
