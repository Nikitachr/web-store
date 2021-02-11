import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery-9';
import 'hammerjs';

import { Product } from 'src/app/shared/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  img: NgxGalleryImage;
  galleryImages$ = new BehaviorSubject<any>([]);

  productData$ = this.route.data.pipe(
    map(res => res.data.data),
    tap((res: Product) => {
      const imgs = res.photo_url.map(el => {
        return {
          medium: el,
          small: el,
          big: el,
        };
      });
      this.galleryImages$.next(imgs);
    })
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        imageSwipe: true,
        imageSize: 'contain',
        previewSwipe: true,
        thumbnailsSwipe: true
      },
      {
        breakpoint: 600,
        width: '300px',
        height: '300px'
      }
    ];
  }

}
