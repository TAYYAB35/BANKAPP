import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opt',
  standalone: true,
  imports: [FormsModule,CommonModule],
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
  nextStep = signal(false); // Receive signal from the parent
  @Output() nextStepChange = new EventEmitter<boolean>(); // Emit event to parent

  // OTP enter hone ke baad second step show karna
  moveToNext(event: Event, nextField: HTMLInputElement | null) {
    const input = event.target as HTMLInputElement;

    if (input.value.length === 1 && nextField) {
      nextField.focus();
    }

    // Jab 5 OTP boxes fill ho jayein, dusra step show karein
    if (this.otp1 && this.otp2 && this.otp3 && this.otp4 && this.otp5) {
      this.nextStep.set(true);
      this.nextStepChange.emit(true); // Notify parent

    }
  }

}
