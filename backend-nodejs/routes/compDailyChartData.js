"use strict";
const express = require('express');
const fetch = require('node-fetch');
let router = express.Router();

router.route('/:ticker/:timestamp')
.get((req,res) => {
    // https://api.tiingo.com/iex/AAPL/prices?startDate=2019-09-10&resampleFreq=4min&token=12PrIvA32tEmYtEmpToKeN23
    // "https://api.tiingo.com/iex/"+ticker+"/prices?startDate="+tempdate+"&resampleFreq=4min&columns=open,high,low,close,volume&token="+token
    const url = 'https://api.tiingo.com/iex/'+req.params.ticker+'/prices?startDate='+req.params.timestamp+'&resampleFreq=4min&columns=open,high,low,close,volume&token=f8e0228db0b5122cf7f09c0f4a74a8f017a8db5c';
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