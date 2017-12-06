'use strict'
var Opinion = require('../models/opiniones');

 function pruebas (req, res){
  res.status(200).send({
    message: 'probando el api rest del usuario con node y mongo'
  });
}

function ObtenerOpiniones (req, res){
  Opinion.find({},(err, opiniones)=>{
    if(err) return res.status(500).send({message: "erro al pedir opiniones"});
    if(!opiniones) return res.status(402).send({message: "no existen opiniones"});
    
    res.send(200, {opiniones});
  })
}

module.exports = {
ObtenerOpiniones
};