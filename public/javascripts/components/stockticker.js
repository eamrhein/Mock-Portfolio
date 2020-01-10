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
    const ticker = store.state;
    ticker.forEach((stock, i) => {
      const observer = new MutationObserver(() => {
        this.element[i].classList.add('changed');
        setTimeout(() => {
          this.element[i].classList.remove('changed');
        }, 1500);
      },
      );
      observer.observe(this.element[i], {childList: true});
      const content = `
        <span class=${stock.diff > 0 ? '"green"' : '"red"'}>
          <span class="price-item">${stock.symbol}</span>
          <span class="price-item">${stock.price}</span>
          <span class="price-item">${stock.diff}</span>
        </span>`;
      if (this.element[i].innerHTML !== content) {
        this.element[i].innerHTML = content;
      }
    });
  }
};
