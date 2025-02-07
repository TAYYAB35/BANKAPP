import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './setting.component.html',
  styles: `
  .card{
    box-shadow: 5px 6px 24px 0px #0000000F;
  }
  `
})
export class SettingComponent {
  showStep1: boolean = false; // Pehla step dikhane ke liye
  showStep2: boolean = false;

  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';
  otp5: string = '';

  // Jab edit button click ho, pehla step show ho
  showFirstStep() {
    this.showStep1 = true;
  }

  // OTP enter hone ke baad second step show karna
  moveToNext(event: Event, nextField: HTMLInputElement | null) {
    const input = event.target as HTMLInputElement;

    if (input.value.length === 1 && nextField) {
      nextField.focus();
    }

    // Jab 5 OTP boxes fill ho jayein, dusra step show karein
    if (this.otp1 && this.otp2 && this.otp3 && this.otp4 && this.otp5) {
      this.showStep2 = true;
    }
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
