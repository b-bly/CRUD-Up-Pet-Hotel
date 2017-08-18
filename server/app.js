var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;
var pets = require('./routes/pets');
var path = require('path');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//link pets
app.use('/pets', pets);


app.listen(port, function() {
    console.log('Running on port: ', port);
});