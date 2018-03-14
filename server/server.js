var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var { mongoose } = require('./db/mongoose')
var { Todo } = require('./models/todo')
var { User } = require('./models/user')

app.use(bodyParser.json())

// app.get('/', (req, res) => {
//     res.send('Hello')
// })

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then(doc => {
        res.status(200).send(doc)
    }, (err) => {
        res.status(400).send(err)
    })
})

app.get('/todos', (req, res) => {
    Todo.find().then(todos => {
        res.status(200).send({ todos })
    }, (err) => {
        res.status(400).send(err)
    })
})

app.listen('3000', () => {
    console.log('server started at port 3000')
})