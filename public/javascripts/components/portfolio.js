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
      element: document.querySelector('#stocklist'),
    });
  }
  addShare(sym) {
    store.dispatch('addShare', sym);
    d3.select('#pie-chart').remove();
    this.buildCharts();
  }

  minusShare(sym) {
    store.dispatch('minusShare', sym);
    d3.select('#pie-chart').select('svg').remove();
    this.buildCharts();
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
    let string = '';
    const companyList = Object.keys(company)
        .map((key) => {
          return (
            `
                <li>
                  <div>
                    <h4>${company[key].info.companyName}</h4>
                    <li>${company[key].shares } Shares</li>
                    <button
                      id=${key}
                      class='plus-btn'
                    >
                     +
                    </button>
                    <button
                      id=${key}
                      class='minus-btn'
                    >
                     -
                    </button>
                  </div>
                </li>
            `
          );
        });
    companyList.forEach((item) => {
      string += item;
    });
    this.element.innerHTML = string;
    this.createElements();
    this.buildCharts();
  }
}
