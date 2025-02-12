import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PagesService } from '@services/pages.service';
import { OptComponent } from 'src/app/components/opt/opt.component';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OptComponent],
  templateUrl: './setting.component.html',
  styles: `
  .card{
    box-shadow: 5px 6px 24px 0px #0000000F;
  }
  `
})
export class SettingComponent {
  selectedLanguage: string = 'en';
  showStep1: boolean = false; // Pehla step dikhane ke liye
  showStep2: boolean = false;
  resetFlow: boolean = true;
  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';
  otp5: string = '';
  passwordForm!: FormGroup;
  submitted = false;
  isshowPassword: boolean = false;
  isshowConfirmPassword: boolean = false;

  constructor(private fb: FormBuilder, private pageService: PagesService) {
    this.passwordForm = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)]],
      },
      { validator: this.passwordMatchValidator('password', 'confirmPassword') }
    );

    // Effect runs automatically when nextStep changes

  }

  setLanguage(lang: string) {
    this.selectedLanguage = lang;
  }

  onNextStepChange(nextStep: boolean) {
    this.showStep2 = nextStep; // Update step based on child's event
  }

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passControl = formGroup.controls[password];
      const confirmPassControl = formGroup.controls[confirmPassword];

      if (confirmPassControl.errors && !confirmPassControl.errors['mismatch']) {
        return;
      }

      if (passControl.value !== confirmPassControl.value) {
        confirmPassControl.setErrors({ mismatch: true });
      } else {
        confirmPassControl.setErrors(null);
      }
    };
  }

  // OnSubmit() {
  //   this.submitted = true;
  //   if (this.passwordForm.valid) {
  //     console.log('Password changed successfully:', this.passwordForm.value);
  //   }
  // }

  get f() {
    return this.passwordForm.controls;
  }

  togglePasswordVisibility(type: string) {
    if (type == 'password') {
      this.isshowPassword = !this.isshowPassword;
    } else {
      this.isshowConfirmPassword = !this.isshowConfirmPassword;
    }
  }

  // Jab edit button click ho, pehla step show ho
  showFirstStep() {
    this.showStep1 = true;
    this.resetFlow = false;

    const body = {
      requestId: "123",
      cif: "2886",
      mobileNo: "0912978588"
    }

    this.pageService.update('FORGOT_PASSWORD', body).subscribe((response) => {
      console.log(response);
    }, (err) => {
      console.error(err);
    })
  }



  savePassword() {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      alert('Please correct the errors before submitting.');
      return;
    }

    // Proceed only if the form is valid
    console.log('Password changed successfully:', this.passwordForm.value);

    // Hide step and reset form
    this.showStep1 = false;
    this.showStep2 = false;
    this.resetFlow = true;
    this.otp1 = this.otp2 = this.otp3 = this.otp4 = this.otp5 = '';
  }

  profile = {
    name: 'Mohamed M. Raouf',
    email: 'Mohamed.M.Raouf@Gmail.Com',
    accountType: 'Personal Account'
  };

  users = [
    {
      name: 'Mohamed M. Raouf',
      email: 'Mohamed.M.Raouf@Org.Com',
      role: 'Checker',
      roleColor: 'bg-[#FFB629] text-amber-600'
    },
    {
      name: 'Omer Khalid',
      email: 'Omerkhalid@Org.Com',
      role: 'Reader',
      roleColor: 'bg-[#08C487] text-emerald-600'
    }
  ];

}
