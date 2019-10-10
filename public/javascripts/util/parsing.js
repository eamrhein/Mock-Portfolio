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

export const parsePieGraph = (data) => {
  const res = [];
  Object.values(data).forEach((value) => {
    const stockHistory = store.state.history[value.info.symbol];
    const lastDate = stockHistory.length - 1;
    res.push({
      sym: value.info.companyName,
      value: parseInt(value.shares * stockHistory[lastDate].close),
      name: value.info.companyName,
    });
  });
  return res;
};

