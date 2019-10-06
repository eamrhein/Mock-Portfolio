
import {autocomplete} from './dom';
import stockList from './stocksymbols.json';
import Portfolio from './portfolio';

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
      shares: 30,
      name: 'Google Inc.',
    },
    {
      sym: 'MSFT',
      shares: 20,
      name: 'Microsoft Corporation',
    },
    {
      sym: 'AAPL',
      shares: 40,
      name: 'APPLE Inc.',
    },
    {
      sym: 'AMZN',
      shares: 10,
      name: 'Amazon.com Inc.',
    },
  ];
  const initialStocks = new Portfolio(stocks);
  // INPUT EVENTS
  const search = document.getElementById('search-box');
  autocomplete(search, stockList);

  const button = document.getElementById('add-stock');
  button.addEventListener('click', (e) => {
    if (stocks.length > 6) {
      alert('can only add up to 6 stocks');
    }
    if (stocks.every((stock) => stock.key !== search.value)) {
      console.log(b);
    }
  });
});
