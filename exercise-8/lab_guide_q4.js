const jsonFile = require('./demo.json');
const key = process.argv[2];

if(jsonFile[key]!==undefined){
    console.log(jsonFile[key]);
}

const newKey = 'key1';
jsonFile[newKey] = 'value1';
console.log(jsonFile);