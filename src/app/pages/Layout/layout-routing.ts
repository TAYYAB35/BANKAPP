import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';
import { WelcomeComponent } from 'src/app/components';
import { ServiceScreenComponent,BankScreenComponent ,MoneyTransferScreenComponent} from './index';
import { SettingComponent } from './settingScreen/setting.component';
import { HistoryComponent } from './history/history.component';
import { TelecomeServiceComponent } from './telecome-service/telecome-service.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { ElectricityServiceComponent } from './electricity-service/electricity-service.component';
import { BeneficiaryServiceComponent } from './beneficiary-service/beneficiary-service.component';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'services', component: ServiceScreenComponent},
      {path: 'bank-services', component: BankScreenComponent},
      {path: 'money-transfer', component: MoneyTransferScreenComponent},
      {path: 'setting', component: SettingComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'benefiters', component: BeneficiaryComponent},
      {path: 'services/telecom', component: TelecomeServiceComponent},
      {path: 'services/electric', component: ElectricityServiceComponent},
      {path: 'services/beneficiary', component: BeneficiaryServiceComponent},
    ],
  },
  // Redirect unknown paths to a 404 page or a default route
  // { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
