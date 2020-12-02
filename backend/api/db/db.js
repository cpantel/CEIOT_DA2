var mysql = require('mysql');
var configMysql = {
    connectionLimit: 10,
    host: 'localhost',      /* dam_db_1  */
    port: 3306,
    user: 'root',
    password: 'sdfjku3348',
    database: 'DAM'
}
var pool = mysql.createPool(configMysql);
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
        }
        if (connection) {
            connection.release();
        }
        return;
    } else {
        console.log("db connection up and running");
    }
});
module.exports = pool;

