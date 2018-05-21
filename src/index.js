var fs = require('fs')
var express = require('express')
var solc = require('solc')
var bodyParser = require('body-parser')
var https = require('https');
var helmet = require('helmet');

const readmeText = fs.readFileSync("readme.html").toString()

const options = {
    cert: fs.readFileSync('./fullchain.pem'),
    key: fs.readFileSync('./privkey.pem')
};

var app = express()

app.use(require('helmet')());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(helmet());

app.post('/', function(req, res, next) {
  console.log("COMPILING",req.body)
  let optimize = req.headers.optimize
  if(typeof optimize == "undefined"){optimize=1}
  console.log("optimize",optimize)
  var compiled = solc.compile({sources: req.body}, optimize)
  for(let contract in compiled.contracts){
    console.log("Cleaning contract output for ",contract)
    if(!req.headers.verbose){
      delete compiled.contracts[contract].assembly
      delete compiled.contracts[contract].opcodes
    }
  }
  res.json(compiled)
});

app.get('/',function(req, res, next) {
  console.log('/',req.headers)
  if(req.headers.host=="solc.io"){
    res.writeHead(302, {
      'Location': '//solidity.readthedocs.io/en/v0.4.21/installing-solidity.html'
    });
    res.end();
  }else{
    res.send(readmeText)
  }
});

app.listen(8080, () => console.log('listening on 8080 and 8443'))
https.createServer(options, app).listen(8443)
