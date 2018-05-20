var fs = require('fs')
var express = require('express')
var solc = require('solc')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(helmet());

app.post('/', function(req, res, next) {
  console.log("COMPILING",req.body)
  var compiled = solc.compile({sources: req.body}, 1)
  res.json(compiled)
});

app.get('/',function(req, res, next) {
  res.send(fs.readFileSync("README.md").toString())
});

app.listen(8080, () => console.log('[*] express is up and listing on 8080'))
