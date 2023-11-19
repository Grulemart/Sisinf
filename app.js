const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cons = require('consolidate');
const dust = require('dustjs-helpers')
const pg = require('pg');

const app = express();
const port = 3000;

const dbConfig = {
  user: 'postgres',
  password: 'asdf',
  host: 'localhost',
  port: 5432,
  database: 'sisinf_grupo_b06',
};

const connectionString = `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Define a route to serve the HTML page
app.get('/', function(req, res) {
  res.render('index');
  //res.sendFile(path.join(__dirname, 'test.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});