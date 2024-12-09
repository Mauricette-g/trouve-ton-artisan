import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BatimentComponent } from './components/batiment/batiment.component';
import { ServicesComponent } from './components/services/services.component';
import { FabricationComponent } from './components/fabrication/fabrication.component';
import { AlimentationComponent } from './components/alimentation/alimentation.component';
import { ArtisanListComponent } from './components/artisan-list/artisan-list.component';
import { FicheArtisanComponent } from './components/fiche-artisan/fiche-artisan.component';
import { ArtisanDetailComponent } from './components/artisan-detail/artisan-detail.component';


const routes: Routes = [
  {path : "", redirectTo : "accueil", pathMatch : "full"},
  {path : "accueil", component : HomeComponent },
  {path : "batiment", component : BatimentComponent},
  {path : "services", component : ServicesComponent},
  {path : "fabrication", component : FabricationComponent},
  {path : "alimentation", component : AlimentationComponent},
  {path : "list-artisan", component : ArtisanListComponent},
  {path : "fiche-artisan", component : FicheArtisanComponent},
  {path: "fiche-artisan/:id", component:ArtisanDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
