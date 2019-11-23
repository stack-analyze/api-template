//modules
const express = require('express')
const cors= require('cors')
const { join } = require('path')

//initial app
const app = express()

const { json, urlencoded,static }= express

//settings
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

//middlewares
app.use(cors())
app.use(urlencoded({extended: false}))
app.use(json())
app.use(static(join(__dirname,'public')))

//routes
app.use('/', require('./routes/index'))
app.use('api/data', require('./routes/data'))

module.exports= app;
