import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IncorrectpasswordComponent } from '@shared/modals/incorrectpassword/incorrectpassword.component';
import { MoneyDetailModalComponent } from '@shared/modals/money-detail-modal/money-detail-modal.component';
import { TimeoutComponent } from '@shared/modals/timeout/timeout.component';
import { NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  @Input() isMobileMenuOpen = false;
  @Output() closeMenu = new EventEmitter<void>();
  @Output() pageChanged = new EventEmitter<string>();

  menuItems = [
    { name: 'Main', route: '/',description: 'Description for  main dashboard fro the bank,description for  main dashboard fro the bank'},
    { name: 'Services', route: '/services',description: 'description for  main dashboard fro the bank,description for  main dashboard fro the bank' },
    { name: 'Transactions History', route: '/history',description: 'Description for  main dashboard fro the bank,description for  main dashboard fro the bank'},
    { name: 'Manage Beneficiaries', route: '/benefiters',description: 'description for  main dashboard fro the bank,description for  main dashboard fro the bank'},
    { name: 'Transactions', route: '/transactions',description: 'description for  main dashboard fro the bank,description for  main dashboard fro the bank' },
    { name: 'Settings', route: '/setting',description: 'description for  main dashboard fro the bank,description for  main dashboard fro the bank' },
    { name: 'Logout', route: '/logout',description: 'description for  main dashboard fro the bank,description for  main dashboard fro the bank' },
    { name: 'Support', route: '/support',description: 'description for  main dashboard fro the bank,description for  main dashboard fro the bank' },
  ];

  changePage(page: any): void {
    this.pageChanged.emit(page);
    this.closeMenu.emit();
    localStorage.setItem('header-content', JSON.stringify(page));
  }

  router = inject(Router)
  modal = inject(NzModalService)

  isActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact', // Allows partial matches (use 'exact' for strict matching)
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }


  openModal(): void {
    const modal = this.modal.create<TimeoutComponent>({
      nzContent: TimeoutComponent,
      nzMaskClosable: false,
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: null,
      nzWrapClassName: 'money-modal',
      nzWidth: 601,
      nzData: { modal: true },
      nzCentered: true
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }

  openPassowrdModal(): void {
    const modal = this.modal.create<IncorrectpasswordComponent>({
      nzContent: IncorrectpasswordComponent,
      nzMaskClosable: false,
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
      nzFooter: null,
      nzWrapClassName: 'money-modal',
      nzWidth: 601,
      nzData: { modal: true },
      nzCentered: true
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));

    modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
  }

}
