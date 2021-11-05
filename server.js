const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();

const port = 6000;

app.listen(port, () => {
    console.log(`server runing on port ${port}`)
})