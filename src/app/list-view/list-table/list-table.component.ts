import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Character } from '../../shared/character.model';

@Component({
  selector: 'sl-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit, AfterContentChecked {
  @Input() characters: Character[];
  charsLen: number = 1;
  constructor() { }

  ngOnInit() {

  }

  ngAfterContentChecked() {
    if (typeof this.characters !== "undefined") {
      this.charsLen = this.characters.length;
    }
  }
}
