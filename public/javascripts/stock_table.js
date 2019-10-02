/* eslint-disable require-jsdoc */
class Stock {
  constructor(sym, companyInfo, stockHistory) {
    this.sym = sym;
    this.companyInfo = companyInfo;
    this.stockHistory = stockHistory;
    this.shares = 0;
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

  getShares() {

  }

  getCurrentValue() {
    
  }
}

export default Stock;
