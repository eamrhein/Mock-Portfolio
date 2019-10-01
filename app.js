const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const apikeys = require('./apikey');
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


app.get('/companyinfo/:sym', (req, res) => {
  fetch(`https://cloud.iexapis.com/stable/stock/${req.params.sym}/company?token=${apikeys.iexkey}`)
      .then((data) => {
        return data.text();
      })
      .then((body) => {
        const result = JSON.parse(body);
        res.json(result);
      });
});

app.get('/historicaldata/:sym', (req, res) => {
  fetch(`https://cloud.iexapis.com/stable/stock/${req.params.sym}/chart/2y?token=${apikeys.iexkey}&chartInterval=7`)
      .then((data) => {
        return data.text();
      })
      .then((body) => {
        const result = JSON.parse(body);
        res.json(result);
      });
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});
