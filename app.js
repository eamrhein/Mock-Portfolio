const express = require('express');
const firebase = require("firebase-admin");
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const symbols = require('./stocksymbols')
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const serviceAccount = require('./serviceAccountKey.json');



firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://mock-portfolio.firebaseio.com"
});\


const db = firebase.firestore();
const symbolsRef = db.collection('Market').doc('Symbols');
app.use(express.static('public'))

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});


app.get('/companyinfo/:sym', (req, res) => {
  fetch(`https://cloud.iexapis.com/stable/stock/${req.params.sym}/company?token=pk_9c1ed2a08a2c4af2be14db7a6c97d602`)
    .then((data) => {
      return data.text();
    })
    .then((body) => {
      let result = JSON.parse(body)
      res.json(result);
    })

})

app.get('/historicaldata/:sym', (req, res) => {
  fetch(`https://cloud.iexapis.com/stable/stock/${req.params.sym}/chart/2y?token=pk_9c1ed2a08a2c4af2be14db7a6c97d602&chartInterval=7`)
    .then((data) => {
      return data.text();
    })
    .then((body) => {
      let result = JSON.parse(body)
      res.json(result);
    })
})



// // create a search route
// app.get('/search', (request, response) => {
//   fetch(`http://openlibrary.org/search.json?q=${request.query.string}`)
//   .then((response) => {
//       return response.text();
//   }).then((body) => {
//       let results = JSON.parse(body)
//       console.log(results)
//       response.send(results)
//     });
// });

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
