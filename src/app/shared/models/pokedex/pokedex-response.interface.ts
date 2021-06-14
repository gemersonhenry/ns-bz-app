import { isArray, isObject } from './../../utils/type-validation.util';
import {
  Language, PokemonSpecies, Region, VersionGroup, ILanguage, IPokemonSpecies, IRegion, IVersionGroup
} from './short-detail.interface';

export interface IDescription {
  description: string;
  language: ILanguage;
}

export class Description {
  public description: string;
  public language: Language;
  constructor(n: IDescription) {
    const e = isObject(n) ? n : {} as  IDescription;
    this.description = e.description ?? '';
    this.language = new Language(e.language);
  }
}

export interface IName {
  language: ILanguage;
  name: string;
}

export class Name {
  public language: Language;
  public name: string;
  constructor(n: IName) {
    const e = isObject(n) ? n : {} as IName;
    this.language = new Language(e.language);
    this.name = e.name ?? '';
  }
}

export interface IPokemonEntry {
  entry_number: number;
  pokemon_species: IPokemonSpecies;
}

export class PokemonEntry {
  public entry_number: number;
  public pokemon_species: PokemonSpecies;
  constructor(n: IPokemonEntry) {
    const e = isObject(n) ? n : {} as IPokemonEntry;
    this.entry_number = e.entry_number ?? 0;
    this.pokemon_species = new PokemonSpecies(e.pokemon_species);
  }
}

export interface IPokedexResponse {
  descriptions: IDescription[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: IName[];
  pokemon_entries: IPokemonEntry[];
  region: IRegion;
  version_groups: IVersionGroup[];
}

export class PokedexResponse {
  public descriptions: Description[];
  public id: number;
  public is_main_series: boolean;
  public name: string;
  public names: Name[];
  public pokemon_entries: PokemonEntry[];
  public region: Region;
  public version_groups: VersionGroup[];
  constructor(n: IPokedexResponse) {
    const e = isObject(n) ? n : {} as IPokedexResponse;
    this.descriptions = isArray(e.descriptions) ? e.descriptions.map(x => new Description(x)) : [];
    this.id = e.id ?? 0;
    this.is_main_series = e.is_main_series ?? false;
    this.name = e.name ?? '';
    this.names = isArray(e.names) ? e.names.map(x => new Name(x)) : [];
    this.pokemon_entries = isArray(e.pokemon_entries) ? e.pokemon_entries.map(x => new PokemonEntry(x)) : [];
    this.region = new Region(e.region);
    this.version_groups = isArray(e.version_groups) ? e.version_groups.map(x => new VersionGroup(x)) : [];
  }
}