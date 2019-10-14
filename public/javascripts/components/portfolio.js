/* eslint-disable require-jsdoc */
import Component from '../lib/component.js';
import store from '../store/index.js';
import LineChart from './linechart';
import PieChart from './piechart';

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
    this.lineChart.update();
    this.pieChart.update();
  }

  minusShare(sym) {
    store.dispatch('minusShare', sym);
    this.pieChart.update();
    this.lineChart.update();
  }

  buildCharts() {
    this.lineChart = new LineChart('line-chart-cv');
    this.pieChart = new PieChart('pie-chart-cv');
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
      li.innerHTML = `${company[companyList[i]].shares} shares`;
      i++;
    }
  }
}
