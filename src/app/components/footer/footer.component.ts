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
}
