
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;
var pets = require('./routes/pets');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
//link pets
app.use('/pets', pets);


app.listen(port, function(){
    console.log('Running on port: ', port);
});