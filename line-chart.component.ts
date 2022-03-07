import { Component, Input, OnInit ,ViewChild } from '@angular/core';
import { Chart , ChartConfiguration, ChartEvent, ChartType} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'; 

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

totalSales = 10000;
  constructor() { }
  
  ngOnInit() {
    
    const mybarChart = new Chart("mybarChart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: 'My first barCar',
            //   data: [12, 19, 3, 5, 2, 3],
              data: [13, 15, 13, 3, 7, 1],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              },
        //   plugins: {
        //     title: {
        //         display: true,
        //         text: 'My y lables',
        //         }
        //   }
          }
      }
  });
  const mypieChart = new Chart("mypieChart", {
      type: 'pie',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: 'my first pieCart',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              
          }]
      },
      options: {
          responsive: true,
          scales: {
             
          },
          plugins: {
            title: {
                display: true,
                text: 'My first pieChart',
                },
                legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 12
                    }
                }
            }
          }
        }
  });


  const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        // 'August',
        // 'September',
        // 'October',
        // 'November',
        // 'December'
    ];
    const data = {
    labels: labels,
    datasets: [{
        label: 'My First Line Chart',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    };
    const config = {
        type: 'line',
        data: data,
    };

  const stackedLine = new Chart("mylineChart", {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                stacked: true
            }
        }
    }

    
});


   }
  
  
}
