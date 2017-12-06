'use strict'

var express = require('express');
var OpinionesController = require('../controllers/opiniones');
var api = express.Router();

api.get('/getLikeSeg', OpinionesController.ObtenerOpinionesLikeSeg);
api.get('/getLikeVia', OpinionesController.ObtenerOpinionesLikeVia);
api.get('/getLikeInf', OpinionesController.ObtenerOpinionesLikeInf);

api.get('/getDisLikeSeg', OpinionesController.ObtenerOpinionesDisLikeSeg);
api.get('/getDisLikeVia', OpinionesController.ObtenerOpinionesDisLikeVia);
api.get('/getDisLikeinf', OpinionesController.ObtenerOpinionesDisLikeInf);

module.exports = api;