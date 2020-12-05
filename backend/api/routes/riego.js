var express = require('express');
var routerRiego = express.Router();
var pool = require('../db/db');

//Espera recibir por parámetro un id de dispositivo y devuelve su última medición
routerRiego.get('/:idElectrovalvula', function(req, res) {
    console.log()
    pool.query('Select * from Log_Riegos where electrovalvulaId=? order by fecha desc', [req.params.idElectrovalvula], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});


//Espera recibir por parámetro un id de electrovalvula, una fecha y un valor de estado y lo inserta en base de datos.
routerRiego.post('/', function(req, res) {
    pool.query('Insert into Log_Riegos (fecha,valor,electrovalvulaId) values (?,?,?)', [req.body.fecha, req.body.valor, req.body.electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

module.exports = routerRiego;