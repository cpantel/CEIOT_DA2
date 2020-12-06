var express = require('express');
var routerDispositivo = express.Router();
var pool = require('../db/db');

var medicionesQuery = `select 
*
from Dispositivos
left join Mediciones
  on Dispositivos.dispositivoId = Mediciones.dispositivoId
where 
  Dispositivos.dispositivoId = ?
order by
  Mediciones.fecha desc
`;

var ultimaMedicionQuery = medicionesQuery + " limit 1";

var riegoQuery = `
select
  Dispositivos.dispositivoId,
  Dispositivos.nombre as dispositivoNombre,
  Dispositivos.ubicacion,
  Electrovalvulas.electrovalvulaId,
  Electrovalvulas.nombre as electrovalvulaNombre,
  Log_Riegos.apertura,
  Log_Riegos.fecha
from Dispositivos
inner join Electrovalvulas
  on Dispositivos.electrovalvulaId = Electrovalvulas.electrovalvulaId
left join Log_Riegos
  on Electrovalvulas.electrovalvulaId = Log_Riegos.electrovalvulaId
where
  dispositivoId = ?
order by
  Log_Riegos.fecha desc
`;

//Devuelve un array de dispositivos
routerDispositivo.get('/', function(req, res) {
    console.log("dispositivos")
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/:idDispositivo/medicion', function(req, res) {
    console.log("todas")
    pool.query(medicionesQuery, [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});
//Espera recibir por parámetro un id de dispositivo y devuelve su última medición
routerDispositivo.get('/:idDispositivo/medicion/ultima', function(req, res) {
    console.log("ultima")
    pool.query(ultimaMedicionQuery, [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/:idDispositivo/riego', function(req, res) {
    console.log()
    pool.query(riegoQuery, [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

//Espera recibir por parámetro un id de dispositivo y un valor de medición y lo inserta en base de datos.
/*routerMedicion.post('/', function(req, res) {
    pool.query('Insert into Mediciones (fecha,valor,dispositivoId) values (?,?,?)', [req.body.fecha, req.body.valor, req.body.dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

*/

/*

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

*/
module.exports = routerDispositivo;
