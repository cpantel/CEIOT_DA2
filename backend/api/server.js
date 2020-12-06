const express = require("express");
const app = express();
const pool = require("./db/db");
const cors = require("cors");

var routerDispositivo = require('./routes/dispositivo');

app.use(express.json());

var whitelist = ['http://localhost:4200'];

var corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

app.use('/api/dispositivo', routerDispositivo);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`######### Device Server is running on port ${PORT} #########`);
});
