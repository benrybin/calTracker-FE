import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-control',
  templateUrl: './router-control.component.html',
  styleUrls: ['./router-control.component.css']
})
export class RouterControlComponent {

  constructor(private router: Router) { }

  isActive(route: string) {
    return this.router.url.includes(route);
  }


}
