/* eslint-disable require-jsdoc */
/* eslint-disable require-jsdoc */
import Chart from '../../../node_modules/chart.js/dist/Chart';
import store from '../store/index.js';
import {parsePieGraph} from '../util/parsing';
export default class PieChart {
  constructor(element) {
    this.createPieChart(element);
  }
  createPieChart(element) {
    const {company} = store.state;
    const ctx = document.getElementById(element).getContext('2d');
    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            data: parsePieGraph(company),
            backgroundColor: [
              '#7B1FA2',
              '#B31B4D',
              '#FC476B',
              '#FF8452',
              '#FFC04E',
            ],
          },
        ],
        labels: ['Apple', 'Tesla', 'Microsoft', 'Google', 'Amazon'],
      },
      options: {
        title: {
          text: 'Stock Value as a % of Total Portfolio',
          display: true,
          fontSize: 20,
        },
      },
    });
  }
  update() {
    const {company} = store.state;
    (this.pieChart.data = {
      datasets: [
        {
          data: parsePieGraph(company),
          backgroundColor: [
            '#7B1FA2',
            '#B31B4D',
            '#FC476B',
            '#FF8452',
            '#FFC04E',
          ],
        },
      ],
      labels: ['Apple', 'Tesla', 'Microsoft', 'Google', 'Amazon'],
    }),
    this.pieChart.update();
  }
}
