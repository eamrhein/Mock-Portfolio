const express = require('express');
const compression = require('compression');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// this is a comment
app.use(compression());
app.use(express.static('public'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});
