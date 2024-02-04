import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrl: './tarjeta-pokemon.component.scss'
})
export class TarjetaPokemonComponent implements OnChanges {
  ngOnChanges(): void {
   this.extraerInformacion();
  }

  @Input() data?: Resultado
  id:string = "0";

  extraerInformacion(){
    if(this.data){
      this.id =  this.data.url.substring(34, this.data.url.length-1)
    }

  }

}
