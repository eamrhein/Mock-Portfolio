/* eslint-disable require-jsdoc */
import Component from '../lib/component.js';
import store from '../store/index.js';
import {getQuotes} from '../util/api-calls';
import {stocks} from '../index';
export default class StockTicker extends Component {
  constructor() {
    super({
      store: store,
      element: document.querySelectorAll('.price'),
    });
  }
  updateTicker() {
    setInterval((e) => {
      getQuotes(stocks).then((data) => {

        store.dispatch('updateTicker', data);
      });
    }, 9000);
  }
  render() {
    const {ticker} = store.state;
    ticker.forEach((stock, i) => {
      this.element[i].innerHTML= `<span class=${stock.diff > 0 ? 'green' : 'red'}>${stock.symbol} ${stock.price} ${stock.diff}</span>`;
    });
  }
};
