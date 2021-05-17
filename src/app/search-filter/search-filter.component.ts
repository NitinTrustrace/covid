import { Component, OnInit } from '@angular/core';
import { CoronaCountryServiceService} from 'src/app/services/corona-country-service.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  countries:any;
  country:any;
  confirmed:Number;
  death:Number;
  recover:Number;
  active:Number;
 myChart: any;
 fromDate:any;
 toDate:any;
 response:any;

  constructor(private corona:CoronaCountryServiceService) { }

  ngOnInit(): void {
    this.corona.getCountries().subscribe((data)=>{
  
      this.countries=data;

    })
  }

  getCountry(country:any){
    this.country=country;
  }

  getFromDate(fromDate:any){
    this.fromDate=fromDate;

  }

  getToDate(toDate:any){
    this.toDate=toDate;

  }

  getCoronaData(){
    this.corona.getDateData(this.country,this.fromDate,this.toDate).subscribe((data)=>{
      
           var lastIndex=data.length-1;
           var conf =data[lastIndex].Confirmed-data[0].Confirmed;
           var rec =data[lastIndex].Recovered-data[0].Recovered;
           var dea =data[lastIndex].Deaths-data[0].Deaths;
           var act =data[lastIndex].Active-data[0].Active;

           this.confirmed=conf;
           this.death=dea;
            this.recover=rec
            this.active=act;
           this.getChart(this.confirmed,this.recover,this.death,this.active);
    })
    
  }


  getChart(confirmed,recover,death,active){
    this.confirmed=confirmed;
    this.recover=recover;
    this.death=death;
    this.active=active;

    if(this.myChart!=undefined) this.myChart.destroy();

     this.myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Confirmed case', 'Recoverd case', 'Death case', 'Active Case'],
          datasets: [{
              label: '# Covid',
              data: [this.confirmed, this.recover, this.death, this.active],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
                
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  }

}
