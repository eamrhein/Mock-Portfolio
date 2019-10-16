// creates Date object from api calls;
import store from '../store/index';
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
// combines multiple api queries and sums them;
export const combineStockHistories = (histories) => (
  Object.values(histories).reduce((history) => (
    history.map(((quoteObj) => {
      Object.entries(quoteObj).forEach(([key, val]) => {
        if (key !== 'date') {
          quoteObj[key] = (quoteObj[key] || 0) + val;
        }
      });
      return quoteObj;
    }))
  ))
);

export const parsePieGraph = (company) => {
  const symbols = ['AAPL', 'TSLA', 'MSFT', 'GOOG', 'AMZN'];
  const res = [];
  symbols.forEach((sym) => {
    const stockHistory = store.state.history[sym];
    const lastDate = stockHistory.length - 1;
    stockHistory[lastDate].close;
    res.push((company[sym].shares * stockHistory[lastDate].close).toFixed(2));
  });
  return res;
};

