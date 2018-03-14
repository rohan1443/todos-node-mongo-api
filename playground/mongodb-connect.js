// const MongoClient = require('mongodb').MongoClient
import { MongoClient, ObjectID } from 'mongodb'

MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, client) => {
  if (err) {
    return console.log('error occured')
  }
  console.log('Connected Successfully to the MongoDB Server')

  //db reference
  const db = client.db('TodosApp')

//finding a collection
// db.collection('Todos').find({completed: false}).toArray().then((result) => {
//   console.log(JSON.stringify(result, undefined, 2))
// }, (err) => {
//   console.log('error occured', err)
// })

  // //creating a collection and inserting a document
  // db.collection('Todos').insertOne({
  //   text: 'my first enrty',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Error trying to create a collection')
  //   }

  //   console.log(JSON.stringify(result.ops))
  // })

  //client.close()
})