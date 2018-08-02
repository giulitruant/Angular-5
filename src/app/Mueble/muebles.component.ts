import { Component, Input} from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'Muebles',
  templateUrl: './muebles.component.html',
  animations: [
    trigger('visibility', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)',
        display: 'none'
      })),
      state('active', style({
        backgroundColor: '#d9d2c6',
        transform: 'scale(1.1)',
        display: 'block',
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class MueblesComponent {
  title = '';
  description = '';
  clasMaderas = ['Clara','Oscura','Duras', 'Blandas'];

  public imagesCarousel = Array<{ id: number, img: string }>(
    { id: 1, img: 'src/img/Placard.jpg' },
    { id: 2, img: 'src/img/PlacardTV.jpg' },
    { id: 3, img: 'src/img/vestidor.jpg' });

  public tipoMaderas = Array<{ name: string, type: string, img: string }>(
    { name: 'Caoba', type: 'Oscuras',img:'src/img/caoba.jpg' },
    { name: 'Nogal', type: 'Oscuras', img:'src/img/Nogal.jpg' },
    { name: 'Cerezo', type: 'Oscuras' ,img:'src/img/Cerezo.jpg' },
    { name: 'Olivo', type: 'Oscuras', img:'src/img/Olivo.jpg' },

    { name: 'Cedro', type: 'Clara', img: 'src/img/Cedro.jpg' },
    { name: 'Fresno', type: 'Clara', img: 'src/img/Fresno.jpg' },
    { name: 'Pino', type: 'Clara', img: 'src/img/Pino.jpg' },
    { name: 'Roble', type: 'Clara', img: 'src/img/Roble.jpg' }
  );
}
