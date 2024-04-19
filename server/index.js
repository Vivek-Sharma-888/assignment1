const express = require('express');
const route = require('./routes/route');
require('dotenv').config();
const cors =require('cors')
const app = express();
const PORT = 8000 ;

app.use(cors())
app.use(express.json())
app.use(route)
app.listen(PORT,()=>{
    console.log("I AM STARTED")
})

