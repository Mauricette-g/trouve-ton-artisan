import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-artisan',
  templateUrl: './fiche-artisan.component.html',
  styleUrl: './fiche-artisan.component.css'
})
export class FicheArtisanComponent implements OnInit {

  @Input() artisan: any;

  ngOnInit(): void {


  }
}
