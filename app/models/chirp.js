//Dependencies

//Call on the capatalized Sequelize 
//This may be confusing but here Sequelize (capital) references the standard library

var Sequelize = require("sequelize");
//call on the connection.js sequelize we made above this file
var sequelize = require("../config/connection.js")

//NOW WE HAVE A CONNECTION

//Create a "Chirp" model that matches with the database layout
var Chirp = sequelize.define("chirp", {
author: Sequelize.STRING,
body: Sequelize.STRING,
created_at: Sequelize.DATE
})

//Sync this with the database
Chirp.sync();

//Makes the Chirp Model avaliable for other files (will also create a table)
module.exports = Chirp;
