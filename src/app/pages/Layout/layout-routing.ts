import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';
import { WelcomeComponent } from 'src/app/components';
import { ServiceScreenComponent,BankScreenComponent ,MoneyTransferScreenComponent} from './index';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'services', component: ServiceScreenComponent},
      {path: 'bank-services', component: BankScreenComponent},
      {path: 'money-transfer', component: MoneyTransferScreenComponent},
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
