const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password also')
  process.exit(1)
}

//const password = process.argv[2]

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})


const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: process.argv[3],
  number: process.argv[4]
})

if (process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length === 5) {
  person.save().then(
    console.log(`added ${person.name} number ${person.number} to phonebook`),
    mongoose.connection.close()
  )

}



