/* eslint-disable require-jsdoc */
import Chart from 'chart.js';
import store from '../store/index.js';

export const dataB = () => {
  const {history, company} = store.state;
  return {
    datasets: [
      {
        label: 'Apple',
        borderColor: '#7B1FA2',
        backgroundColor: '#7B1FA2',
        pointRadius: 0,
        data: history['AAPL'].map((day) => (
          {
            x: new Date(day.date),
            y: (day.close * company['AAPL'].shares).toFixed(2),
          })),
      },
      {
        label: 'Tesla',
        backgroundColor: '#B31B4D',
        borderColor: '#B31B4D',
        pointRadius: 0,
        data: history['TSLA'].map((day) => (
          {
            x: new Date(day.date),
            y: (day.close * company['TSLA'].shares).toFixed(2),
          })),
      },
      {
        label: 'Microsoft',
        backgroundColor: '#FC476B',
        borderColor: '#FC476B',
        pointRadius: 0,
        data: history['MSFT'].map((day) => (
          {
            x: new Date(day.date),
            y: (day.close * company['MSFT'].shares).toFixed(2),
          })),
      },
      {
        label: 'Google',
        backgroundColor: '#FF8452',
        pointRadius: 0,
        borderColor: '#FF8452',
        data: history['GOOG'].map((day) => (
          {
            x: new Date(day.date),
            y: (day.close * company['GOOG'].shares).toFixed(2),
          })),
      },
      {
        label: 'Amazon',
        backgroundColor: '#FFC04E',
        pointRadius: 0,
        borderColor: '#FFC04E',
        data: history['AMZN'].map((day) => (
          {
            x: new Date(day.date),
            y: (day.close * company['AMZN'].shares).toFixed(2),
          })),
      },
    ],
  };
};

export default class BarChart {
  constructor(element) {
    this.createBarChart(element);
  }
  createBarChart(element) {
    const ctx = document.getElementById(element).getContext('2d');
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: dataB(),
      options: {
        title: {
          display: true,
          text: 'Monthy Portfolio Stacked',
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true,
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
              round: 'week',
              displayFormats: {
                month: 'MMM',
              },
            },
          }],
          yAxes: [{
            stacked: true,
          }],
        },
      },
    });
  }
  update() {
    this.barChart.data.datasets = dataB().datasets;
    this.barChart.update();
  }
}
