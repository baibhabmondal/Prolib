const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const elasticsearch= require('elasticsearch');
const index = require('./routes/index');
const db = require('./db/model');
// const serveStatic = require("serve-static");
const app = express();
const port = process.env.PORT || 3000;
// const client = new elasticsearch.Client({
//     host: '127.0.0.1:9200',
//     log: 'error'
//  });
//  client.ping({ requestTimeout: 30000 }, function(error) {
// 	 if (error) {
// 			 console.error('elasticsearch cluster is down!');
// 	 } else {
// 			 console.log('Everything is ok');
// 	 }
// });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});
app.use('/', index);
mongoose.connect('mongodb://baibhabmondal:research13@ds141902.mlab.com:41902/research', { useNewUrlParser: true }).then(function(data){
	console.log("database set up")
}).catch(function(err) {
	console.log(err)
});

// app.use(serveStatic(path.join(__dirname, 'dist')));
// app.use('/', express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.get('/search', function (req, res){

// let body = {
//       size: 100,
//       from: 0,
//       query: {
//         match: {
//                 title: {
//                     query: req.query['q'],
//                     fuzziness: 4
//                 }
//             }
//         }
//     }
//     client.search({index:'research', body:body, type:'title'})
//   .then(results => {
//           res.send(results.hits.hits);

//   })
//   .catch(err=>{
//     console.log(err)
//     res.send([]);
//   });

// })
app.listen(port,function(){
	console.log("Listening to port " + port);
});
