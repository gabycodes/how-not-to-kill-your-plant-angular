// var express = require("express");
// var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// var MongoClient = require('mongodb').MongoClient

// var db

// // var db = mongoose.connect("mongodb://localhost:27017/hntkyp", (error, response) => {
// //   if(error) {
// //     console.log({ error });
// //   } else {
// //     console.log(`Connected!`)
// //   }
// // })

// MongoClient.connect('mongodb://localhost:27017/hntkyp', function (err, client) {
//   if (err) throw err

//   db = client.db('hntkyp')

//   app.listen(8080)
//   console.log('Listening on port 8080')

//   // db.collection('plants').find().toArray(function (err, result) {
//   //   if (err) throw err

//   //   console.log(result)
//   // })
// })

// var app = express();

// app.use(bodyParser);
// app.use(bodyParser.json({ limit: '5mb' }));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// })

// // var Schema = mongoose.Schema

// // var plantSchema = new Schema({
// //   id: { type: String },
// //   name: { type: String },
// //   latinName: { type: String },
// //   imgUrl: { type: String },
// //   description: { type: String },
// // }, { versionKey: false });

// // var model = mongoose.model('plant', plantSchema);

// // app.post('/api/save-plant', (req, res) => {
// //   var model = new model(req.body);
// //   if(req.body.mode === 'save') {
// //     model.save((error, data) => {
// //       if(error) {
// //         res.send({ error });
// //       }
// //       else {
// //         res.send({ data: 'Record has been inserted!'})
// //       }
// //     })
// //   } else {
// //     model.findByIdAndUpdate(req.body.id, {
// //       name: req.body.name,
// //       imgUrl: req.body.imgUrl,
// //       latinName: req.body.latinName,
// //       description: req.body.description,
// //     }, (error, data) => {
// //       if(error) {
// //         res.send({ error });
// //       }
// //       else {
// //         res.send({ data: 'Record has been updated!'})
// //       }
// //     })
// //   }
// // });

// // app.post('/api/delete-plant', (req, res) => {
// //   model.remove({ _id: req.body.id });
// //   if(error) {
// //     res.send({ error });
// //   }
// //   else {
// //     res.send({ data: 'Record has been removed!'})
// //   }
// // });

// // app.get('/api/get-plant', (req, res) => {
// //   console.log('trying to get plant...')
// //   model.find({}, (error, data) => {
// //     if(error) {
// //       console.log('error!')
// //       res.send({ error });
// //     }
// //     else {
// //       console.log('Success?', data)
// //       res.send(data)
// //     }
// //   })
// // });

// app.get("/plants", function(req, res) {
//   db.collection("plants").find({}, function(err, docs) {
//     docs.each(function(err, doc) {
//       if(doc) {
//         console.log(doc);
//       }
//       else {
//         res.end();
//       }
//     });
//   });
// });

// // app.listen(8080, () => {
// //   console.log('App listening on port 8080! 💅')
// // })

















// var express = require('express');
// var MongoClient = require('mongodb').MongoClient;

// var app = express();
// var db;

// // app.use(bodyParser);
// // app.use(bodyParser.json({ limit: '5mb' }));
// // app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// })

// // Initialize connection once
// MongoClient.connect("mongodb://localhost:27017", function(err, client) {
//   if(err) throw err;

//   // db = database;
//   db = client.db('hntkyp')

//   // Start the application after the database connection is ready
//   app.listen(8080);
//   console.log("Listening on port 8080");
// });

// // Reuse database object in request handlers
// app.get("/plants", function(req, res) {
//   db.collection("plants").find({}, function(err, docs) {
//     const data = []
//     // res.send('hello')
//     docs.each(function(err, doc) {
//       if(doc) {
//         // data.push(doc)
//         console.log(doc);
//       }
//       else {
//         res.end();
//         // res.render('template') 
//       }
//     });
//     // res.send(docs)
//   });
// });
















const express = require('express')
const app = express()
// const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.listen(8080, () => console.log('server started')
