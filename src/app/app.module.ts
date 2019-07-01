import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './list-view/search/search.component';
import { ListTableComponent } from './list-view/list-table/list-table.component';
import { PaginationComponent } from './list-view/pagination/pagination.component';
import { AddCharacterComponent } from './add-character/add-character.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    HeaderComponent,
    SearchComponent,
    ListTableComponent,
    PaginationComponent,
    AddCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
