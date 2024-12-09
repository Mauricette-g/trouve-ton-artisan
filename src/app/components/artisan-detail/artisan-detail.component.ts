import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Artisan as datas } from '../../../../public/assets/artisans.json';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artisan-detail',
  templateUrl: './artisan-detail.component.html',
  styleUrl: './artisan-detail.component.css'
})
export class ArtisanDetailComponent implements OnInit{
  artisan: any = null;

  constructor(
    private route : ActivatedRoute,
    private location : Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artisan=datas.find(a=>a.id===id);
  }

  goBack(): void {
    this.location.back();
  }

}
