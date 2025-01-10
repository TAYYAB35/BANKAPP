import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { RouterLink } from '@angular/router';
import { ComingSoonComponent } from '../pages/Not-Found/coming-soon/coming-soon.component';
import { NumberOnlyDirective } from '../directives/numbers-only.directive';
import { CropFileComponent } from './modals/crop-file/crop-file.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PreviewComponent } from '@pages/campaign/create-compaign/Preview/preview.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CropVideoComponent } from './modals/crop-video/crop-video.component';

@NgModule({
  declarations: [
    ComingSoonComponent,
    NumberOnlyDirective,
    CropFileComponent,
    // TelInputDirective,
    PreviewComponent,
    CropVideoComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, RouterLink, NzModalModule, NzButtonModule, CarouselModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NumberOnlyDirective,
    CommonModule,
    TranslateModule,
    RouterLink,
    ComingSoonComponent,
    PreviewComponent,
    CropFileComponent,
    CarouselModule,
    CropVideoComponent
  ],
  providers: [LanguageService],
})
export class SharedModule { }
