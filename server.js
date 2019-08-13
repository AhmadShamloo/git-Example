const express = require('express');
const hbs = require('hbs');

const app = new express();

app.get('/',(req,res)=>{
    res.send('سلام');
});

app.listen('3000');

