import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  language: string;
  partners = [
    {imageUrl: '../../../assets/images/eesem-logo.png'},
    {imageUrl: '../../../assets/images/gershom.png'},
    {imageUrl: '../../../assets/images/lvivcenter.png'},
    {imageUrl: '../../../assets/images/eesem-logo.png'},
    {imageUrl: '../../../assets/images/gershom.png'},
    {imageUrl: '../../../assets/images/lvivcenter.png'},
    {imageUrl: '../../../assets/images/eesem-logo.png'},
    {imageUrl: '../../../assets/images/gershom.png'},
    {imageUrl: '../../../assets/images/lvivcenter.png'},
    {imageUrl: '../../../assets/images/eesem-logo.png'},
    {imageUrl: '../../../assets/images/gershom.png'},
    {imageUrl: '../../../assets/images/lvivcenter.png'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
