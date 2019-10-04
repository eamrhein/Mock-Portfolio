/* eslint-disable require-jsdoc */
import symbols from './stocksymbols.json';

class Stock {
  constructor(sym, shares) {
    this.sym = sym;
    this.name = symbols
        .find((stock) => stock.Symbol === sym)['Company Name'];
    this.shares = 0;
    this.createLi(sym, name);
  }

  createLi(sym, name) {
    const list = document.getElementById('company-list');
    console.log(list);
    const li = document.createElement('li');
    li.setAttribute('id', this.sym);
    li.appendChild(document.createTextNode(this.name));
    list.appendChild(li);
  }
  plusShare() {
    this.count += 1;
  }
  minuShare() {
    if (this.count === 1) {
      this.count = 0;
    } else {
      this.count -= 1;
    }
  }
}

export default Stock;
