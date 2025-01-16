import { Component } from '@angular/core';
import {Artisan as datas } from '../../../../public/assets/artisans.json';

@Component({
  selector: 'app-artisan-list',
  templateUrl: './artisan-list.component.html',
  styleUrl: './artisan-list.component.css'
})
export class ArtisanListComponent {
  artisanList : any[]=[];
  ngOnInit(): void {
    /* Choisir comme meilleurs artisans ceux ayant une note supérieure ou égale à 4 */
     this.artisanList = datas.filter(arti=>arti.artisanNote >=4)

}

}
