import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  @Input() activePage: any;

  ngOnInit() {
    const storedData = JSON.parse(localStorage.getItem("header-content") || "null");
    if(storedData){
      this.activePage =  storedData;
    }
  }


}
