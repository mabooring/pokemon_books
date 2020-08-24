import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
// providedIn: 'root',
export class PokeApiService {
  constructor(private http: HttpClient) {}
  getPokemons(offsetValue): Observable<any> {
    const basePath = 'https://pokeapi.co/api/v2/pokemon';
    let params = new HttpParams()
      .append('limit', '25')
      .append('offset', offsetValue);
    return this.http.get(basePath, { params });
    // return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=0`);
  }

  getPokemonImageUrl(url): Observable<any> {
    return this.http.get(url);
  }
}
