import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(
    private speciesData: CharactersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.speciesData.getSpecies()
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

  get f() { return this.addNewCharacterForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.addNewCharacterForm.invalid) {
        console.log('invalid!');
    } else {
      console.log(this.addNewCharacterForm.value);
      this.router.navigate(['']);
    }
  }

}
