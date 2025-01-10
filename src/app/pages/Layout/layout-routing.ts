import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layout } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [

      // { path: 'campaign/create/:campaignId', component: CreateCompaignComponent },
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
