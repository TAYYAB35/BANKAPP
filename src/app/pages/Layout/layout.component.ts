import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../Auth/AuthService';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SidebarComponent, HeaderComponent } from './../../components/index';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    RouterOutlet,
    HeaderComponent
  ],
  providers: [NzModalService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class Layout {
  activePage: string = 'Main';
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  setActivePage(page: string): void {
    this.activePage = page;
    this.isMobileMenuOpen = false;
  }
}
