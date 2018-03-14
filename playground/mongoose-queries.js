const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

const id = '5aa3f96dd17d220461acdf2e'

// console.log(ObjectID.isValid(id))

// User.find().then(users => {
//     console.log(users)
// })

// User.findOne({
//     _id: id
// }).then(user => {
//     console.log(user)
// })

User.findById(id).then(user => {
    console.log(user)
}).catch(err => {
    console.log('Error Occured', err)
})