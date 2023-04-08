const express = require('express');
const app = express();
const port = 3001;
var cors = require('cors');

//cho phép các domain dưới đây có thể thao tác với API của server
const allowlistDomain = ['http://127.0.0.1:5500', 'http://localhost:3000', 'http://127.0.0.1:3000'];
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlistDomain.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } 
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions);
}

app.use(cors(corsOptionsDelegate));

require('./src/routes/users_route')(app);


app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`);
});