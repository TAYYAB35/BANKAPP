import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styles: ``
})
export class InputFieldComponent {
  @Input() control!: FormControl;
  @Input() submitted = false;
  @Input() label = '';    
  @Input() type = 'text';  
  @Input() placeholder = '';
}
