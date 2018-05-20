const fs = require('fs');
const axios = require('axios');
var postData = {
  "Test.sol": fs.readFileSync("./Test.sol").toString().trim()
};
let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};
axios.post("http://localhost:8000", postData, axiosConfig)
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
