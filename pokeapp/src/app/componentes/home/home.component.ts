import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent   implements OnInit {

  constructor( private pokemonService: PokemonService){}
  ngOnInit(): void {
    this.pokemonService.getPage();
  } 


}
