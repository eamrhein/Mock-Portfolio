
const apikeys = require('./apikey');
export const addCompanyInfo = (sym) => {
  return fetch(`https://cloud.iexapis.com/stable/stock/${sym}/company?token=${apikeys.iexkey}`)
      .then((res) => {
        return res.json();
      });
};

export const get2yearCompanyPrices = (sym) => {
  return fetch(`https://cloud.iexapis.com/stable/stock/${sym}/chart/2y?token=${apikeys.iexkey}&chartInterval=10`)
      .then((res) => {
        return res.json();
      });
};
