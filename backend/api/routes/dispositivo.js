var express = require('express');
var routerDispositivo = express.Router();
var pool = require('../db/db');

//Devuelve un array de dispositivos
routerDispositivo.get('/', function(req, res) {
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/:id', function(req, res) {
    pool.query('Select * from Dispositivos where dispositivoId = ?', [req.params.id],function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

module.exports = routerDispositivo;
