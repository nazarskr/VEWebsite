import { Component, OnInit, Input } from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  animations: [
    trigger('scrollMenu', [
      state('static', style({
        backgroundColor: 'white',
      })),
      state('scroll', style({
        backgroundColor: 'yellow',
      })),
      transition('static <=> scroll', [
        animate('.5s')
      ]),
    ]),
    trigger('scrollLink', [
      state('static', style({
        color: 'black',
      })),
      state('scroll', style({
        color: 'grey',
      })),
      transition('static <=> scroll', [
        animate('.5s')
      ]),
    ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() language: string;
  scroll100 = false;
  isChecked = false;
  constructor(private scrollDispatcher: ScrollDispatcher) { }

  ngOnInit() {
  }
  scrollingEvents(): void {
    this.scrollDispatcher.scrolled().subscribe(() => {
      if (window.scrollY > 100) {
        this.scroll100 = true;
      } else {
        this.scroll100 = false;
      }
    });
  }
  removeActive(): void {
    if (document.getElementsByClassName('navActive')[0]) {
      const prev = document.getElementsByClassName('navActive')[0];
      prev.classList.remove('navActive');
    }
  }
  setActive(event: MouseEvent): void {
    this.removeActive();
    const el = event.target as HTMLElement;
    el.classList.add('navActive');
    this.closeMenu();
  }
  closeMenu(): void {
    this.isChecked = false;
  }

}
