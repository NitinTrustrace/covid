import { Component, OnInit } from '@angular/core';
import { CoronaCountryServiceService} from 'src/app/services/corona-country-service.service'
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-total-count',
  templateUrl: './total-count.component.html',
  styleUrls: ['./total-count.component.css']
})
export class TotalCountComponent implements OnInit {

  totalConfirmed:Number;
  totalDeath:Number;
  totalRecover:Number;
  myChart: any;

  constructor(private corona:CoronaCountryServiceService) { }

  ngOnInit(): void {
    this.corona.getTotal().subscribe((data)=>{
 
      this.totalConfirmed=data.TotalConfirmed;
      this.totalDeath=data.TotalDeaths;
      this.totalRecover=data.TotalRecovered;
      this.getChart(this.totalConfirmed,this.totalRecover,this.totalDeath);

    })
  }

  getChart(confirmed,recover,death){

    this.totalConfirmed=confirmed;
    this.totalRecover=recover;
    this.totalDeath=death;
    if(this.myChart!=undefined) this.myChart.destroy();

     this.myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Confirmed case', 'Recoverd case', 'Death case'],
          datasets: [{
              label: '# Covid',
              data: [this.totalConfirmed, this.totalRecover, this.totalDeath],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
                
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 99, 132, 1)'
                  
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
