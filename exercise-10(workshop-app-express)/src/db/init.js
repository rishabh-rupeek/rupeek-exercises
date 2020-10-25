const mongoose = require('mongoose');
const {seed} = require('./seed');

// creating the model
require('../models/workshop');

const uri='mongodb://localhost:27017/workshops-app';

mongoose.set( 'useFindAndModify', false );
mongoose.set( 'returnOriginal', false );

mongoose.connect(uri,{useNewUrlParser:true});

mongoose.connect.on('open', ()=>{
    console.log('connected to db');
    
    //load data
    seed();
});

mongoose.connection.on('error',err=>{
    console.error(err.message);
    process.exit();
});