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
  @Input() selectedIndex: number = 0;

  onConfirmClicked() {
    this.selectedIndex = 1;
    console.log('Confirm Clicked: selectedIndex =', this.selectedIndex);
  }

  goToPreviousStep() {
    console.log('Before Back: selectedIndex =', this.selectedIndex, ', selectedIndex =', this.selectedIndex);

    if (this.selectedIndex > 0) {
      this.selectedIndex--; // Go to previous step
    } else if (this.selectedIndex > 0) {
      this.selectedIndex--; // Go to previous form
    }

    console.log('After Back: selectedIndex =', this.selectedIndex, ', selectedIndex =', this.selectedIndex);
  }

  goToMainScreen() {
    console.log('Main Screen Button Clicked');
    this.selectedIndex = 0;
    this.selectedIndex = 0; // Reset to first screen
  }
}
