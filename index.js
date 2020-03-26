//creamos el servudir
const express = require('express')

const routes = require('./routes')
const bodyParser = require('body-parser')

// para leer la carpeta agregaros el path
const path = require('path')




//crear una app de express
const app = express()

//Cargar los archivos estaticos como el CSS etc
app.use(express.static('public'))

//habilitar pug
app.set('view engine', 'pug')

//Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended:true}))

//añadir carpeta de vistas de esta manera sabe donde estan las vistas
app.set('views', path.join(__dirname, './views'))

app.use('/', routes())

app.listen(3000)