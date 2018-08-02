import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cocina',
  templateUrl: './cocina.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./cocina.component.css']
})

export class CocinaComponent {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  maderas: Array<object>;
  name: string;
  cover: string;
  public images = Array<{ id: number, img: string }>(
    { id: 1, img: 'src/img/Placard.jpg' },
    { id: 2, img: 'src/img/PlacardTV.jpg' },
    { id: 3, img: 'src/img/vestidor.jpg' });

  constructor(config: NgbCarouselConfig) {
    //customize default values of carousel used by this component tree
    this.name;
    this.cover;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;

    this.maderas = [
      new CocinaElement('Caoba', 'src/img/caoba.jpg'),
      new CocinaElement('Cedro', 'src/img/Cedro.jpg'),
      new CocinaElement('cerezo', 'src/img/Cerezo.jpg'),
      new CocinaElement('fresno', 'src/img/Fresno.jpg')

    ];
  }

  //ngOnInit() {
  //  this._randomImageUrls(this.images);
  //}

  //private _randomImageUrls(images: Array<{ id: number }>): Array<string> {
  //  return [1, 2, 3].map(() => {
  //    const randomId = images[Math.floor(Math.random() * images.length)].id;
  //    return randomId.toString();
  //  });

  //}

}

export class CocinaElement {

  name: string;
  img: string;

  constructor(name: string, img: string) {

    this.name = name;
    this.img = img;

  }

}
