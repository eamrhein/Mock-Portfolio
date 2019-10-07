/* eslint-disable require-jsdoc */
import Component from '../lib/component.js';
import store from '../store/index.js';
import {
  parseStockPrices,
  combineStockHistories,
  parsePieGraph}
  from '../util/parsing';
import {createLineChart} from './linechart';
import {createPieChart} from './piechart';

export default class Portfolio extends Component {
  constructor() {
    super({
      store: store || {},
      element: document.querySelector('#stocklist'),
    });
  }

  buildCharts() {
    const combinedHistory = combineStockHistories(store.state.history);
    createLineChart('#line-chart', parseStockPrices(combinedHistory));
    createPieChart('#pie-chart', parsePieGraph(store.state.company));
  }

  render() {
    const {company} = store.state;
    const companyList = Object.keys(company)
        .map((key) => {
          const li = document.createElement('li');
          const div = document.createElement('div');
          const h4 = document.createElement('h4');
          const shares = document.createElement('li');
          const btnP = document.createElement('button');
          const btnM = document.createElement('button');
          h4.innerText = company[key].info.companyName;
          shares.innerText = company[key].shares + ' Shares';
          btnP.innerText = '+';
          btnM.innerText = '-';
          div.appendChild(h4);
          div.appendChild(shares);
          div.appendChild(btnP);
          div.appendChild(btnM);
          li.appendChild(div);
          return li;
        }
        );
    companyList.forEach((item) => {
      this.element.appendChild(item);
    });
    this.buildCharts();
  }
}
