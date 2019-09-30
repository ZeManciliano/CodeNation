const fs = require('fs');

let rawdata = fs.readFileSync('resposta.json');
let resposta = JSON.parse(rawdata);
console.log(resposta);

