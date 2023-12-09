require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
let data = require('./data.json');
const app  = express();
app.use(cors())
app.use(express.json());
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('static'))
const Person = require('./models/person')

app.get('/api/persons', (req, res) => {
    Person.find({})
        .then(people => res.json(people))
})

app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id)
        .then(person => res.json(person))
        .catch(err => res.status(404).end())
})

app.get('/info', (req, res) => {
    const numberOfPeople = data.length;
    const time = new Date();

    res.send(`<p>Phonebook has info for ${numberOfPeople} people</p><p>${time}</p>`)
    res.json(data);
})

app.delete('/api/persons/:id', (req, res) => {
    Person.findByIdAndDelete(req.params.id)
        .then(data => res.status(204).end())
        .catch(err => res.status(204).end())
})

app.post('/api/persons', (req, res) => {
    const { name, number } = req.body;
    if(!name || !number) return res.status(400).json({  error: 'missing data' })
    
    const person = new Person({
        name,
        number,
    })

    person.save().then(newPerson => res.json(newPerson))
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

