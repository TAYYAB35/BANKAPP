import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'app-accountype-modal',
  standalone: true,
  imports: [NzRadioModule,FormsModule,CommonModule,CommonModule,ReactiveFormsModule],
  templateUrl: './accountype-modal.component.html',
  styles: ``
})
export class AccountypeModalComponent {
    modal = inject(NzModalService);
    modalRef = inject(NzModalRef);
    fb = inject(FormBuilder);

    accountForm! : FormGroup;

  closeModal(): void {
    this.modalRef.close(); // Close the modal
  }

  ngOnInit(){
    this.accountForm = this.fb.group({
      accountType: ['',],
    });
  }

  onSubmit(){

  }

}
