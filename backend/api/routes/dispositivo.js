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

var estadoElectrovalvulaQuery =  `
select
  Dispositivos.dispositivoId,
  Electrovalvulas.electrovalvulaId,
  Electrovalvulas.nombre as electrovalvulaNombre,
  Log_Riegos.apertura
from Dispositivos
inner join Electrovalvulas
  on Dispositivos.electrovalvulaId = Electrovalvulas.electrovalvulaId
left join Log_Riegos
  on Electrovalvulas.electrovalvulaId = Log_Riegos.electrovalvulaId
where
  dispositivoId = ?
order by
  Log_Riegos.fecha desc
limit 1
`;

routerDispositivo.get('/:idDispositivo/electrovalvula', function(req, res) {
    pool.query(estadoElectrovalvulaQuery, [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            console.log(err);
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

//Devuelve un array de dispositivos
routerDispositivo.get('/', function(req, res) {
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
             console.log(err);
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/:idDispositivo/medicion', function(req, res) {
    pool.query(medicionesQuery, [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            console.log(err);
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});
//Espera recibir por parámetro un id de dispositivo y devuelve su última medición
routerDispositivo.get('/:idDispositivo/medicion/ultima', function(req, res) {
    pool.query(ultimaMedicionQuery, [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            console.log(err);
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/:idDispositivo/riego', function(req, res) {
    pool.query(riegoQuery, [req.params.idDispositivo], function(err, result, fields) {
        if (err) {
            console.log(err);
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});
/*
//Espera recibir por parámetro un id de dispositivo y un valor de medición y lo inserta en base de datos.
routerDispositivo.post('/idDispositivo/medicion', function(req, res) {
    pool.query(`Insert into Mediciones (fecha,valor,dispositivoId) 
               values (now(),?,?)`, 
               [req.body.valor, req.body.dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});
*/
//Espera recibir por parámetro un id de electrovalvula, una fecha y un valor de estado y lo inserta en base de datos.
routerDispositivo.post('/:idDispositivo/electrovalvula', function(req, res) {
    pool.query(`Insert into Log_Riegos (fecha,apertura,electrovalvulaId) 
                values (now(),?,(select electrovalvulaId from Dispositivos where dispositivoId = ?))`,
                [req.body.apertura, req.params.idDispositivo], function(err1, result1, fields1) {
        if (err1) {
            console.log(err);
            res.send(err1).status(400);
            return;
        }

        if ( req.body.apertura == false) {
          pool.query('select valor from Mediciones where dispositivoId = ? order by fecha desc limit 1',
                     [req.params.idDispositivo], function(err2, result2, fields2) {
            if (err2) {
              console.log(err2);
              return;
            }
            pool.query(`Insert into Mediciones (dispositivoId, fecha, valor)
                        values (?, now(),?)`,
                        [req.params.idDispositivo, result2[0].valor], function(err3, result3, fields3) {
              if (err3) {
                console.log(err);
                return
              }
            })

          })
        }
        res.send(result1);
    });
});


module.exports = routerDispositivo;
