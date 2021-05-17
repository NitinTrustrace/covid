import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryListComponent } from './country-list/country-list.component';
import { TotalCountComponent } from './total-count/total-count.component';

import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ParDateComponent } from './par-date/par-date.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountryListComponent,
    TotalCountComponent,
    SearchFilterComponent,
    ParDateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
