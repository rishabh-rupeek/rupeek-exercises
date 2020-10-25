// intialize db
require('./db/init');

const express = require('express');
const path= require('path');

const apiWorkshopsRouter = require('./routes/api/workshops');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/workshops',apiWorkshopsRouter);

const port = process.env.PORT || 3000;

app.listen(port, function(err){
    if(err){
        console.log(err.message);
        return;
    }
    console.log(`Server running on port ${port}`);
})