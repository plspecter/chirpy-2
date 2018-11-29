
//Dependencies
//Get the chirp model we created in models > chirp.js

var Chirp = require("../models/chirp.js")

//Routes

//=============

module.exports = function (app) {

    //Get all chirps
    app.get("/api/all", function (req, res) {

        //Finding all chirps, and then returning them to the user as JSON
        // Sequelize queries are asynchronous, which helps with perceived speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
        Chirp.findAll({}).then(function (results) {
            //results are avaliable to us inside the .then
            res.json(results);

        });

    });

    //Add a chirp
    app.post("/api/new", function (req, res) {
        console.log("Chirp Data:");
        console.log(req.body);

        Chirp.create({
        author: req.body.author,
        body: req.body.body,
        created_art: req.body.created_at
        }).then(function(results) {
            //'results' here would be the newly created chirp
            res.end();
        });
    });

};