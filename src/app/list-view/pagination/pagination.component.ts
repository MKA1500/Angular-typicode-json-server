import { Component,
         OnInit,
         Input,
         EventEmitter,
         Output } from '@angular/core';
import { DataForPagination } from '../../shared/data-for-pagination.model';

@Component({
  selector: 'sl-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentData: DataForPagination;
  @Output() anotherPage = new EventEmitter<number>();
  lastPage: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  // the default for json-server api is 10 per pages
  // the code below should be refactored
  // in case of there will be 10 items on the last page...

  getNextPage() {
    if (this.currentData.chars.length > 9) {
      this.currentData.pageNum = +this.currentData.pageNum + 1;
      this.anotherPage.emit(this.currentData.pageNum);
    }
  }

  getPreviousPage() {
    if (this.currentData.pageNum > 1) {
      this.currentData.pageNum = +this.currentData.pageNum - 1;
      this.anotherPage.emit(this.currentData.pageNum);
    }
  }
}
