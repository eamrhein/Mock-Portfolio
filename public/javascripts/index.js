import {addCompanyInfo, get2yearCompanyPrices} from './api-calls';
import {autocomplete, parseStockPrices} from './parsing';
import stockList from './stocksymbols.json';
import {createLineChart} from './linechart';
import {createPieChart} from './piechart';
import Stock from './stock_table';

document.addEventListener('DOMContentLoaded', (e) => {
  // DEFALT SETTINGS
  const stocks = [
    {'TSLA': 10},
    {'GOOG': 10},
    {'MSFT': 10},
    {'AMZN': 50},
    {'AAPL': 20},
  ];
  // INPUT EVENTS
  const search = document.getElementById('search-box');
  autocomplete(search, stockList);

  const button = document.getElementById('add-stock');
  button.addEventListener('click', (e) => {
    if (stocks.every((stock) => stock.key !== search.value)) {
      const b = new Stock(search.value);
      console.log(b);
    }
  });
  // addCompanyInfo('AAPL')
  //     .then((res) => {
  //       const sym = document.getElementById('sym');
  //       const cName = document.getElementById('cName');
  //       const web = document.getElementById('web');
  //       const ceo = document.getElementById('ceo');
  //       const sec = document.getElementById('sec');
  //       const emp = document.getElementById('emp');
  //       const add = document.getElementById('add');
  //       const st = document.getElementById('st');
  //       const cty = document.getElementById('cty');

  //       sym.innerHTML = res.symbol;
  //       cName.innerHTML = res.companyName;
  //       web.innerHTML = res.website;
  //       web.href = res.website;
  //       ceo.innerHTML = res.CEO;
  //       sec.innerHTML = res.sector;
  //       emp.innerHTML = res.employees;
  //       add.innerHTML = res.address;
  //       st.innerHTML = res.state;
  //       cty.innerHTML = res.city;
  //     });
  get2yearCompanyPrices('AAPL')
      .then((res) => {
        createLineChart('#line-chart', parseStockPrices(res));
      });
  createPieChart('#pie-graph');
});
