import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/characters.service';

@Component({
  selector: 'sl-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {
  species: string[];

  constructor(private speciesData: CharactersService) { }

  ngOnInit() {
    this.speciesData.getSpecies()
      .subscribe((res: string[]) => {
        this.species = res;
        console.log(this.species);
      });
  }

}
