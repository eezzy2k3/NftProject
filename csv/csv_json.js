const fs = require("fs")

const csv = fs.readFileSync("./csv/mechanic_boot.csv","utf-8")


module.exports = csv