import { Component, OnInit } from '@angular/core';
import {Artisan as datas } from '../../../../public/assets/artisans.json';
import {ActivatedRoute } from '@angular/router';
import { ArtisanInterface } from '../../artisan-interface';

@Component({
  selector: 'app-recherches-artisans',
  templateUrl: './recherches-artisans.component.html',
  styleUrl: './recherches-artisans.component.css'
})

/* La liste de tous les artisans de la ville...sans distinction de catégories. Il y a la possibilité de 
lister par spécialité de métier.*/

export class RecherchesArtisansComponent implements OnInit{
  rechercheArtisans : ArtisanInterface[] = datas;
  allArtisans: ArtisanInterface[] =datas;
  search : string = "" ;
  constructor(
    private route: ActivatedRoute
  ){
    this.route.queryParams.subscribe((params) => {
      this.search = params['search']?params['search']: "" ;
    });
  }
  ngOnInit(): void {
    console.log("ngOnInit",this.search) ;
}
}

