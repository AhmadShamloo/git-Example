const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = new express();

app.set('view engine','hbs');

app.use(express.static(path.join(__dirname,'public')));
// app.use((req,res,next)=>{
//     res.render('Error');
// });
const port=3000;

app.get('/',(req,res)=>{
    res.send('سلام');
});
// app.get('/api/sayHello',(req,res)=>{
//     res.render('hello.html');
// })

app.listen(port,()=>{
    console.log(`server is runing at ${port}.`);
});

