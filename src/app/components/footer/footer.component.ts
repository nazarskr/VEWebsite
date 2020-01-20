import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  language = 'ukr';
  @Output() emitLang: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeLang(lang) {
    this.language = lang;
    this.emitLang.emit(this.language);
  }
  removeActive() {
    if (document.getElementsByClassName('navActive')[0]) {
      const prev = document.getElementsByClassName('navActive')[0];
      prev.classList.remove('navActive');
    }
  }
  setActive(event: MouseEvent): void {
    this.removeActive();
    const el = event.target as HTMLElement;
    el.classList.add('navActive');
  }
}
