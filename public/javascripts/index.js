import stockList from './stocksymbols.json';
import store from './store/index.js';
import {fetchAllHist, fetchAllInfo, getQuotes} from './util/api-calls';
// Load up components
import Portfolio from './components/portfolio';
import StockTicker from './components/stockticker';

export const stocks = [
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

document.addEventListener('DOMContentLoaded', (e) => {
  // DEFALT SETTINGS
  store.dispatch('fetchAllStockSymbols', stockList);
  fetchAllHist(stocks)
      .then((history) => {
        store.dispatch('fetchAllhistory', history);
      })
      .then(() => {
        fetchAllInfo(stocks)
            .then((info) => {
              store.dispatch('fetchAllinfo', info);
            })
            .then(() => {
              getQuotes(stocks).then((data) => {
                store.dispatch('updateTicker', data);
                const porfolio = new Portfolio();
                const ticker = new StockTicker();
                porfolio.render();
                ticker.render();
                ticker.updateTicker();
              });
            });
      });
});
