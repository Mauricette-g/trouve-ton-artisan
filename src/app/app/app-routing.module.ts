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
import { RecherchesArtisansComponent } from './components/recherches-artisans/recherches-artisans.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  {path : "", redirectTo : "accueil", pathMatch : "full"},
  {path : "accueil", component : HomeComponent },
  {path : "batiment", component : BatimentComponent},
  {path : "services", component : ServicesComponent},
  {path : "fabrication", component : FabricationComponent},
  {path : "alimentation", component : AlimentationComponent},
  {path: "detail-artisan/:id", component:ArtisanDetailComponent},
  {path: "list-artisans", component:RecherchesArtisansComponent},
  { path: '**', component : ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
