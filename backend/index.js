//required libaries
const { Sequelize, DataTypes } = require("sequelize");
const { Stylist, appointment } = require("../models");
const express = require("express");
const path = require("path");
const cors = require("cors");
const req = require("express/lib/request");
require('dotenv').config()


//helpers

const frontendDir = "../frontend";

//database connector: sequelize 

const sequelize = new Sequelize(process.env.CONNECTION_STRING,{
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
  }  
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  
//webserver: express

const app = express();

app.use(express.static(path.join(__dirname, "../frontend")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const port = 3000

const saveAppointment = async (req) => {
    const appmt = await appointment.create(req.body);
    res = await appmt.save();
    console.log (res);
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/pages/index.html"));


});

app.get("/stylist", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/pages/stylist.html"));


});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/pages/contact.html"));


});

app.get("/booking", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/pages/booking.html"));

});

app.post("/booking", (req, res) => {
    console.log(req.body)
    saveAppointment(req)
res.send({response: `You appoint has been scheduled for ${req.body.datetime}`})

});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);

    
});

