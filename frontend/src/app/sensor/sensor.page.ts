import { Component, OnInit } from '@angular/core';


import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

//import { Medicion } from '../model/Medicion';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {



  
  public myChart;
  private chartOptions;
  private dispositivoId;
  
  private valor;
  private interval;
  
  constructor(private router:ActivatedRoute,
              private api:ApiService) {
                console.log("00 constructor")       
  }

    
  
  ngOnInit() {
    console.log("01 ngOnInit")
    this.valor = 0;
    this.dispositivoId = this.router.snapshot.paramMap.get('id');
    
  }

  ionViewWillEnter() {
    console.log("02 ionViewWillEnter")
    this.generarChart();
    this.updateChart();

  }


  
  ionViewDidEnter() {
    console.log("03 ionViewDidEnter")
    this.interval =  setInterval(()=>{ 
        this.updateChart();
      }, 5000)    
  }

  ionViewWillLeave() {
    console.log("04 ionViewWillLeave")
    clearInterval(this.interval);
    //document.getElementById("highcharts_" + this.dispositivoId).remove();
    //this.myChart = undefined;
  }


  updateChart() {
    this.api.getUltimaMedicion(this.dispositivoId).then(
      (medicion) => { 
        this.valor =parseInt(medicion.valor);
        console.log(this.valor)
        if (this.myChart) {
          console.log("03.1 update")
          this.myChart.update({series: [{
            name: 'kPA',
            data: [this.valor],
            tooltip: {
                valueSuffix: ' kPA'
            }
          }]})
        } else {
          console.log("03.1 skip update")

        }
      }
    )
  }

  generarChart() {
    console.log("01.1 generarChart")
    console.log(this.dispositivoId)

    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: 'Sensor N° ' + this.dispositivoId
        },
        credits:{enabled:false},
        pane: {
            startAngle: -150,
            endAngle: 150
        },
        yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    },  
    series: [{
        name: 'kPA',
        data: [this.valor],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart("highcharts_" + this.dispositivoId, this.chartOptions );
  }
}
