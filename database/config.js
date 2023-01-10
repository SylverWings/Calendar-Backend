const mongoose = require('mongoose');

const db = () => mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connection stablish")
    })
    .catch((error)=>{
        console.log("Error connecting to MongoDB", error)
    });

    module.exports = db;