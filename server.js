// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/readme", (request, response) => {
  response.sendFile(__dirname + '/README.md');
});

app.get("/functional", (request, response) => {
  response.sendFile(__dirname + '/functional_drills.md');
});


app.get("/drills", (request, response) => {
  response.sendFile(__dirname + '/drills.txt');
});


app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
// setup a listener for answers
app.post("/answers", function (request, response) {
  // set request.drillNumber
  // set request.userId
  // set request.timestamp
  // 
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
let dreams = [
  "Introduce the rudiments of programming",
  "Condition experience with comparing and transforming expressions, working with data",
  "Working with data types",
  "Get lots of experience working with booleans, strings, numbers, arrays, and objects",
  "Composing procedures to model real-word processes and procedures"
];

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
