import { Component, Input, OnInit } from '@angular/core'
//import {Chart} from 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js'

/*
<div id="divChart">
  <canvas id="bioChart"><canvas>
</div>
*/


@Component({
    selector: 'bioRhythm',
    template: `
    <head>

    </head>

    <body>
    <div style="display: block; width: 250px; height: 200px">
    <canvas id="bioChart" width="10" height="10"></canvas>
    </div>
</body>
    `
   })
   export class BioRhythmComponent implements OnInit {
    @Input() temperature = 0;
    @Input() humidity = 55;

constructor() {
  //var Chart = require('chart.js');
  //var ctx = document.getElementById("bioChart").getContext("2d");
  //var myNewChart = new Chart(ctx).PolarArea(data);}
}


ngOnInit() {


  /*
  */
    /*
  var Chart = require('chart.js');
  var ctx = document.getElementById('bioChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
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
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
*/
  /*
*/
}


}
