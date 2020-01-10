/* eslint-disable require-jsdoc */
const apikeys = require('./apikey');

export async function fetchAllHist(syms) {
  try {
    const history = await Promise.all(
        syms.map(async (sym) => await (await
        fetch(`https://cloud.iexapis.com/stable/stock/${sym.sym}/chart/1y?token=${apikeys.iexkey}&chartInterval=24`)).json()),
    );
    const result = {};
    syms.forEach((sym, i) => {
      result[sym.sym] = history[i];
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export async function fetchAllInfo(syms) {
  try {
    const info = await Promise.all(
        syms.map(async (sym) => await (await
        fetch(`https://cloud.iexapis.com/stable/stock/${sym.sym}/company?token=${apikeys.iexkey}`)).json()),
    );
    const res = {};
    syms.forEach((sym, i) => {
      res[sym.sym] = {
        shares: sym.shares,
        info: info[i],
      };
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}
export async function getQuotes(syms) {
  try 
    const info = await Promise.all(
        syms.map(async (sym) => await (await
        fetch(`https://cloud.iexapis.com/stable/stock/${sym.sym}/quote?token=${apikeys.iexkey}`)).json())
    );
    const res = [];
    info.forEach((item) => {
      res.push({
        symbol: item.symbol,
        price: item.latestPrice,
        diff: item.change,
      });
    });
    return res;
  catch (err) {
    console.log(err);
  }
}
export async function fetchHist(sym) {
  const hist = await (fetch(`https://cloud.iexapis.com/stable/stock/${sym.sym}/chart/2y?token=${apikeys.iexkey}&chartInterval=14`)).json();
  const res = {};
  res[sym.sym] = hist;
  return res;
}

export async function fetchCompanyInfo(sym) {
  const info = await (fetch(`https://cloud.iexapis.com/stable/stock/${sym}/company?token=${apikeys.iexkey}`)).json();
  const res = {};
  res[sym.sym] = info;
  return res;
};

