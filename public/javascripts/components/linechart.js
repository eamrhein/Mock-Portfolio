/* eslint-disable require-jsdoc */
import Chart from 'chart.js';

import store from '../store/index.js';

export default class LineChart {
  constructor(element) {
    this.createLineChart(element);
  }
  createLineChart(element) {
    const {history, company} = store.state;
    const ctx = document.getElementById(element).getContext('2d');
    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Apple',
            borderColor: '#7B1FA2',
            backgroundColor: '#7B1FA2',
            data: history['AAPL'].map((day) => (
              {
                x: new Date(day.date),
                y: day.close * company['AAPL'].shares,
              })),
          },
          {
            label: 'Tesla',
            backgroundColor: '#B31B4D',
            borderColor: '#B31B4D',
            data: history['TSLA'].map((day) => (
              {
                x: new Date(day.date),
                y: day.close * company['TSLA'].shares,
              })),
          },
          {
            label: 'Microsoft',
            backgroundColor: '#FC476B',
            borderColor: '#FC476B',
            data: history['MSFT'].map((day) => (
              {
                x: new Date(day.date),
                y: day.close * company['MSFT'].shares,
              })),
          },
          {
            label: 'Google',
            backgroundColor: '#FF8452',
            borderColor: '#FF8452',
            data: history['GOOG'].map((day) => (
              {
                x: new Date(day.date),
                y: day.close * company['GOOG'].shares,
              })),
          },
          {
            label: 'Amazon',
            backgroundColor: '#FFC04E',
            borderColor: '#FFC04E',
            data: history['AMZN'].map((day) => (
              {
                x: new Date(day.date),
                y: day.close * company['AMZN'].shares,
              })),
          },
        ],
      },
      options: {
        scales: {
          xAxes: [{
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
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        },
        title: {
          display: true,
          fontSize: 20,
          text: `Stock Prices Past 12 Months`,
        },
      },
    });
  }
  update() {
    const {history, company} = store.state;
    this.lineChart.options.animation.duration = 0;
    this.lineChart.data.datasets = [
      {
        label: 'Apple',
        borderColor: '#7B1FA2',
        backgroundColor: '#7B1FA2',
        data: history['AAPL'].map((day) => (
          {
            x: new Date(day.date),
            y: day.close * company['AAPL'].shares,
          })),
      },
      {
        label: 'Tesla',
        backgroundColor: '#B31B4D',
        borderColor: '#B31B4D',
        data: history['TSLA'].map((day) => (
          {
            x: new Date(day.date),
            y: day.close * company['TSLA'].shares,
          })),
      },
      {
        label: 'Microsoft',
        backgroundColor: '#FC476B',
        borderColor: '#FC476B',
        data: history['MSFT'].map((day) => (
          {
            x: new Date(day.date),
            y: day.close * company['MSFT'].shares,
          })),
      },
      {
        label: 'Google',
        backgroundColor: '#FF8452',
        borderColor: '#FF8452',
        data: history['GOOG'].map((day) => (
          {
            x: new Date(day.date),
            y: day.close * company['GOOG'].shares,
          })),
      },
      {
        label: 'Amazon',
        backgroundColor: '#FFC04E',
        borderColor: '#FFC04E',
        data: history['AMZN'].map((day) => (
          {
            x: new Date(day.date),
            y: day.close * company['AMZN'].shares,
          })),
      },
    ];
    this.lineChart.update();
  }
};
