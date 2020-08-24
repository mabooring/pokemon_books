import { PokeApiService } from '../services/pokeapi.service';
import { POKEMONS } from '../models/pokemons';
import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../shared/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Url } from 'url';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons = POKEMONS;
  pokemon;
  // searchText;
  // s;
  // f;
  apipokemons;
  imageUrls = [];
  offset;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private pokeapiService: PokeApiService
  ) {}

  ngOnInit() {
    this.offset = +localStorage.getItem('offset') || 0;

    //get pokemons from Api
    this.getPokemonInfo();
  }

  setOffsetValue(): void {
    this.offset = this.offset < 0 ? (this.offset = 0) : this.offset;
    localStorage.setItem('offset', String(this.offset));
    this.getPokemonInfo();
  }

  decrementOffset() {
    this.offset -= 25;
    this.offset = this.offset < 0 ? (this.offset = 0) : this.offset;
    localStorage.setItem('offset', String(this.offset));
    this.getPokemonInfo();
  }
  incrementOffset() {
    this.offset += 25;
    localStorage.setItem('offset', String(this.offset));
    this.getPokemonInfo();
  }
  getPokemonInfo() {
    const pokemonsObservable = this.pokeapiService.getPokemons(this.offset);
    pokemonsObservable.subscribe(
      (data) => {
        this.apipokemons = data.results.map((data, index) => ({
          name: data.name,
          id: this.offset + index + 1,
          thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            this.offset + index + 1
          }.png`,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            this.offset + index + 1
          }.png`,
          image2: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            this.offset + index + 1
          }.svg`,
        }));
        // console.log('apipokemons!!', this.apipokemons);
      },
      (err) => {
        console.error('Apiポケモン取得でエラーが発生しました： ' + err);
      }
    );
  }
}
