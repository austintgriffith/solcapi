# solcapi

Solidity Compiler API #BUIDLt for Solidity Golf


POST an object to be passed to the solc compiler to http://18.217.190.20:8080:
```
{
  "Test.sol": "YOUR SOLIDITY CODE HERE"
}
```


# running your own

## docker
```
cd docker
./build.sh
./run.sh
```
(brings up a container listening for POST requests on port 8000)

## raw node (no docker)
```
cd src
npm i
npm start
```
(listens for POST requests on port 8080)

## usage

### axios
```
const fs = require('fs');
const axios = require('axios');
var postData = {
  "Test.sol": fs.readFileSync("./Test.sol").toString()
};
axios.post("http://18.217.190.20:8080/", postData)
.then((res) => {
  try {
    console.log(res.data);
  } catch (e) {
    console.log(e)
    console.log(res.data)
  }
})
.catch((err) => {
  console.log("AXIOS ERROR: ", err);
})
```

(this repo is similar to https://github.com/smartcontractkit/solc-api from Steve Ellis)
