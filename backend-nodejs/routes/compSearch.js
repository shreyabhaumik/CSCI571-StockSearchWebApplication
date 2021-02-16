"use strict";
const express = require('express');
const fetch = require('node-fetch');
let router = express.Router();

router.route('/:inputTxt')
.get((req,res) => {
    // https://api.tiingo.com/tiingo/daily/AAPL?token=12PrIvA32tEmYtEmpToKeN23
    const url = 'https://api.tiingo.com/tiingo/utilities/search?query='+req.params.inputTxt+'&token=8b240d587bf6ff807b43b63b42057969cf6db626';
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