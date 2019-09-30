const express = require('express');
const firebase = require("firebase-admin");
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const serviceAccount = require('./serviceAccountKey.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://mock-portfolio.firebaseio.com"
});

const db = firebase.firestore();
const ref = db.collection('testCollection').doc('testDocument');


app.use(express.static('public'))

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/test', (req, res) => {
  let getDoc = ref.get()
    .then((doc) => {
      if(!doc.exists) {
        console.log('no doc')
      } else {
        res.json(doc.data())
      }
    })
    .catch((err) => {
      res.json(err)
    })
})

// // create route to get single book by its isbn
// app.get('/books/:isbn', (request, response) => {
//   // make api call using fetch
//   fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${request.params.isbn}&format=json&jscmd=data`)
//   .then((response) => {
//       return response.text();
//   }).then((body) => {
//       let results = JSON.parse(body)
//       console.log(results)   // logs to server
//       response.send(results) // sends to frontend
//     });
// });

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
