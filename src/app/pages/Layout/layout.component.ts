import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../Auth/AuthService';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  providers: [NzModalService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class Layout {

}
