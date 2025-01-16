import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  form: any = {};
 
  constructor(
    public router: Router
  ) {
  }
  onSubmit(): void {
     this.router.navigate(['/list-artisans'], {queryParams: this.form});
  }
}
