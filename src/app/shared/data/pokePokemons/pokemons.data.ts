import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { HttpClientService } from './../../services/http-client.service';
import { POKE_POKEMONS_ENDPOINT } from '../../urls';
import { IPokedexResponse, PokedexResponse } from '../../models/pokedex/pokedex-response.interface';
import { PokemonEntry } from '~/app/shared/models/pokedex/pokedex-response.interface';

export interface FormattedPokemon extends PokemonEntry {
  imgSrc: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemosDataService {

  private url = POKE_POKEMONS_ENDPOINT;

  constructor(
    private httpClient: HttpClientService
  ) {}

  public getPokemons$() {
    return this.httpClient.get<IPokedexResponse>(this.url)
      .pipe(map(res => {
        const pokedexResponse = new PokedexResponse(res);
        const pokemons = pokedexResponse.pokemon_entries.map(p => {
          const imgSrc = this.getGeneratedImageUrl(p.entry_number);
          return { ...p, imgSrc } as FormattedPokemon;
        })
        return pokemons.slice(0, 20);
      }));
  }

  public getPokemonDetail$(url: string) {
    return this.httpClient.get(url)
  }

  private getGeneratedImageUrl(pokemonId: number) {
    const stringId = pokemonId.toString();
    const FORMATES = [
      { length: 1, value: '00' },
      { length: 2, value: '0' },
      { length: 3, value: '' },
    ]
    const matchedFormat = FORMATES.find(f => f.length === stringId.length);
    const formattedStringId = `${matchedFormat.value}${stringId}`;
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedStringId}.png`;
  }
}