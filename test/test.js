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
