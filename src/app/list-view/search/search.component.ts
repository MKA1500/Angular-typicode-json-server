import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  @Output() keyWord = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  modelChanged(text) {
    this.searchText = text;
    this.keyWord.emit(this.searchText);
  }

}
