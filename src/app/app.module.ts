import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BatimentComponent } from './components/batiment/batiment.component';
import { ServicesComponent } from './components/services/services.component';
import { FabricationComponent } from './components/fabrication/fabrication.component';
import { AlimentationComponent } from './components/alimentation/alimentation.component';
import { ArtisanListComponent } from './components/artisan-list/artisan-list.component';
import { FicheArtisanComponent } from './components/fiche-artisan/fiche-artisan.component';
import { ErrorComponent } from './components/error/error.component';
import { ArtisanDetailComponent } from './components/artisan-detail/artisan-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BatimentComponent,
    ServicesComponent,
    FabricationComponent,
    AlimentationComponent,
    ArtisanListComponent,
    FicheArtisanComponent,
    ErrorComponent,
    ArtisanDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
