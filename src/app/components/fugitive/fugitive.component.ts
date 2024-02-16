import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fugitive',
  templateUrl: './fugitive.component.html',
  styleUrls: ['./fugitive.component.scss']
})
export class FugitiveComponent {
  @Input() dataFugitive!: any;

  constructor(private router: Router) { }

  open(uid: string) {
    this.router.navigate(['/fugitives', uid]);
  }

}
