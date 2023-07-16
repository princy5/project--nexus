const express = require("express");
const app = express();


app.use(express.json());   //basic environment which we will use


// Route Imports
const product = require("./routes/productRoute");


app.use("/api/v1", product);







module.exports = app;
