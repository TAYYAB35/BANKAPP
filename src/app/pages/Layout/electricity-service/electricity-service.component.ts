import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ElectricDataComponent } from "../../../components/electric-data/electric-data.component";

@Component({
  selector: 'app-electricity-service',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NzTabsModule, ElectricDataComponent],
  templateUrl: './electricity-service.component.html',
  styles: ``
})
export class ElectricityServiceComponent {
  @Input() stepIndex: number = 0;
  selectedIndex: number = 0;

  onConfirmClicked() {
    this.stepIndex = 1;
    console.log('Confirm Clicked: stepIndex =', this.stepIndex);
  }

  goToPreviousStep() {
    console.log('Before Back: stepIndex =', this.stepIndex, ', selectedIndex =', this.selectedIndex);

    if (this.stepIndex > 0) {
      this.stepIndex--; // Go to previous step
    } else if (this.selectedIndex > 0) {
      this.selectedIndex--; // Go to previous form
    }

    console.log('After Back: stepIndex =', this.stepIndex, ', selectedIndex =', this.selectedIndex);
  }

  goToMainScreen() {
    console.log('Main Screen Button Clicked');
    this.stepIndex = 0;
    this.selectedIndex = 0; // Reset to first screen
  }
}
