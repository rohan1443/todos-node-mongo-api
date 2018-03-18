const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')
const _ = require('lodash')

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

//find by id
app.get('/todos/:id', (req, res) => {
	const id = req.params.id

	if (!ObjectID.isValid(id)) {
		return res.status(404).send('invalid id requested')
	}

	Todo.findById(id).then(todo => {
		if (!todo) {
			return res.status(404).send("id doesn't exist")
		}

		res.status(200).send({ todo })
	}, (err) => {

	}).catch(e => {
		res.status(400).send()
	})
})

app.post('/users', (req, res) => {
	const body = _.pick(req.body, ['email', 'password'])
	var user = new User(body)

	//User.findByToken ... method on the model
	//user.genreateAuthToken ... method on the instance of the model for any particula user

	user.save().then(user => {
		return user.generateAuthToken()
		//res.status(200).send(userDetail)
	}).then((token) => {
		res.header('x-auth', token).send(user)
	}).catch(err => {
		node
		console.log(err)
		res.status(400).send(err)
	})
})

app.get('/users', (req, res) => {
	User.find().then(users => {
		res.status(200).send({ users })
	}).catch(err => {
		res.status(400).send(err)
	})
})




app.listen('3000', () => {
	console.log('server started at port 3000')
})