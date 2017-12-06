'use strict'

var express = require('express');
var OpinionesController = require('../controllers/opiniones');
var api = express.Router();

api.get('/get', OpinionesController.ObtenerOpiniones);
module.exports = api;