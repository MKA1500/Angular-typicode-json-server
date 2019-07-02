import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CharactersService } from '../shared/characters.service';

@Component({
  selector: 'sl-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {
  addNewCharacterForm: FormGroup;
  species: string[];

  constructor(private speciesData: CharactersService) { }

  ngOnInit() {
    this.speciesData.getSpecies()
      .subscribe((res: string[]) => {
        this.species = res;
      });

    this.addNewCharacterForm = new FormGroup({
      'charName': new FormControl(),
      'charSpecies': new FormControl(),
      'charGender': new FormControl(),
      'charHomeworld': new FormControl()
    });
  }

  onSubmit() {
    console.log(this.addNewCharacterForm);
  }

}
