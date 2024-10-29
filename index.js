const express = require ('express');
const mongoose = require('mongoose');
const Connect = require('./server/config/database.js');
const db = new Connect();

const app = express();

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
app.get('/', (req,res) => {
    res.send('hello from node API updated')
})

// conection test
mongoose
.connect(
    "mongodb://teste$$:Brunoypatacon31!!@3.15.190.76:27017/"
)
.then(() => {
    console.log('Connected to database!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
})
.catch(()=>{
    console.log("Connection failed!")
    });
        