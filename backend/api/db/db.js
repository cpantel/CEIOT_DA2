var mysql = require('mysql');
var configMysql = {
    connectionLimit: 10,
    host: 'db',
    port: 3306,
    user: 'root',
    password: 'sdfjku3348',
    database: 'DAM'
}

var pool = mysql.createPool(configMysql);
connect();

function connect() {
    pool.getConnection((err, connection) => {
        if (err) {
            switch (err.code) {
                case 'PROTOCOL_CONNECTION_LOST':
                    console.error('La conexion a la DB se cerró.');
                    break;
                case 'ER_CON_COUNT_ERROR':
                    console.error('La base de datos tiene muchas conexiones');
                    break;
                case 'ECONNREFUSED':
                    console.error('La conexion fue rechazada');
                    break;
                default:
                    console.error(err);
            }
            if (connection) {
                connection.release();
            }
            console.log("Reintentando conexión...")
            setTimeout(connect, 15000)
            return;

        } else {
            console.log("Conexión a db ok");
            return;
        }
    });

}


module.exports = pool;

