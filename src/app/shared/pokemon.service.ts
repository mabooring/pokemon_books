import { Injectable } from '@angular/core';
import * as localforage from 'localforage';

declare var require: any;

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  public async setAllPokemon(region: any) {
    const dex = await P.getPokedexByName(region);
    var db = localforage.createInstance({ name: region });
    dex.pokemon_entries.forEach(async function (value) {
      var pokemonName = value.pokemon_species.name;
      var p = {
        name: pokemonName,
        region: region,
        caught: false,
        favorite: false,
      };
      db.setItem(pokemonName, p)
        .then(function (value) {})
        .catch(function (err) {
          console.error(`Error: ${err}`);
        });
    });
  }

  public async getAllPokemon(region: any) {
    console.log(`Region: ${region}`);
    var db = localforage.createInstance({ name: region });
    var pokemon = new Array();
    var setDb = true;
    await db.iterate(
      function (value, key, iterationNumber) {
        pokemon.push(value);
        // this.pokemon.push(value);
      },
      function () {}
    );

    if (pokemon.length == 0 && setDb) {
      await this.setAllPokemon(region);
      await this.getAllPokemon(region);
      setDb = false;
    }

    return pokemon;
  }
}
