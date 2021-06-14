import { Component, OnInit } from '@angular/core'

import { take } from 'rxjs/operators';

import { LoggerService } from './../../../shared/services/logger.service';
import { FormattedPokemon, PokemosDataService } from './../../../shared/data/pokePokemons/pokemons.data';

@Component({
  selector: 'ns-home',
  templateUrl: './home.view.html',
  styles: []
})
export class HomeComponent implements OnInit {

  private loggingKey = 'HomeComponent';
  public pokemons: FormattedPokemon[] = [];
  public description = 'Minus explicabo magni earum doloremque amet, ipsum dolorem incidunt laborum hic totam, cum qui odio maxime.';


  constructor(
    private logger: LoggerService,
    private pokemosData: PokemosDataService,
  ) {}

  ngOnInit(): void {
    this.logger.log(`${this.loggingKey} => ngOnInit`);
    this.pokemosData.getPokemons$()
      .pipe(take(1))
      .subscribe(pokemons => {
        console.log(pokemons);
        this.pokemons = pokemons;
      });
  }

  public selectPokemon(id: number) {
    console.log(id);
  }
}
