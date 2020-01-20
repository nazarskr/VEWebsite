import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  language: string;
  elems = document.getElementsByClassName('archiveYear');
  backs = document.getElementsByClassName('archiveYearBack');
  constructor() {
  }

  ngOnInit() {
    this.animateArchieve();
  }
  animateArchieve() {
    const keyframes = [
      {top: 0, left: 0},
      {top: 0, left: '68%'},
      {top: '34%', left: 0},
      {top: '34%', left: '68%'},
      {top: '68%', left: 0},
      {top: '68%', left: '68%'},
      {top: 0, left: '34%'},
      {top: '34%', left: '34%'},
      {top: '68%', left: '34%'},
  ];
    const animations = [];
    for (let i = 0; i < 9; i++) {
        const newArr = keyframes.slice(i).concat(keyframes.slice(0, i));
        animations.push(newArr);
    }
    for (let i = 0; i < this.elems.length; i++) {
        this.elems[i].animate([
            animations[i][0],
            animations[i][1], animations[i][1], animations[i][1],
            animations[i][2], animations[i][2], animations[i][2],
            animations[i][3], animations[i][3], animations[i][3],
            animations[i][4], animations[i][4], animations[i][4],
            animations[i][5], animations[i][5], animations[i][5],
            animations[i][6], animations[i][6], animations[i][6],
            animations[i][7], animations[i][7], animations[i][7],
            animations[i][8], animations[i][8], animations[i][8]
        ],
        {
            duration: 77777,
            iterations: Infinity
        });
        this.backs[i].animate([
          animations[i][8],
          animations[i][7], animations[i][7], animations[i][7],
          animations[i][6], animations[i][6], animations[i][6],
          animations[i][5], animations[i][5], animations[i][5],
          animations[i][4], animations[i][4], animations[i][4],
          animations[i][3], animations[i][3], animations[i][3],
          animations[i][2], animations[i][2], animations[i][2],
          animations[i][1], animations[i][1], animations[i][1],
          animations[i][0], animations[i][0], animations[i][0]
        ],
        {
            duration: 77777,
            iterations: Infinity
        });
    }
  }

}
