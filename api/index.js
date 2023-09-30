const express = require('express');
const app = express();

app.get('/test', (req,res)=> {
    res.json('success');
})

app.post('/transaction', (req, res)=> {
    res.json(req.body)
})

app.listen(4000)