"use strict";
const express = require('express');
const fetch = require('node-fetch');
let router = express.Router();

const apiKey = 'd69fa18bf2fc45e688a2007f015cdcdc';

router.route('/:ticker')
.get((req,res) => {
    // https://newsapi.org/v2/everything?apiKey=12PrIvA32tEmYtEmpToKeN23&q=app
    const url = 'https://newsapi.org/v2/everything?'+'q='+req.params.ticker+'&apiKey='+apiKey;
    var headers = {
        'Content-Type': 'application/json'
    };
    fetch(url,{ method: 'GET', headers: headers})
    .then(res => {return res.json();})
    .then(data => {
        // Do something with the returned data.
          console.log(data);
          res.json(data);
    });
});

module.exports = router;