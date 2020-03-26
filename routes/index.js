const express = require('express')
const router = express.Router();

//importamos el controlador
const proyectosController = require('../controllers/proyectosController')

module.exports = function(){
    //rutas para el home
    //definir el midewire
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);
    


    return router

}

