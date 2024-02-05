
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(){ }
// conectamos con la appi de pokemon
getByPage(){
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=1")
}
   

 
  
}
