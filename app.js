const csv = require("./csv/csv_json")
node_cj = require("node-csv-json")
const crypto = require("crypto")


const fs = require("fs")




// node_cj({
//     input: csv,
//     output: "output.json"
//   }, function(err, result){
//     if(err) {
//       console.error(err);
//     }else {
//       console.log("done")
//     }
//   });

  const json = fs.readFileSync("output.json","utf-8")
 
  



  function sha256(content) {  
    return crypto.createHash('sha256').update(content).digest('hex')
  }

 const ashCreates =  sha256(json)

 let arr = JSON.parse(json);
 
  



 
 
  

arr.forEach(nft => {
  nft.mechanic_boot = `${ashCreates}`;
});










   

  