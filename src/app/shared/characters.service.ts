import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private charactersUrl = 'http://localhost:3000/characters';
  private speciesUrl = 'http://localhost:3000/species';
  constructor(private http: HttpClient) { }

  getCharacters(parameter) {
    return this.http.get(this.charactersUrl + parameter);
  }

  getSpecies() {
    return this.http.get(this.speciesUrl);
  }
}
