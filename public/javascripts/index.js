import stockList from './stocksymbols.json';
import store from './store/index.js';
import {fetchAllHist, fetchAllInfo} from './util/api-calls';
import {autocomplete} from './util/dom';
// Load up components
import Portfolio from './components/portfolio';

document.addEventListener('DOMContentLoaded', (e) => {
  // DEFALT SETTINGS
  const stocks = [
    {
      sym: 'TSLA',
      shares: 10,
      name: 'Tesla Motors, Inc.',
    },
    {
      sym: 'GOOG',
      shares: 4,
      name: 'Google Inc.',
    },
    {
      sym: 'MSFT',
      shares: 24,
      name: 'Microsoft Corporation',
    },
    {
      sym: 'AAPL',
      shares: 9,
      name: 'APPLE Inc.',
    },
    {
      sym: 'AMZN',
      shares: 3,
      name: 'Amazon.com Inc.',
    },
  ];
  store.dispatch('fetchAllStockSymbols', stockList);
  fetchAllHist(stocks).then((history) => {
    store.dispatch('fetchAllhistory', history);
  }).then(() => {
    fetchAllInfo(stocks).then((info) => {
      store.dispatch('fetchAllinfo', info);
    }).then(() => {
      const porfolio = new Portfolio();
      porfolio.render();
    });
  }
  );
});

