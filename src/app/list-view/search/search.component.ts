import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import _ from 'lodash';

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

  // to do!!: Search requests to API are debounced by 200 ms.
  modelChanged(text) {
    // console.log(_);
    // _.debounce(() => {
    //   this.searchText = text;
    // }, 200);
    this.searchText = text;
    this.keyWord.emit(this.searchText);
  }

}
