import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { RouterLink } from '@angular/router';
import { NumberOnlyDirective } from '../directives/numbers-only.directive';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    NumberOnlyDirective,
    // TelInputDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, RouterLink, NzModalModule, NzButtonModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NumberOnlyDirective,
    CommonModule,
    TranslateModule,
    RouterLink,
  ],
  providers: [LanguageService],
})
export class SharedModule { }
