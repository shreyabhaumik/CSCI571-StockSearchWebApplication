"use strict";
const express = require('express');
const fetch = require('node-fetch');
let router = express.Router();
var timestamp;
let getTimestamp;

router.route('/:ticker')
.get((req,res) => {
    // https://api.tiingo.com/iex?tickers=AAPL&token=12PrIvA32tEmYtEmpToKeN23
    const url = 'https://api.tiingo.com/iex/?tickers='+req.params.ticker+'&token=f8e0228db0b5122cf7f09c0f4a74a8f017a8db5c';
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