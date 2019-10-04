
import symbols from './stocksymbols.json';

export const autocomplete = (e) => {
  const input = e.target.value;
  const minChars = 0;
  const list = document.getElementById('autolist');
  if (input.length < minChars) {
    return;
  } else {
    list.innerHTML = '';
    symbols.forEach(function(symbol) {
      if (list.children.length > 30) {
        return;
      }
      if (
        symbol.Symbol
            .slice(0, input.length)
            .includes(input.toUpperCase())
      ) {
        const option = document.createElement('option');
        option.value = symbol.Symbol;
        option.innerHTML = symbol['Company Name'];
        list.appendChild(option);
      }
    });
  }
};

export const parseStockPrices = (stockData) => {
  const prices = [];
  for (let i = 0; i < stockData.length; i++) {
    const day = stockData[i];
    const parsedStockDay = {
      date: new Date(day.date),
      high: day.high,
      low: day.low,
      open: day.open,
      close: day.close,
      volume: day.volume,
    };
    prices.push(parsedStockDay);
  }
  return prices;
};


