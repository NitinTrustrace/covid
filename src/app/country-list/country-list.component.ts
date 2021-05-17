import { Component, OnInit } from '@angular/core';
import { CoronaCountryServiceService} from 'src/app/services/corona-country-service.service';
import Chart from 'chart.js/auto';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  

  countries:any;
  country:any;
  confirmed:Number;
  death:Number;
  recover:Number;
  active:Number;
 myChart: any;
 fromDate:any;
 toDate:any;

  constructor(private corona:CoronaCountryServiceService) { }

  ngOnInit(): void {
    this.corona.getCountries().subscribe((data)=>{
      this.countries=data;

    })
  }

  getCountry(country:any){
    this.country=country;
  }


  getCoronaData(){
    this.corona.getCoronoLate(this.country).subscribe((data)=>{
           var lastIndex=data.length-1;
           this.confirmed=data[lastIndex].Confirmed;
           this.death=data[lastIndex].Deaths;
           this.recover=data[lastIndex].Recovered;
           this.active=data[lastIndex].Active;
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
