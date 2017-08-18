var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

console.log('pets route is connected');

router.post('/', function(req, res) {
    var newOwner = req.body;
    console.log('pets post was hit!');
    // Add an INSERT query
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            //when connecting to database failed
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            // when connecting to database worked aka HAPPYPATH!
            client.query('INSERT INTO owners (first_name, last_name) VALUES ($1, $2);', [newOwner.firstName, newOwner.lastName], function(errorMakingQuery, result) {
                done(); //needed
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
        }
    });
});
module.exports = router;