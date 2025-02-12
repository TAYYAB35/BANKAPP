import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opt',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './opt.component.html',
  styles: ``
})
export class OptComponent {
  @Input() showMessage: boolean = true;
  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';
  otp5: string = '';
  nextStep = signal(false);
  @Output() nextStepChange = new EventEmitter<boolean>();

  moveToNext(event: Event, nextField: HTMLInputElement | null) {
    const input = event.target as HTMLInputElement;

    if (input.value.length === 1 && nextField) {
      nextField.focus();
    }

    if (this.otp1 && this.otp2 && this.otp3 && this.otp4 && this.otp5) {
      this.nextStep.set(true);
      this.nextStepChange.emit(true);
    }
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

}
