import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { Resultado } from '../../interfaces/pokeapi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent   implements OnInit {

  listaPokemon:Resultado[] =[]

  constructor( private pokemonService: PokemonService){}
  ngOnInit(): void {
    this.cargarLista();
   
  } 
// esta funcion guarda en el array listaPokemon los resultados consultados de la api pokemon y permite mostrar resultado
//existentes y las nuevas consultas de la funcion pokemonService
  async cargarLista(){
    this.listaPokemon = [...this.listaPokemon, ...await this.pokemonService.getPage()];
    console.log(this.listaPokemon);
  }


}
