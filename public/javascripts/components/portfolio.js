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
      store: store,
      element: document.getElementsByClassName('sharesN'),
    });
    this.createElements();
    this.buildCharts();
  }
  addShare(sym) {
    store.dispatch('addShare', sym);
    d3.select('#pie-chart').select('svg').remove();
    createPieChart('#pie-chart', parsePieGraph(store.state.company));
  }

  minusShare(sym) {
    store.dispatch('minusShare', sym);
    d3.select('#pie-chart').select('svg').remove();
    createPieChart('#pie-chart', parsePieGraph(store.state.company));
  }

  buildCharts() {
    const combinedHistory = combineStockHistories(store.state.history);
    createLineChart('#line-chart', parseStockPrices(combinedHistory));
    createPieChart('#pie-chart', parsePieGraph(store.state.company));
  }
  createElements() {
    const btns = document.getElementsByClassName('plus-btn');
    for (const btn of btns) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.addShare(btn.id);
        btn.focus();
      });
    }
    const btnsM = document.getElementsByClassName('minus-btn');
    for (const btn of btnsM) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.minusShare(btn.id);
      });
    }
  }

  render() {
    const {company} = store.state;
    const companyList = Object.keys(company);
    let i= 0;
    for (const li of this.element) {
      li.innerHTML = `${company[companyList[i]].shares}`;
      i++;
    }
  }
}
