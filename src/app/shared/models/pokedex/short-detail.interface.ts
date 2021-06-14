import { isObject } from './../../utils/type-validation.util';

export interface IShortDetail {
  name: string;
  url: string;
}

export class ShortDetail {
  public name: string;
  public url: string;
  constructor(n: IShortDetail) {
    const e = isObject(n) ? n : {} as  IShortDetail;
    this.name = e.name ?? '';
    this.url = e.url ?? '';
  }
}

export type ILanguage = IShortDetail;
export type IPokemonSpecies = IShortDetail;
export type IRegion = IShortDetail;
export type IVersionGroup = IShortDetail;

export class Language extends ShortDetail {
  constructor(e: ILanguage) {
    super(e);
  }
}
export class PokemonSpecies extends ShortDetail {
  constructor(e: IPokemonSpecies) {
    super(e);
  }
}
export class Region extends ShortDetail {
  constructor(e: IRegion) {
    super(e);
  }
}
export class VersionGroup extends ShortDetail {
  constructor(e: IVersionGroup) {
    super(e);
  }
}