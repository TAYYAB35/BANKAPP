import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  router = inject(Router)

  isActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

}
