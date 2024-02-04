import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(){ }
// conectamos con la appi de pokemon
   async getPage(){
     const res =  await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=1")//por ser fucion asincrona se usa await para esperar respuesta
     const resJson = await res.json();
     return resJson;
  }

  getId(){

    //https://pokeapi.co/api/v2/ability/{id o nombre}/

  }

  getDescription(){

  }


  
}
