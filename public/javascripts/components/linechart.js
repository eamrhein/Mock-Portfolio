/* eslint-disable require-jsdoc */
/* eslint-disable require-jsdoc */
import Chart from '../../../node_modules/chart.js/dist/Chart';
import {dataB} from './barchart';

export default class LineChart {
  constructor(element) {
    this.createLineChart(element);
  }
  createLineChart(element) {
    const ctx = document.getElementById(element).getContext('2d');
    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: dataB(),
      options: {
        responsive: true,
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
              ticks: {
                source: 'data',
              },
              type: 'time',
              time: {
                unit: 'month',
                round: 'day',
                displayFormats: {
                  month: 'MMM',
                },
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value',
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        title: {
          display: true,
          fontSize: 20,
          text: `Stock Prices Past 12 Months`,
        },
      },
    });
  }

  sortDataSet(data) {
    return data.sort((objA, objB) => {
      const aClosingPrice = objA.data[objA.data.length - 1].y;
      const bClosingPrice = objB.data[objB.data.length - 1].y;
      return aClosingPrice - bClosingPrice;
    });
  }

  update() {
    this.lineChart.data.datasets = this.sortDataSet(dataB().datasets);
    this.lineChart.update();
  }
}
