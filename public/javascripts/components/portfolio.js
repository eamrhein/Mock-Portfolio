/* eslint-disable require-jsdoc */
import Component from '../lib/component.js';
import store from '../store/index.js';
import LineChart from './linechart';
import PieChart from './piechart';
import BarChart from './barchart';

export default class Portfolio extends Component {
  constructor() {
    super({
      store: store,
      element: document.getElementsByClassName('sharesN'),
    });
    this.createElements();
    this.buildCharts();
    this.updateCharts = this.updateCharts.bind(this);
  }

  updateShares(sym, num) {
    store.dispatch('updateShares', {
      sym: sym,
      num: num,
    });
  }
  updateCharts() {
    this.pieChart.update();
    this.lineChart.update();
    this.barChart.update();
  }
  buildCharts() {
    this.lineChart = new LineChart('line-chart-cv');
    this.pieChart = new PieChart('pie-chart-cv');
    this.barChart = new BarChart('bar-chart-cv');
  }
  createElements() {
    for (const input of this.element) {
      input.addEventListener('change', (e) => {
        this.updateShares(input.id, input.value);
        this.updateCharts();
      });
    }
  }

  render() {
    const {company} = store.state;
    const companyList = Object.keys(company);
    let i = 0;
    for (const input of this.element) {
      input.setAttribute('value', company[companyList[i]].shares);
      i++;
    }
  }
}
