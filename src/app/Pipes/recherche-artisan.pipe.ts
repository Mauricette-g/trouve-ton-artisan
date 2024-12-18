import { Pipe, PipeTransform } from '@angular/core';
import { ArtisanInterface } from '../artisan-interface';


@Pipe({
  name: 'rechercheArtisan'
})
export class RechercheArtisanPipe implements PipeTransform {

  transform(value:ArtisanInterface[], search: string): ArtisanInterface[] {
    return  value.filter(art=>art.name.toLowerCase().includes(search.toLowerCase()) || art.artisanSpecialite.toLowerCase().includes(search.toLowerCase()) || art.artisanLocalisation.toLowerCase().includes(search.toLowerCase()));
  }

}
