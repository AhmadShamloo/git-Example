const express = require('express');
const hbs = require('hbs');

const app = new express();

const port=3000;

app.get('/',(req,res)=>{
    res.send('سلام');
});

app.listen(port,()=>{
    console.log(`server is runing at ${port}.`);
});

