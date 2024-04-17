const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 8000 ;

app.listen(PORT,()=>{
    console.log("I AM STARTED")
})