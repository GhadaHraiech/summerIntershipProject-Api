const express= require('express');
const app = express ();
const mongoose= require('./database/mongoose');


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');



    // Pass to next layer of middleware
    next();
});
// example of middleware
app.use(express.json());

app.listen(3000 , function(){console.log("server started on port 3000 great ")});
