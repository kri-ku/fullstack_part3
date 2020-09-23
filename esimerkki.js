const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

//komentoriviparametriin käsiksi näin
const password = process.argv[2]

/*const url =
  `mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/test?retryWrites=true`*/

  const url =
  `mongodb+srv://fullstack:${password}@cluster0.ezxec.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })


const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

Note.find({important:false}).then(result =>{
  result.forEach(note=> {
    console.log(note)
  })
  mongoose.connection.close()
})

/*const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

const note2 = new Note({
  content: 'Javascript is fun',
  date: new Date(),
  important: true,
})

const note3 = new Note({
  content: 'Life is good',
  date: new Date(),
  important: false,
})

note.save().then(response => {
  console.log('note saved!')
  //mongoose.connection.close()
})
note2.save().then(response => {
  console.log('note2 saved!')
  //mongoose.connection.close()
})

note3.save().then(response => {
  console.log('note3 saved!')
  mongoose.connection.close()
})*/