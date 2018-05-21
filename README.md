# [solcapi](https://github.com/austintgriffith/solcapi)

Solidity Compiler API #BUIDLt for Solidity Golf


POST solidity code to https://api.solc.io
```
{
  "Test.sol": "YOUR SOLIDITY CODE HERE"
}
```

------


## usage

### python

```
import http.client

conn = http.client.HTTPConnection("api,solc,io")

payload = "{\n\t\"Test.sol\": \"pragma solidity ^0.4.15;contract Test {function Test() public {}}\"\n}"

headers = {
    'Content-Type': "application/json",
    'Cache-Control': "no-cache"
}

conn.request("POST", "undefined", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```
or
```
import requests

url = "https://api.solc.io"

payload = "{\n\t\"Test.sol\": \"pragma solidity ^0.4.15;contract Test {function Test() public {}}\"\n}"
headers = {
    'Content-Type': "application/json",
    'Cache-Control': "no-cache"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

### javascript

```
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.solc.io',
  headers:
   { 'Cache-Control': 'no-cache',
     'Content-Type': 'application/json'

   },
  body: { 'Test.sol': 'pragma solidity ^0.4.15;contract Test {function Test() public {}}' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});
```
or
```
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.solc.io",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
  },
  "processData": false,
  "data": "{\n\t\"Test.sol\": \"pragma solidity ^0.4.15;contract Test {function Test() public {}}\"\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

### php
```
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.solc.io",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n\t\"Test.sol\": \"pragma solidity ^0.4.15;contract Test {function Test() public {}}\"\n}",
  CURLOPT_HTTPHEADER => array(
    "Cache-Control: no-cache",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```


### curl
```
curl -X POST \
  https://api.solc.io \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"Test.sol": "pragma solidity ^0.4.15;contract Test {function Test() public {}}"
}'
```

### raw
```
POST  HTTP/1.1
Host: api.solc.io
Content-Type: application/json
Cache-Control: no-cache
{
	"Test.sol": "pragma solidity ^0.4.15;contract Test {function Test() public {}}"
}
```

______


## running locally

### docker
```
cd docker
./build.sh
./run.sh
```
(brings up a container listening for POST requests on port 8000)

### raw node (no docker)
```
cd src
npm i
npm start
```
(listens for POST requests on port 8080)



(this repo is similar to https://github.com/smartcontractkit/solc-api from Steve Ellis)
