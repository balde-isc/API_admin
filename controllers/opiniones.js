'use strict'
var Opinion = require('../models/opiniones');

function pruebas(req, res) {
  res.status(200).send({
    message: 'probando el api rest del usuario con node y mongo'
  });
}
