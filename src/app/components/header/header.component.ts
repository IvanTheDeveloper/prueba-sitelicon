import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHomeSelected: boolean = false;
  isAboutSelected: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateSelectedState();
    this.router.events.subscribe(() => {
      this.updateSelectedState();
    });
  }

  updateSelectedState() {
    this.isHomeSelected = this.router.url == '/fugitives'
    this.isAboutSelected = this.router.url == '/about'
  }

  navHome() {
    this.router.navigate(['fugitives']);
  }

  navAbout() {
    this.router.navigate(['about']);
  }

}
