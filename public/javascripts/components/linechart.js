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
                y: (day.close * company['AAPL'].shares).toFixed(2),
              })),
          },
          {
            label: 'Tesla',
            backgroundColor: '#B31B4D',
            borderColor: '#B31B4D',
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
            data: history['MSFT'].map((day) => (
              {
                x: new Date(day.date),
                y: day.close * company['MSFT'].shares.toFixed(2),
              })),
          },
          {
            label: 'Google',
            backgroundColor: '#FF8452',
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
            borderColor: '#FFC04E',
            data: history['AMZN'].map((day) => (
              {
                x: new Date(day.date),
                y: (day.close * company['AMZN'].shares).toFixed(2),
              })),
          },
        ],
      },
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
          xAxes: [{
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
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
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
    this.lineChart.data.datasets = [
      {
        label: 'Apple',
        borderColor: '#7B1FA2',
        backgroundColor: '#7B1FA2',
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
        data: history['MSFT'].map((day) => (
          {
            x: new Date(day.date),
            y: (day.close * company['MSFT'].shares).toFixed(2),
          })),
      },
      {
        label: 'Google',
        backgroundColor: '#FF8452',
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
        borderColor: '#FFC04E',
        data: history['AMZN'].map((day) => (
          {
            x: new Date(day.date),
            y: (day.close * company['AMZN'].shares).toFixed(2),
          })),
      },
    ];
    this.lineChart.update();
  }
};
