import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_CONF } from 'ngx-image-gallery';
import { Gallery } from '../../shared/classes';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @ViewChild (NgxImageGalleryComponent, {static: false}) ngxImageGallery: NgxImageGalleryComponent;
  language: string;
  conf: GALLERY_CONF = {
    imageOffset: '0px',
    imageBorderRadius: '10px',
    showDeleteControl: false,
    showImageTitle: true,
    reactToKeyboard: true,
    closeOnEsc: true,
    backdropColor: 'black',
    thumbnailSize: 60
  };
  images: Gallery[] = [
    {
      url: '../../../assets/images/VEPoster.png',
      altText: '1',
      title: 'image1',
      thumbnailUrl: '../../../assets/images/VEPoster.png'
    },
    {
      url: '../../../assets/images/VEConcert.jpg',
      altText: '2',
      title: 'image1',
      thumbnailUrl: '../../../assets/images/VEConcert.jpg'
    },
    {
      url: '../../../assets/images/VEComposer.png',
      altText: '3',
      title: 'image1',
      thumbnailUrl: '../../../assets/images/VEComposer.png'
    },
    {
      url: '../../../assets/images/VEPoster.png',
      altText: '1',
      title: 'image1',
      thumbnailUrl: '../../../assets/images/VEPoster.png'
    },
    {
      url: '../../../assets/images/VEConcert.jpg',
      altText: '2',
      title: 'image1',
      thumbnailUrl: '../../../assets/images/VEConcert.jpg'
    },
    {
      url: '../../../assets/images/VEComposer.png',
      altText: '3',
      title: 'image1',
      thumbnailUrl: '../../../assets/images/VEComposer.png'
    },
    {
      url: '../../../assets/images/VEPoster.png',
      altText: '1',
      title: 'image1',
      thumbnailUrl: '../../../assets/images/VEPoster.png'
    },
    {
      url: '../../../assets/images/VEConcert.jpg',
      altText: '2',
      title: 'image1',
      thumbnailUrl: '../../../assets/images/VEConcert.jpg'
    },
    {
      url: '../../../assets/images/VEComposer.png',
      altText: '3',
      title: 'image1',
      thumbnailUrl: '../../../assets/images/VEComposer.png'
    },
  ];
  constructor() { }

  ngOnInit() {
  }
  // open gallery
  openGallery(index: number) {
    this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }
  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
  }

  // callback on gallery closed
  galleryClosed() {
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
  }

// callback on gallery image changed
  galleryImageChanged(index) {
  }

  // callback on user clicked delete button
  deleteImage(index) {
  }

}
