import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { CountryListComponent } from './country-list/country-list.component'
import { TotalCountComponent } from './total-count/total-count.component'
import {SearchFilterComponent} from './search-filter/search-filter.component'
import { ParDateComponent } from './par-date/par-date.component'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'country', component:  CountryListComponent},
  { path: 'total', component:  TotalCountComponent},
  { path: 'date', component:  SearchFilterComponent},
  { path: 'parDate', component:  ParDateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
