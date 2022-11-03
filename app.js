const csv = require("./csv/csv_json")
node_cj = require("node-csv-json")
const crypto = require("crypto")


const fs = require("fs")




node_cj({
    input: csv,
    output: "output.json"
  }, function(err, result){
    if(err) {
      console.error(err);
    }else {
      console.log("done")
    }
  });

  const json = fs.readFileSync("output.json","utf-8")
 
  



  function sha256(content) {  
    return crypto.createHash('sha256').update(content).digest('hex')
  }

 const createHash =  sha256(json)

 let jsonNft = JSON.parse(json);
 
  



 
 
  

jsonNft.forEach(nft => {
  nft.mechanic_boot = `${createHash}`;
});



let jsonString = JSON.stringify(jsonNft)


fs.writeFileSync("./updatedjson",`${jsonString}`)

const { Parser } = require('json2csv');

let myData = fs.readFileSync("updatedjson","utf-8")
// console.log(myData)

myData = JSON.parse(myData);
 
const opts = { myData };

try {
  const parser = new Parser();
  const csv = parser.parse(myData,opts);
  console.log(csv)
} catch (err) {
  console.error(err);
}

fs.writeFileSync("./finalcsv",`${csv}`)













   

  