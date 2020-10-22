const http = require('http');
const url = require('url');

const add = (x,y) => x+y;
const subtract = (x,y) => x-y;
const divide = (x,y) => x/y;
const multiply = (x,y) => x*y;

http.createServer(function(req,res){

    var q=url.parse(req.url,true).query;
    console.log(req.url);
    const operation = req.url.substr(1,req.url.indexOf('?')-1);
    console.log(operation);
    const x = parseInt(q.x);
    const y = parseInt(q.y);

    if(operation === 'add'){
        console.log(add(x,y));
    }else if(operation === 'subtract'){
        console.log(subtract(x,y));
    }else if(operation === 'divide'){
        console.log(divide(x,y));
    }else if(operation === 'multiple'){
        console.log(multiply(x,y));
    }
    
    res.end();

}).listen(3000);