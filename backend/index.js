//required libaries
const { Sequelize, DataTypes } = require("sequelize");
const stylist = require("./models/stylist.js");
const express = require("express");
const path = require("path");


//helpers

const frontendDir = "../frontend/";

//database connector: sequelize 

const sequelize = new Sequelize('sqlite::memory:');


  
 const test = async() => {
    const stacia = stylist( sequelize, DataTypes ).build({ name: "Stacia"})
    await stacia.save();
  
    const stylists = await stylist.findAll();
console.log(stylists);
  }

  test();
  

//webserver: express

const app = express();

const port = 3000

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, `${frontendDir}pages/index.html`));


});

app.get("/stylist", (req, res) => {
    res.sendFile(path.join(__dirname, `${frontendDir}pages/stylist.html`));


});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, `${frontendDir}pages/contact.html`));


});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);

    
});

