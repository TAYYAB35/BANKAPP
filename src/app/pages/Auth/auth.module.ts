import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginSignupRoutingModule } from './auth.routing';

@NgModule({
  imports: [CommonModule, FormsModule, LoginSignupRoutingModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class LoginSignupModule {}
