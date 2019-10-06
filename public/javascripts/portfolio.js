/* eslint-disable require-jsdoc */
import {fetchdata} from './api-calls';
import {createLineChart} from './linechart';
import {createPieChart} from './piechart';
import {parseStockPrices, combineStockHistories} from './parsing';
class Portfolio {
  constructor(stocks) {
    this.stocks = stocks;
    this.buildCharts(stocks);
    this.createStockList(stocks);
  }
  createStockList(stocks) {
    const stockList = document.getElementById('stocklist');
    console.log(stockList);
    stocks.forEach((stock) => {
      const div = document.createElement('div');
      const h4 = document.createElement('h4');
      const span = document.createElement('span');
      const btnA = document.createElement('button');
      const btnS = document.createElement('button');
      const bdiv = document.createElement('div');
      h4.innerText = stock.name;
      span.innerText = stock.shares + ' Shares';
      btnA.classList.add('plus-btn');
      btnS.classList.add('minus-btn');
      btnA.innerText = '+';
      btnS.innerText = '-';
      div.classList.add('stocklist-item');
      div.appendChild(h4);
      div.appendChild(span);
      bdiv.appendChild(btnA);
      bdiv.appendChild(btnS);
      div.appendChild(bdiv);
      stockList.appendChild(div);
    });
  }
  buildCharts(stocks) {
    fetchdata(stocks).then((histories) => {
      const combinedHistory = combineStockHistories(histories);
      createPieChart('#pie-chart', this.stocks);
      createLineChart('#line-chart', parseStockPrices(combinedHistory));
    });
  }
  addShare(sym) {
    this.stocks[sym]++;
  }
  removeShare(sym) {
    this.stocks[sym]--;
  }
};

export default Portfolio;
