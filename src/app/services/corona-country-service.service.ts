import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaCountryServiceService {

  constructor(private http:HttpClient) { }

  getCountries():Observable<any>{
    const url= "https://api.covid19api.com/countries"
    return this.http.get<any>(url)

  }

  getCoronoLate(country):Observable<any>{
    const url= "https://api.covid19api.com/total/dayone/country/"+country
    return this.http.get<any>(url)

  }

  getTotal():Observable<any>{
    const url= "https://api.covid19api.com/world/total"

    return this.http.get<any>(url)

  }
  getDateData(country,fromDate,toDate):Observable<any>{
    const url= "https://api.covid19api.com/country/"+country+"?from="+fromDate+"&to="+toDate
    console.log(url+"urlurlurl");

    return this.http.get<any>(url)

  }

}
