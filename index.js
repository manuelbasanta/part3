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
const getRan = () => {
    return Math.floor(Math.random() * 10000)
}

app.get('/api/persons', (req, res) => {
    res.json(data);
})

app.get('/api/persons/:id', (req, res) => {
    const person = data.find(person => person.id === Number(req.params.id));
    if(!person) res.status(404).end()
    else res.json(person)
})

app.get('/info', (req, res) => {
    const numberOfPeople = data.length;
    const time = new Date();

    res.send(`<p>Phonebook has info for ${numberOfPeople} people</p><p>${time}</p>`)
    res.json(data);
})

app.delete('/api/persons/:id', (req, res) => {
    data = data.filter(person => person.id !== Number(req.params.id));
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const { name, number } = req.body;
    if(!name || !number) return res.status(400).json({  error: 'missing data' })
    
    const duplicate = data.find(person => person.name === name);
    if(duplicate) return res.status(400).json({ error: 'name must be unique' })

    const person = {
        name,
        number,
        id: getRan()
    }

    data.push(person)
    res.json(person)
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

