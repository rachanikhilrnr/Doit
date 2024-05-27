const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: [""],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.json());

const PORT = 5000;

app.listen(PORT,() => {
    console.log(`Server is running in ${PORT}`);
})

app.get("", (req,res) => {
    res.json("WELCOME");
})