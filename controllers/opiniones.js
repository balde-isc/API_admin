'use strict'
var Opinion = require('../models/opiniones');

 function pruebas (req, res){
  res.status(200).send({
    message: 'probando el api rest del usuario con node y mongo'
  });
}

function ObtenerOpinionesLikeSeg (req, res){
  Opinion.find({ opinion: "like", motivo:"seguridad"},(err, opiniones)=>{
    if(err) return res.status(500).send({message: "erro al pedir opiniones"});
    if(!opiniones) return res.status(402).send({message: "no existen opiniones"});
    
    res.send(200, {opiniones});
  });
}
function ObtenerOpinionesLikeVia (req, res){
  Opinion.find({ opinion: "like", motivo:"vialidad"},(err, opiniones)=>{
    if(err) return res.status(500).send({message: "erro al pedir opiniones"});
    if(!opiniones) return res.status(402).send({message: "no existen opiniones"});
    
    res.send(200, {opiniones});
  });
}
function ObtenerOpinionesLikeInf (req, res){
  Opinion.find({ opinion: "like", motivo:"infrastructura"},(err, opiniones)=>{
    if(err) return res.status(500).send({message: "erro al pedir opiniones"});
    if(!opiniones) return res.status(402).send({message: "no existen opiniones"});
    
    res.send(200, {opiniones});
  });
}
function ObtenerOpinionesDisLikeSeg (req, res){
  Opinion.find({ opinion: "dislike", motivo:"seguridad"},(err, opiniones)=>{
    if(err) return res.status(500).send({message: "erro al pedir opiniones"});
    if(!opiniones) return res.status(402).send({message: "no existen opiniones"});
    
    res.send(200, {opiniones});
  });
}
function ObtenerOpinionesDisLikeVia (req, res){
  Opinion.find({ opinion: "dislike", motivo:"vialidad"},(err, opiniones)=>{
    if(err) return res.status(500).send({message: "erro al pedir opiniones"});
    if(!opiniones) return res.status(402).send({message: "no existen opiniones"});
    
    res.send(200, {opiniones});
  });
}

function ObtenerOpinionesDisLikeInf (req, res){
  Opinion.find({ opinion: "dislike", motivo:"infrastructura"},(err, opiniones)=>{
    if(err) return res.status(500).send({message: "erro al pedir opiniones"});
    if(!opiniones) return res.status(402).send({message: "no existen opiniones"});
    
    res.send(200, {opiniones});
  });
}


module.exports = {
  ObtenerOpinionesLikeSeg,
  ObtenerOpinionesLikeVia,
  ObtenerOpinionesLikeInf,
  ObtenerOpinionesDisLikeSeg,
  ObtenerOpinionesDisLikeVia,
  ObtenerOpinionesDisLikeInf

};