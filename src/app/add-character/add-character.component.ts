import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Character } from '../shared/character.model';
import { CharactersService } from '../shared/characters.service';

@Component({
  selector: 'sl-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {
  addNewCharacterForm: FormGroup;
  species: string[];
  submitted = false;
  newCharacterItem: Character = {
    id: 0,
    name: '',
    species: '',
    gender: '',
    homeworld: ''
  };

  constructor(
    private charactersService: CharactersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.charactersService.getSpecies()
      .subscribe((res: string[]) => {
        this.species = res;
      });

    this.addNewCharacterForm = this.formBuilder.group({
      'charName': new FormControl(null, [Validators.required]),
      'charSpecies': new FormControl(null, [Validators.required]),
      'charGender': new FormControl(null, [Validators.required]),
      'charHomeworld': new FormControl()
    });
  }

  get f() {
    return this.addNewCharacterForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addNewCharacterForm.invalid) {
        console.log('invalid!');
    } else {
      this.newCharacterItem.name = this.addNewCharacterForm.value.charName;
      this.newCharacterItem.species = this.addNewCharacterForm.value.charSpecies;
      this.newCharacterItem.gender = this.addNewCharacterForm.value.charGender;
      if (this.addNewCharacterForm.value.charHomeworld === null) {
        this.newCharacterItem.homeworld = '';
      } else {
        this.newCharacterItem.homeworld = this.addNewCharacterForm.value.charHomeworld;
      }

      console.log(this.newCharacterItem);
      this.charactersService.postSpecies(this.newCharacterItem);

      this.router.navigate(['']);
    }
  }

}
