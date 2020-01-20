import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Vox Electronica';
  language = 'ukr';
  routerUrl: string;
  index: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }
  getLang(data) {
    this.language = data;
    this.routerUrl = this.router.url;
    const link = this.routerUrl.slice(1, this.routerUrl.length);
    this.router.navigate(['empty']).then(() => {
      this.router.navigate([this.routerUrl]);
    });
    setTimeout(() => {
      const el = document.querySelector(`a[routerLink=${link}]`);
      el.classList.add('navActive');
    }, 0);
  }
  onOutletActivate(component) {
    component.language = this.language;
  }
}
