import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService} from '../chart.service';
import * as _ from 'lodash';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cool-chart',
  templateUrl: './cool-chart.component.html',
  styleUrls: ['./cool-chart.component.css']
})
export class CoolChartComponent implements OnInit {
  @ViewChild('chart') el: ElementRef;
  @ViewChild('pie') pie: ElementRef;
  @ViewChild('donut') donut: ElementRef;
  constructor(private chartService: ChartService) { }
  ngOnInit() {
    this.basicChart();
    this.basicPie();
    this.basicDonut();
  }
  basicChart() {
    const element = this.el.nativeElement;
    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }];
    const style = {
      margin: { t: 0 }
    };
    Plotly.plot( element, data, style );
  }

  basicPie() {
    const element = this.pie.nativeElement;
    const data = [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie'
    }];

    const layout = {
      height: 400,
      width: 500
    };

    Plotly.plot(element, data, layout);
  }

  basicDonut() {
    const element = this.donut.nativeElement;
    const data = [{
      values: [16, 15, 12, 6, 5, 4, 42],
      labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
      domain: {
        x: [0, .48]
      },
      name: 'GHG Emissions',
      hoverinfo: 'label+percent+name',
      hole: .4,
      type: 'pie'
    },{
      values: [27, 11, 25, 8, 1, 3, 25],
      labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
      text: 'CO2',
      textposition: 'inside',
      domain: {x: [.52, 1]},
      name: 'CO2 Emissions',
      hoverinfo: 'label+percent+name',
      hole: .4,
      type: 'pie'
    }];

    const layout = {
      title: 'Global Emissions 1990-2011',
      annotations: [
        {
          font: {
            size: 20
          },
          showarrow: false,
          text: 'GHG',
          x: 0.17,
          y: 0.5
        },
        {
          font: {
            size: 20
          },
          showarrow: false,
          text: 'CO2',
          x: 0.82,
          y: 0.5
        }
      ],
      height: 600,
      width: 600
    };

    Plotly.newPlot(element, data, layout);
  }
}
