const express = require('express');
const app = express();
const port = 3001;
var cors = require('cors');
var bodyParser = require('body-parser');
const path = require('path');

// upload File ( Image Only)
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });
app.use('/public/images', express.static('images'));
// 

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

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// Api users, posts, categories
require('./src/routes/users_route')(app);
require('./src/routes/posts_router')(app);
require('./src/routes/categories_router')(app);

// Upload Images API
app.post('/upload', upload.single('image'), (req, res) => {
  res.send({
    "success": 1,
    "file": {
      "url": `http://localhost:3001/public/images/${res.req.file.filename}`,
    }
  });
});
// 
app.get('/fetchUrl', (req, res) => {

  res.send(
    {
      "success": 1,
      "link": req.query.url,
      "meta": {
        
      }
    }
  )
});






app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`);
});