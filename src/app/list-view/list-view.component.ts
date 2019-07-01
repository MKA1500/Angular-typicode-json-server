import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/characters.service';
import { Character } from '../shared/character.model';
import { DataForPagination } from '../shared/data-for-pagination.model';

@Component({
  selector: 'sl-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  currentList: Character[];
  // param for init. In typicode/json-server#paginate 10 items are returned by default
  pageNumber: number = 1;
  param: string = '';
  forPagination: DataForPagination = {
    pageNum: this.pageNumber,
    chars: []
  };

  constructor(private charsData: CharactersService) {}

  ngOnInit() {
    this.param = '?_page=';
    this.getTableData(this.param, this.pageNumber);
    this.forPagination.pageNum = this.pageNumber;
  }

  getTableData(param, pageNum) {
    this.charsData.getCharacters(param + (pageNum).toString())
      .subscribe((res: Character[]) => {
        this.currentList = res;
        this.forPagination.chars = [...this.currentList];
      });
  }

  changePage(pageNum) {
    this.pageNumber = pageNum;
    this.getTableData(this.param, this.pageNumber);
  }

  searchTable(text) {
    this.param = '?q=' + text + '&_page=';
    this.getTableData(this.param, this.pageNumber);
  }
}
