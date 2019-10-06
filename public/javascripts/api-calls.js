/* eslint-disable require-jsdoc */

const apikeys = require('./apikey');

export async function fetchdata(syms) {
  try {
    const history = await Promise.all(
        syms.map(async (sym) => await (await
        fetch(`https://cloud.iexapis.com/stable/stock/${sym.sym}/chart/2y?token=${apikeys.iexkey}&chartInterval=14`)).json())
    );
    return history;
  } catch (err) {
    console.log(err);
  }
};

export const addCompanyInfo = (sym) => {
  return fetch(`https://cloud.iexapis.com/stable/stock/${sym}/company?token=${apikeys.iexkey}`)
      .then((res) => {
        return res.json();
      });
};

