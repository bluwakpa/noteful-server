require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const knex = require('knex')
const { NODE_ENV } = require('./config')
const foldersRouter = require('./folders/folders-router')
const notesRouter = require('./notes/notes-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.use('/api/notes', notesRouter)

app.use('/api/folders', foldersRouter) 

// app.get('/notes', (req, res, next) => {
//     const knexInstance = req.app.get('db')
//     ArticlesService.getAllArticles(knexInstance)
//     .then(notes => {
//         res.json(articles)
//       })
//       .catch(next)
//   });
  
// app.get('/folders', (req, res, next) => {
//     const knexInstance = req.app.get('db')
//     ArticlesService.getAllArticles(knexInstance)
//     .then(articles => {
//         res.json(articles)
//       })
//       .catch(next)
//   });

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
})

module.exports = app