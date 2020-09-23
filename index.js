require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const { response, request } = require('express')
const app = express()
const Person = require('./models/person')
const cors = require('cors')

app.use(express.static('build'))
app.use(express.json())
//app.use(logger) mikä tämä on?? 
//app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :bodydata'))
morgan.token('bodydata', (request, response) => JSON.stringify(request.body))
const person = require('./models/person')
app.use(cors())


/*let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]*/
app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/info', (request, response) => {
    Person.countDocuments({}, function (error,sum) {
        response.send(`<p>Phonebook has info for ${sum} people</p>
     <p>${new Date()}</p>`)
     
    });
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})


/*app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})*/

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

/*const generateId = () => {
    let id = Math.floor(Math.random() * Math.floor(1000000))
    const allids = persons.map(person => person.id)

    return id
}*/

app.post('/api/persons', (request, response) => {
    const body = request.body
    //console.log(request.headers)
    //console.log(request.body)
    //console.log(body.name, typeof body.name, body.number, typeof body.number)

    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    }

    if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    }
    //TÄÄ FIKSATAAN LATERS
    /*if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }*/

    const person = new Person({
        name: body.name,
        number: body.number,
        //id: generateId()
    })
    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
    //persons = persons.concat(person)
    //response.json(person)
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: ' unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    next(error)
}

app.use(errorHandler)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
