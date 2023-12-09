require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const app  = express();
app.use(cors())
app.use(express.json());
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('static'))
const Person = require('./models/person');
const { errorHandler, unknownEndpoint } = require('./middlewares');

app.get('/api/persons', (req, res) => {
    Person.find({})
        .then(people => res.json(people))
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            if(person) return res.json(person)
            res.status(404).end()
        })
        .catch(err => next(err))
})

app.get('/info', (req, res, next) => {
    const time = new Date();
    Person.countDocuments({})
        .then(data => {
            res.send(`<p>Phonebook has info for ${data} people</p><p>${time}</p>`)
        })
        .catch(err => next(err))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndDelete(req.params.id)
        .then(data => res.status(204).end())
        .catch(err => next(err))
})

app.post('/api/persons', (req, res, next) => {
    const { name, number } = req.body;
    
    const person = new Person({
        name,
        number,
    })

    person.save()
        .then(newPerson => res.json(newPerson))
        .catch(err => next(err))
})

app.put('/api/persons/:id', (req, res, next) => {
    const { name, number } = req.body;
    const person = {
        name,
        number,
    }
    Person.findByIdAndUpdate(req.params.id, person, { new: true, runValidators: true, context: 'query' } )
        .then(data => res.json(data))
        .catch(err => next(err))
})

app.use(unknownEndpoint, errorHandler)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

