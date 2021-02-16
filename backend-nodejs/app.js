const express = require('express');
const http =  require('http');
var cors = require('cors');
const compDesc = require('./routes/compDesc');
const compLatestPrice = require('./routes/compLatestPrice');
const compHistoricalData = require('./routes/compHistoricalData');
const compDailyChartData = require('./routes/compDailyChartData');
const compNews = require('./routes/compNews');
const compSearch = require('./routes/compSearch');

const bodyParser=require("body-parser");	//for deploy

const app = express();

const corsOptions={
    "origin": "*"
};
// app.use(cors());
app.use(cors(corsOptions));

app.use("/compdesc",compDesc);
app.use("/complatestprice", compLatestPrice);
app.use("/comphistoricaldata", compHistoricalData);
app.use("/compdailychartdata", compDailyChartData);
app.use("/compnews", compNews);
app.use("/compsearch",compSearch);

//for upload
app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(process.cwd()+"/public/frontend-angular/"));
app.get('*', (req,res) => {
    res.sendFile(process.cwd()+"/public/frontend-angular/")
  });
//upload end

app.listen(process.env.PORT || 3000, (req,res) => {
	console.log("Express API is running at port 3000");
});



module.exports = app;
