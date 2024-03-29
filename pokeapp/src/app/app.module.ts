import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { PokeDetallesComponent } from './componentes/poke-detalles/poke-detalles.component';
import { PokeListaComponent } from './componentes/poke-lista/poke-lista.component';
import { FotoPokemonComponent } from './componentes/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from './componentes/tarjeta-pokemon/tarjeta-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PokeDetallesComponent,
    PokeListaComponent,
    FotoPokemonComponent,
    TarjetaPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
