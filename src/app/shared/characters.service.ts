import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private charactersUrl = 'http://localhost:3000/characters';
  private speciesUrl = 'http://localhost:3000/species';
  constructor(private http: HttpClient) { }

  getCharacters(parameter) {
    return this.http.get<Character[]>(this.charactersUrl + parameter);
  }

  postSpecies(newChar) {
    return this.http.post<Character[]>(this.charactersUrl, newChar);
  }

  getSpecies() {
    return this.http.get(this.speciesUrl);
  }
}
