import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  language: string;
  newsUkr = [
    {
      title: 'Анонс',
      date: new Date(),
      content: 'Наступний фестиваль запланований у період з 28 квітня по 11 травня',
      imageUrl: ''
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
