import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BeneficiaryDataComponent } from "../../../components/beneficiary-data/beneficiary-data.component";

@Component({
  selector: 'app-beneficiary-service',
  standalone: true,
  imports: [CommonModule, BeneficiaryDataComponent],
  templateUrl: './beneficiary-service.component.html',
  styles: ``
})
export class BeneficiaryServiceComponent {
  @Input() currentStep: number = 0;
  selectedIndex: number = 0;

  onConfirmClicked() {
    this.currentStep = 1;
    console.log('Confirm Clicked: currentStep =', this.currentStep);
  }

  goToPreviousStep() {
    console.log('Before Back: currentStep =', this.currentStep, ', selectedIndex =', this.selectedIndex);

    if (this.currentStep > 0) {
      this.currentStep--; // Go to previous step
    } else if (this.selectedIndex > 0) {
      this.selectedIndex--; // Go to previous form
    }

    console.log('After Back: currentStep =', this.currentStep, ', selectedIndex =', this.selectedIndex);
  }

  goToMainScreen() {
    console.log('Main Screen Button Clicked');
    this.currentStep = 0;
    this.selectedIndex = 0; // Reset to first screen
  }
}
