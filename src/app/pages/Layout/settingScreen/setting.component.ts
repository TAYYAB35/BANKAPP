import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './setting.component.html',
  styles: `
  .card{
    box-shadow: 5px 6px 24px 0px #0000000F;
  }
  `
})
export class SettingComponent {
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
