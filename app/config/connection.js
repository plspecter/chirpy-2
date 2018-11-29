// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************


//call on our dependency.. sequelize

var Sequelize = require("sequelize");

//Create mySQL connection using sequelize, the empty string in the third argument spot is our password
var sequelize = new Sequelize("sequelize_chirpy", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

//export the connection for other files to use
module.exports = sequelize;