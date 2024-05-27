const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const studentModel = require('./models/students');
const app = express();
app.use(cors({
    origin: [""],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.json());

const PORT = 5000;

const connect = mongoose.connect("mongodb+srv://21955a1206:nikhil1528@project.cyg4qu7.mongodb.net/School?retryWrites=true&w=majority&appName=Project")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

app.listen(PORT,() => {
    console.log(`Server is running in ${PORT}`);
})

app.get("", (req,res) => {
    res.json("WELCOME");
})

app.get("/students", (req,res) => {
    studentModel.find({})
    .then(stds => res.json(stds))
    .catch(err => res.json(err))
})